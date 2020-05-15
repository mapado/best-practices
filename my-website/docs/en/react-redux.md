---
title: 'React-Redux best practices'
---

[_version française ici_](../fr/react-redux.md)

This best practice list is more a list of corrected "bad practices" that we had in our codebase and fixed.

### Injecting components

Imagine we need to inject a component based upon some context, for exemple if the user is logged in.

Here is our redux store

```js
const store = {
  [isLogged: boolean]: true,
  [username: ?string]: 'Michel',
};
```

Imagine we have a `Layout` component which need to display a `UserInfo` or `Anonymous` component based upon the `isLogged` value.

The `Layout` component SHOULD NOT decide which component to display but SHOULD use an intermediate redux container which will do this job:

👎

```js
import React from 'react';
import { connect } from 'react-redux';

function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo({ username }) {
  return (<div>Hello {username}<div>);
}

function Layout ({ username, UserInfoComponent = UserInfo }) {
  return (
    {<UserInfoComponent username={username} />}
  );
}
Layout.propTypes = {
  UserInfoComponent: React.elementType,
  username: null,
};
Layout.defaultProps = {
  UserInfoComponent: UserInfo,
  username: PropTypes.string,
}

const mapStateToProps = state => ({
  username: state.app.username,
  UserInfoComponent: state.app.isLogged ? UserInfo : Anonymous,
});

export default connect(mapStateToProps)(Layout);
```

👍

```js
import React from 'react';
import { useSelector } from 'react-redux';

function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo({ username }) {
  const username = useSelector(state => state.app.username);

  return (<div>Hello {username}<div>);
}


// enfin affichons notre composant `Layout`
function Layout() {
  const isLogged = useSelector(state => state.app.isLogged);

  return isLogged? <UserInfo /> :<Anonymous />;
}
```

It is way more readable, understandable and efficient now with redux hooks.
