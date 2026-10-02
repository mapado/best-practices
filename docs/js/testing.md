---
title: 'Test JS & Front'
---

Cette liste est surtout un rappel de la façon dont on crée des tests UI / JS à Mapado, et des librairies que nous utilisons.

La configuration de chacune de ces librairies ne sera pas expliquée ici, car elle dépend de votre projet.

### Librairies

- [Vitest](https://vitest.dev/) est notre librairie de base pour les tests et les assertions sur les projets web (monorepo `front` : desk, minisite, packages `@mapado/*`). L'application mobile React Native utilise encore [Jest](https://jestjs.io/), dont l'API est quasiment identique (`jest.fn()` au lieu de `vi.fn()`).

- [Testing Library](https://testing-library.com/) est notre librairie pour tester des composants React : [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) sur le web, [`@testing-library/react-native`](https://callstack.github.io/react-native-testing-library/) sur le mobile, et [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro) pour simuler les interactions.

:::caution Enzyme
On NE DOIT PLUS utiliser [Enzyme](https://enzymejs.github.io/enzyme/) : la librairie n'est plus maintenue et ne supporte pas React 18.
:::

Pour simuler des données, nous utilisons d'autres librairies, en fonction du cas.

Pour simuler le `store` redux (afin de tester des actions ou des composants connectés), vous pouvez utiliser [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store).

Pour simuler des appels HTTP, nous utilisons [metch-fock](https://github.com/mapado/metch-fock) ou [nock](https://github.com/nock/nock).

### Comment tester

La façon de tester tourne autour de l'idée de la [Pyramide des tests](https://martinfowler.com/articles/practical-test-pyramid.html), c'est-à-dire trouver le bon équilibre entre les tests unitaires, rapides à écrire et à exécuter mais isolés, et les tests fonctionnels, lents à écrire et à exécuter mais qui testent le comportement réel.

- Les tests unitaires sont simples et rapides à écrire. C'est idéal pour tester vos fonctions utilitaires, vos reducers et vos sélecteurs.

- Les tests d'intégration testent qu'un composant ou un hook s'affiche sans erreur, réagit aux interactions, appelle les bonnes fonctions, etc. On les écrit avec Testing Library.

- Le [_snapshot testing_](https://vitest.dev/guide/snapshot) permet de sérialiser le résultat d'une fonction ou d'un composant, de le sauvegarder dans un fichier, puis de vérifier qu'il n'a pas changé. C'est rapide à écrire, mais il est facile d'y laisser passer des régressions : on lui préfère des assertions explicites.

- Les tests fonctionnels tournent dans de vrais navigateurs. Comme ils sont lents, ils ne devraient être utilisés que pour tester les chemins critiques de l'application.

### Tests unitaires

```js
import { describe, expect, it } from 'vitest';

function getFullname(lastname, firstname) {
  const label = `${lastname ?? ''} ${firstname ?? ''}`;

  return label.trim();
}

describe('utils', () => {
  it('can craft a fullname', () => {
    expect(getFullname()).toEqual('');
    expect(getFullname('lastname')).toEqual('lastname');
    expect(getFullname(null, 'firstname')).toEqual('firstname');
    expect(getFullname('lastname', 'firstname')).toEqual('lastname firstname');
  });
});
```

### Tests de composants avec Testing Library

On DEVRAIT tester ce que voit et fait l'utilisateur, pas l'implémentation du composant :

- On DEVRAIT récupérer les éléments via `screen`, et de préférence par leur rôle ou leur libellé (`getByRole`, `getByLabelText`, `getByText`), plutôt que par une classe CSS.
- On DEVRAIT simuler les interactions avec `userEvent` plutôt qu'avec `fireEvent`, car `userEvent` reproduit la séquence complète d'évènements d'un vrai utilisateur.
- Pour attendre un rendu asynchrone, on DEVRAIT utiliser `findBy*` ou `waitFor` plutôt que de faire avancer des timers à la main.

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ItemSelectorModal from './ItemSelectorModal';

describe('ItemSelectorModal', () => {
  it('calls onSelectedItem with the selected item', async () => {
    const user = userEvent.setup();
    const handleSelectedItem = vi.fn();

    render(
      <ItemSelectorModal
        itemArray={['item1', 'item2', 'item3']}
        onSelectedItem={handleSelectedItem}
        onCancel={vi.fn()}
      />
    );

    await user.click(screen.getByRole('radio', { name: 'item2' }));
    await user.click(screen.getByRole('button', { name: 'Valider' }));

    expect(handleSelectedItem).toHaveBeenCalledTimes(1);
    expect(handleSelectedItem).toHaveBeenCalledWith('item2');
  });
});
```

:::caution Fake timers
Combiner `userEvent` et `vi.useFakeTimers()` peut bloquer le test quand l'interaction déclenche une mise à jour asynchrone. On DEVRAIT garder les vrais timers et attendre avec `findBy*` / `waitFor`. Si les fake timers sont indispensables, il faut les brancher sur `userEvent` : `userEvent.setup({ advanceTimers: vi.advanceTimersByTime })`.
:::

### Tests de hooks

`renderHook` est exporté par `@testing-library/react`. Le paquet `@testing-library/react-hooks` est obsolète : on NE DOIT PAS l'utiliser.

```js
import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useCurrentCart from './useCurrentCart';

describe('useCurrentCart', () => {
  it('fetches the cart', async () => {
    const cart = { id: 42, title: 'My cart' };
    const sdk = { find: vi.fn().mockResolvedValue(cart) };

    const { result } = renderHook(() => useCurrentCart(sdk, 42));

    await waitFor(() => expect(result.current.cart).toEqual(cart));
    expect(sdk.find).toHaveBeenCalledWith(42);
  });
});
```

### Dépendances des composants : vrais providers plutôt que des mocks

Quand un composant ou un hook dépend d'un contexte (SDK, store redux, toasts…), on DEVRAIT l'encapsuler dans les vrais providers et leur passer une valeur de test, plutôt que de mocker les modules avec `vi.mock()`. Le test reste ainsi proche du fonctionnement réel, et ne casse pas quand l'implémentation interne du module change.

```jsx
import { render } from '@testing-library/react';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect, it } from 'vitest';
import { Cart } from '@mapado/ticketing-js-sdk';
import { FETCH_OFFER_LIST } from '../actions/offer';
import PriceListContainer from './PriceListContainer';

const mockStore = configureMockStore([thunk]);

it('fetches the offer list on mount', () => {
  const cart = new Cart({ '@type': 'Cart', currency: 'EUR' });
  const store = mockStore({ booking: Map({ currentCart: cart }) });

  render(
    <Provider store={store}>
      <PriceListContainer />
    </Provider>
  );

  expect(store.getActions()).toEqual([{ type: FETCH_OFFER_LIST }]);
});
```
