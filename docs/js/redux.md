---
title: 'Redux'
---

À [Mapado](https://www.mapado.com), nous commençons de plus en plus à travailler avec du React + Redux, et étant donné que ce sont simplement des librairies assez permissives, chaque développeur a un peu sa manière de faire.

Nous avions donc besoin de standardiser nos façons de faire. C'est chose faite !

Nous sommes très preneurs de retours sur ces sujets si vous avez des utilisations différentes, en ouvrant [une issue](https://github.com/mapado/best-practices/issues) ou une pull request.

### Quand utiliser Redux

Redux **NE DOIT ÊTRE** utilisé que lorsqu'il y a un besoin global de partage à travers toute l'application.

React permet déjà d'avoir des infos dans son state, et [l'API contexte](https://react.dev/learn/passing-data-deeply-with-context) permet de partager efficacement les données entre composants.

En savoir plus : ["You might not need Redux" par Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).

### Librairies utilisées avec Redux

- Sélecteurs : [reselect](https://github.com/reduxjs/reselect)
- Structures de données : [immutable-js](https://immutable-js.com/)
- Middlewares pour actions asynchrones : [redux-thunk](https://github.com/reduxjs/redux-thunk), et [redux-observable](https://redux-observable.js.org/) pour les flux asynchrones plus complexes (annulation, debounce, enchaînement d'actions…)

### Le guide de bonne pratique de redux

Redux propose le [Redux Style Guide](https://redux.js.org/style-guide/style-guide) qui est leur guide "officiel" pour écrire du code redux. C'est un très bon guide pour savoir quelle approche utiliser et savoir comment architecturer son code.

### Immutabilité des states

Les states **DOIVENT** être des `Map` ou des `Record` immutable-js.

Redux marque comme essentiel le fait de [ne pas "muter" les states](https://redux.js.org/style-guide/style-guide#do-not-mutate-state)

### Initialisation du "state"

Le "state" **DEVRAIT** être initialisé par défaut avec toutes les clés qu'il peut utiliser.

> Cela permet aux composants de toujours avoir leur valeurs "settée" et de ne pas traiter les cas `if null`.
>
> Cela permet aussi aux "containers" de ne pas avoir cette logique à gérer, par exemple : `state.foo.get('bar') || false`.

On **PEUT** utiliser un `Record` immutable pour interdire tout ajout de nouvelle clé, et ainsi avoir du sucre syntaxique pour y accéder (`state.foo.bar` plutôt que `state.foo.get('bar')`).

#### Suppression de clé

On ne **DOIT PAS** supprimer de clé du state.

> Si l'on supprime une clé, on se retrouve dans le même cas que précédemment.

Du coup : préférez `state.set('foo', false)`, ou `state.set('foo', null)` plutôt que `state.remove('foo')`.

### Dispatch dans les actions

On ne **DEVRAIT PAS** envoyer trop de `dispatch` dans les actions.

On ne **DEVRAIT PAS** envoyer deux dispatch successifs s'il n'y a pas besoin de rafraîchir la vue.

> Un `dispatch` entraine un rafraîchissement des composants React.

C'est plutôt au reducer de faire ce job:

👎

```js {21-28}
function reducer(state, action) {
  switch (action.type) {
    case 'FOO':
      return foo(state, action.foo);
    case 'BAR':
      return bar(state, action.bar);
  }
}

function simpleAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO',
      foo: 'foo',
    });
  };
}

function complexAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO',
      foo: 'foo',
    });
    dispatch({
      type: 'BAR',
      bar: 'bar',
    });
  };
}
```

👍

```js {21-25}
function reducer(state, action) {
  switch (action.type) {
    case 'FOO':
      return foo(state, action.foo);
    case 'FOO and BAR':
      return fooAndBar(state, action.foo, action.bar);
  }
}

function simpleAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO',
      foo: 'foo',
    });
  };
}

function complexAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO and BAR',
      foo: 'foo',
      bar: 'bar',
    });
  };
}
```

cf. [Avoid Dispatching Many Actions Sequentially](https://redux.js.org/style-guide/style-guide#avoid-dispatching-many-actions-sequentially)

### Statut des actions effectuées sur les données

Lors d'un appel asynchrone, nous avons souvent besoin de savoir l'état de cet appel (pour afficher un loader ou un message d'erreur, par exemple).

Appelons "clé de la donnée" la clé dans le state redux où sera stockée notre donnée une fois récupérée.

Nous **POUVONS** stocker le _status_ de cette donnée sous une autre clé dans notre state redux.

La clé de la donnée concernant le status **DOIT** avoir la forme suivante : `<clé de la donnée>-<action>-status`.

> Les `-` ont ici la même utilité que dans BEM par exemple.
>
> Étant donné que nos states sont des objets immutable, l'utilisation d'un `-` n'est pas très gênant.

`<action>` est le nom de l'action étant effectuée sur la donnée, par exemple “articleList-fetch-status”.

La valeur **DOIT** être une Map contenant une clé `status` et une clé `error`.

#### Valeur de la clé `status`

La valeur de `status` **DEVRAIT** prendre les valeurs suivantes :

- null
- IN_PROGRESS
- SUCCEEDED
- FAILED

Elle **PEUT** aussi prendre une valeur personnalisée, par exemple :

- IN_PROGRESS_BOTTOM
- IN_PROGRESS_TOP

#### Valeur de la clé `error`

L’erreur **DOIT** se trouver dans l’objet de status avec la clé `error`.

Sa valeur par défaut **DOIT** être `null`.

Sa valeur **DEVRAIT** être une string ou un objet.

C’est au composant d’avoir la logique de quoi faire en fonction de l’erreur.

#### Cas particulier : Opérations sur les items d’une liste

Les opérations sur les items d’une liste **DOIVENT** suivre la même logique, mais **PEUVENT** être stockées dans une `Map`.

Les clés de cette `Map` **DEVRAIT** être l'identifiant de l'item concerné.

Exemple (écrit en objets JS pour la lisibilité : en pratique, ce sont des `Map` immutable) :

```js
const state = {
  ticketList: [],

  'ticketList-fetch-status': {
    status: 'SUCCEEDED',
    error: null,
  },

  'ticketList-processingPrinting-status': {
    8: {
      status: 'IN_PROGRESS',
      error: null,
    },
    9: {
      status: 'FAILED',
      error: 'No more paper',
    },
  },
};
```

### Sélecteur vs state complexe

Le state **DEVRAIT** être utilisé pour stocker les données brutes.

Un sélecteur **DEVRAIT** être utilisé pour “grouper” / “filtrer” / “trier”, finalement “travailler” sur les données brutes pour les envoyer au composant.

Vous pouvez consulter la doc de [reselect](https://github.com/reduxjs/reselect) pour plus d'informations sur les sélecteurs.

cf. [Use Selector Functions to Extract and Transform Data](https://react-redux.js.org/using-react-redux/connect-mapstate#use-selector-functions-to-extract-and-transform-data)

### List vs Map vs Collection

On **DEVRAIT** suffixer le nom de la clé par le type de donnée.

- Si c'est une `List` d'articles, la clé devrait s'appeler `articleList`.
- Si c'est une `Map` d'articles, la clé devrait s'appeler `articleMap`.
- Si c'est un objet custom `FooBarCollection` contenant des articles, la clé devrait s'appeler `articleFooBarCollection`.

Il faut bien conserver le nommage de la clé de "status" en fonction.

Dans notre dernier exemple, la clé de status se nommera par exemple `articleFooBarCollection-fetch-status`.

### Profondeur du state

On **NE DEVRAIT PAS** avoir plus d'un niveau dans le state.

👎

```js {1,3-6}
  article: {
    items: [ /* some articles */ ],
    'fetch-status': {
      status: 'IN_PROGRESS',
      error: null,
    }
  },
  tag: {
    items: [ /* some tags */ ],
    'fetch-status': {
      status: 'SUCCEEDED',
      error: null,
    }
  },
```

👍

```js {2-5}
  articleList: [ /* some articles */ ],
  'articleList-fetch-status': {
    status: 'IN_PROGRESS',
    error: null,
  },
  tagList: [ /* some tags */ ],
  'tagList-fetch-status': {
    status: 'SUCCEEDED',
    error: null,
  },
```

### Mono-state vs multi-state

On **DEVRAIT** avoir un seul "state" dans le cas d'une application simple.

On **PEUT** avoir un découpage **fonctionnel** des states dans le cas d'une application complexe.
