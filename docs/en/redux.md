---
title: 'Redux'
---

At [Mapado](https://www.mapado.com), we are using more and more React and Redux. As they are very permissive librairies, each developer has its own way of coding with them.

We needed to standardize how we do it. It's now done!

This document is still "in progress", we are not necessarily sure of some of our choices, but they seem to be the best for us right now.

Moreover, we would welcome your comments if you have different use cases, either by opening [an issue](https://github.com/mapado/best-practices/issues).

### When to use Redux

Redux **MUST ONLY** be used when there is need to share information between all application.

React can already contain informations in its local state, and the [context API](https://reactjs.org/docs/context.html) allow to share data in different components.

Learn more: ["You might not need Redux" by Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).

### Libraries we use with Redux

- Selectors: [reselect](https://github.com/reactjs/reselect)
- Data structure: [immutable-js](https://facebook.github.io/immutable-js/)
- Middleware for async actions: [redux-thunk](https://github.com/gaearon/redux-thunk)

### Redux Style Guide

Redux maintainers wrote the [Redux Style Guide](https://redux.js.org/style-guide/style-guide). This is the official style guide for writing Redux code. It is a really good guide to know how to architecture our code and which pattern to follow.

### State immutability

States **MUST** be an immutable-js `Map` or `Record`.

Redux mark as essential to [not mutate state](https://redux.js.org/style-guide/style-guide#do-not-mutate-state)

### State initialization

The "state" **SHOULD** be initialized by default with every key it can use.

> It allows components props to be set every time, without having to test `if null` cases.
>
> It frees the "containers" to avoid code like this: `state.foo.get('bar') || false`.

We **CAN** use an immutable `Record` to forbid any new key in the state, and to give us some syntaxic sugar (`state.foo.bar` instead of `state.foo.get('bar')`).

#### Removing keys

We **MUST NOT** delete key from state.

> If we delete a key, we will be in the same case as mentioned before.

Prefer `state.set('foo', false)`, or `state.set('foo', null)` instead of `state.remove('foo')`.

### Dispatch in actions

We **SHOULD NOT** send too many `dispatch` in actions.

We **SHOULD NOT** send two successive `dispatch` if there is no need to refresh the view.

> Calling `dispatch` will refresh React components.

This job is more suited for the reducer:

👎

```js
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

```js
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

### Data action status

When we make an async call, we often need to know the state of this call (to display a loader or an error message, for example).

Let's call "data key" the key in which the data will be stored in our redux state once fetched.

We **COULD** store the _status_ of its data in another redux state key.

The data key concerning the status **MUST** have the following form: `<data key>-<action>-<status>`.

> The `-` separator here does the same job as they do in BEM.
>
> As our states are immutable-js objects, using `-` here is not really inconvenient.

`<action>` is the name of the action performed on the data, for example "articleList-fetch-status".

The value **MUST** be a `Map` containing a `status` key and an `error` key.

#### Value of the `status` key

The `status` key value **SHOULD** take one of the following value:

- null
- IN_PROGRESS
- SUCCEEDED
- FAILED

It **CAN** also take a custom value, for example:

- IN_PROGRESS_BOTTOM
- IN_PROGRESS_TOP

#### Value of the `error` key

The error **MUST** be in the status object and its key must be `error`.

Its default value **MUST** be `null`.

Its value **SHOULD** be a string or an object.

The error logic is managed in the component.

#### Special case : performing operations on a list item

Operations on a list item **MUST** follow the same logic, but **CAN** be stored in a `Map`.

The keys of these `Map` **SHOULD** be the concerned item id.

Example:

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
};
```

### Selector vs complex state

The state **SHOULD** be used to store "raw" datas.

A selector **SHOULD** be used to "group" / "filter" / "sort" in other words, "work" on raw datas to send them to the component.

You can check out the [reselect](https://github.com/reactjs/reselect) documentation to find out about selectors.

cf. [Use Selector Functions to Extract and Transform Data](https://react-redux.js.org/using-react-redux/connect-mapstate#use-selector-functions-to-extract-and-transform-data)

### List vs Map vs Collection

We **SHOULD** suffix the key name by the type of data:

- If it's an article `List`, the key should be named `articleList`.
- If it's an article `Map`, the key should be named `articleMap`.
- If it's a custom `FooBarCollection` object containing articles, the key should be named `articleFooBarCollection`.

We need to keep the naming of the "status" key like previously.

In our example, the status key will be named `articleFooBarCollection-fetch-status`.

### Nesting state

The state **SHOULD NOT** have more than one nesting level.

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

We **SHOULD** have only one "state" in a simple application.

We **CAN** split **functionally** the states in a complex application.
