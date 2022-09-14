---
title: Guide de style
---

## Comment est-ce qu'on écrit une fonction (arrow function vs function declaration)

Javascript permet la définition de "arrow functions". Bien qu'ayant des [différences non négligeables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) avec leurs consœurs, on utilise l'une ou l'autre syntaxe en fonction des préférences personnelles.

On DEVRAIT utiliser les "arrow functions" dans les cas suivants, et uniquement dans les cas suivants:

- dans des "callback":

  ```jsx
  list
    .map((entity) => entity.id)
    .filter((id) => id > 5)
    .some((id) => id % 2 === 0);

  <button onClick={() => setVisible(true)}>show</button>;
  ```

- Si sa définition ne fait qu'une seule ligne, avec un seul retour possible :
  ```js
  const isValid = (entity) => entity.itemList.some((item) => item.isValid);
  ```

On DEVRAIT utiliser la déclaration de fonction dans tous les autres cas :

```js
function isValid(entity) {
  if (!entity) {
    return false;
  }

  return entity.itemList.some((item) => item.isValid);
}

function handleClick(event) {
  event.preventDefault();

  doSomething();
}
```

:::info Pourquoi ?
Bien que les arrow-function amène une certaine "légèreté" au code, le modèle mental lorsque l'on définit des "arrow-functions" peut rendre la compréhension plus difficile.
Le gain de "légèreté" n'existe plus dès que l'on a besoin d'imbriquer du code dans des accolades.
:::

:::note À lire aussi
Le guide JavaScript de AirBnB [sur les arrow functions](https://github.com/airbnb/javascript#arrow-functions) donne des informations intéressantes sur la façon d'utiliser les arrow functions. Ils définissent pour leur part les cas suivants:

> Lorsque vous devez utiliser des fonctions anonymes (comme pour passer une fonction de retour en-ligne), utilisez la notation "arrow-function"
>
> Pourquoi ? Cela crée une version de la fonction qui s'execute dans le contexte actuel (this), qui est habituellement ce que l'on souhaite, et la syntaxe est plus concise.

> Quand ne pas l'utiliser ? Si vous avez une function assez compliquée, vous devriez sortir cette logique dans sa propre fonction nommée.

:::

## Constantes & Enums

On DEVRAIT utiliser des constantes lorsqu'on utilise une donnée simple (`string` | `number` | `boolean`...) en tant que valeur de configuration (d'une fonction ou autre).

```jsx
const TIMEOUT_DELAY = 1000;

setTimeout(doSomething, TIMEOUT_DELAY);
```

```jsx
const EVENT_DATE_BY_LIST = "list";
const EVENT_DATE_BY_DATE = "date";
// ...
const [selectedTab, setSelectedTab] = useState(EVENT_DATE_BY_LIST);
```

Dans le cas où plusieurs constantes sont utilisées à plusieurs endroits, on privilégiera de les regrouper sous un [enum TypeScript](https://www.typescriptlang.org/docs/handbook/enums.html). Cela rend également le typage beaucoup plus simple.

```tsx
export enum MODULE_TYPE {
  INFORMATION = "information",
  RECOMMENDATION = "recommendation",
  PROMOTE = "promote",
}

function generateModule(moduleType: MODULE_TYPE) {
  if (moduleType === MODULE_TYPE.INFORMATION) {
    // do something
  }

  // do something else
}
```

:::info Convention
On DEVRAIT écrire les constantes de configuration et enums en MAJUSCULE.
:::

## Espacements entre les types de déclarations

Afin de gagner en lisibilité dans la lecture du code, on DOIT ajouter une ligne vide au-dessus d'un type de déclaration quand le précédent est différent.

```jsx
function Foo() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  let name = "JD";

  if (!loading) {
    name = "Chris";
  }

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <MpdLoader />;
  }

  return <div>{t("hello", { name })}</div>;
}
```

Dans l'exemple ci-dessus, on remarque la construction suivante :

- Un espace est présent entre les variables et le `if` ;
- Un espace est présent entre le `if` et le `useEffect` ;
- À l'intérieur du `useEffect`, un espace est présent entre la variable et le `return` ;
- Un espace est présent entre le `useEffect` et le `if` ;
- Le `return` dans le `if` n'a pas d'espacement car il est tout seul ;
- Un espace est présent entre le `if` et le `return` ;

:::info Eslint
La règle eslint [padding-line-between-statements](https://eslint.org/docs/latest/rules/padding-line-between-statements) est disponible sur les projets pour détecter une erreur si ce schéma n'est pas respecté.
:::
