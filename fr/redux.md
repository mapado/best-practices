---
title: "Bonne pratiques Redux"
---

Bonne pratiques Redux
==============

A [Mapado](https://www.mapado.com), nous commençons de plus en plus à travailler avec du React + Redux, et étant donné que ce sont simplement des librairies assez permissives, chaque développeur a un peu sa manière de faire.

Nous avions donc besoin de standardiser nos façon de faire. C'est chose faite !

Ce document est encore à approuver, nous ne sommes pas forcément sûrs de nos choix, mais ils nous parraissent à l'heure actuelle les plus pertinents dans notre cas.

Nous sommes d'ailleurs très preneurs de retours à ces sujets si vous avez des façons de faire différentes, soit en ouvrant [une issue](https://github.com/mapado/best-practices/issues), soit sur twitter en nous interpellant sur @Mapado_com.

### Librairies utilisées avec Redux
  * Sélecteurs: [reselect](https://github.com/reactjs/reselect)
  * Structures de données: [immutable-js](https://facebook.github.io/immutable-js/)
  * Middleware pour actions asynchrones: [redux-thunk](https://github.com/gaearon/redux-thunk)

### Immutablitié des states

Les states **DOIVENT** être des `Map` ou des `Record` immutable-js.


### Initialisation du "state"

Le "state" **DEVRAIT** être initialisé par défaut avec toutes les clés qu'il peut utiliser.

> Cela permet aux composants de toujours avoir leur valeurs "settée" et de ne pas traiter les cas `if null`
>
> Cela permet aussi aux "containers" de ne pas avoir cette logique à gérer, par exemple: `state.foo.get('bar') || false`

ON **PEUT** utiliser un `Record` immutable pour interdire tout ajout de nouvelle clé et avoir du sucre syntaxique pour accéder à cette clé (`state.foo.bar` plutôt que `state.foo.get('bar')`)

#### Suppression de clé
On ne **DOIT PAS** supprimer des clé du state.

> Si l'on supprime une clé, on se retrouve dans le même cas que précédement

Du coup: préférez `state.set(‘foo’, false)`, ou `state.set('foo', null)` plutôt que `state.remove('foo')`

### Dispatch dans les actions

On ne **DEVRAIT PAS** envoyer trop de `dispatch` dans les actions.

On ne **DEVRAIT PAS** envoyer deux dispatch successif si pas besoin de rafraichir la vue.

> Un `dispatch` entraine un rafraichissement des composants React.

C'est plutôt au reducer de faire ce job:

👎
```js
function reducer(state, action) {
  case 'FOO':
    return foo(state, action.foo);
  case 'BAR':
    return bar(state, action.bar);
}

function simpleAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO',
      foo: 'foo',
    });
  }
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
  }
}
```

👍
```js
function reducer(state, action) {
  case 'FOO':
    return foo(state, action.foo);
  case 'FOO and BAR':
    return fooAndBar(state, action.foo, action.bar);
}

function simpleAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO',
      foo: 'foo',
    });
  }
}
function complexAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO and BAR',
      foo: 'foo',
      bar: 'bar',
    });
  }
}
```

### Status des actions sur données
Lors d'un appel asynchrone, nous avons souvent besoin de savoir l'état de cet appel (par exemple pour afficher un loader, ou un message d'erreur)

Appelons "clé de la donnée" la clé dans le state redux où sera stockée notre donnée une fois récupérée.

Nous **POUVONS** stocker le *status* de cette donnée sous une autre clé dans notre state redux.

La clé de  la donnée concernant le status **DOIT** avoir la forme suivante: `<clé de la donnée>-<action>-status`

> Les `-` ont ici la même utilité que dans BEM par exemple.
>
> Étant donné que nos states sont des objets immutable, l'utilisation d'un `-` ne gène que pas.

`<action>` est le nom de l'action étant effectué sur la donnée par exemple “articleList-fetch-status”

La valeur **DOIT** être une Map contenant une clé `status` et une clé `error`.

#### Valeur de la clé `status`

La valeur de `status` **DEVRAIT** prendre les valeur suivante: 
  * null
  * IN_PROGRESS
  * SUCCEEDED
  * FAILED

Elle **PEUT** aussi prendre une valeur personnalisée, par exemple :
  * IN_PROGRESS_BOTTOM
  * IN_PROGRESS_TOP

#### Valeur de la clé `error`
L’erreur **DOIT** se trouver dans l’objet de status avec la clé “error”.

Sa valeur par défaut **DOIT** être null.

Le contenu **PEUT** contenir une string ou un objet.

C’est au composant d’avoir la logique de quoi faire en fonction de l’erreur.


#### Cas particulier : Opérations sur les items d’une liste
Les opérations sur les items d’une liste **DOIVENT** suivre la même logique, mais peuvent être stockées dans une `Map`.

L'index de cette `Map` **DEVRAIT** être l'identifiant de l'item concerné.

Exemple:
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
      status: 'ERROR',
      error: 'No more paper',
    },
  },
}
```


### Sélecteur vs state complexe
Le state **DEVRAIT** être utilisé pour stocker les données brut

Un sélecteur **DEVRAIT** être utilisé pour “grouper” / “filtrer” / “trier”, finalement “travailler” sur les données brut pour les envoyer au composants.

Vous pouvez consulter la doc de [reselect](https://github.com/reactjs/reselect) pour plus d'informations sur les sélecteurs.

### List vs Map vs Collection
On **DEVRAIT** suffixer le nom de la clé par le type de donnée.

  * Si c'est une `List` d'articles, la clé devrait s'appeler `articleList`.
  * Si c'est une `Map` d'articles, la clé devrait s'appeler `articleMap`.
  * Si c'est un objet custom `FooBarCollection` contenant des articles, la clé devrait s'appeler `articleFooBarCollection`.

Bien conserver le nommage de la clé de "status" en fonction.

Dans notre dernier exemple, la clé de status se nommera sera par exemple `articleFooBarCollection-fetch-status`


### Profondeur du state
On ne **DEVRAIT** pas avoir plus d'un niveau dans le state.

👎

```js
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

```js
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

ON **PEUT** avoir un découpage **fonctionnel** des states dans le cas d'une application complexe.

## En "test"
### [Redux-thunk] getState dans les actions

`getState()` ne **DEVRAIT PAS** être utilisé dans les actions.

À re-challenger en fonction de cas plus précis.

Peut-être avec plus de “container” intermédiaires pour les chainages de composants
