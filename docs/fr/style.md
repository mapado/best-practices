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

- Si elle sa définition ne fait qu'une seule ligne, avec un seul retour possible :
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
