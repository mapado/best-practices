---
title: 'React-Redux'
---

Cette liste de bonne pratique est surtout un retour sur certaines "mauvaise pratiques" que nous avons mis dans notre code et comment les corriger.

### Injection de composants

Imaginons que l'on doit injecter un composant différent en fonction du context, par exemple si l'utilisateur est connecté.

Voici l'état de notre "store" redux:

```js
const store = {
  [isLogged: boolean]: true,
  [username?: string]: 'Michel',
};
```

Imaginons que nous ayons un composant `Layout` qui doit afficher un composant `UserInfo` en fonction de l'état de `isLogged`.

Le composant `Layout` NE DEVRAIT PAS décider quel composant utiliser mais DEVRAIT utiliser un container redux intermédiaire qui fait ce travail.

Le contenu du state DEVRAIT être injecté au plus près de son utilisation (ex. avec le `username` ici).

👎

```js {12,14,18-19,22-23,27-28}
import React from 'react';
import { connect } from 'react-redux';

function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo({ username }) {
  return (<div>Hello {username}<div>);
}

function Layout ({ username, UserInfoComponent }) {
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

```js {9,16-18}
import React from 'react';
import { useSelector } from 'react-redux';

function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo() {
  const username = useSelector(state => state.app.username);

  return (<div>Hello {username}<div>);
}

// enfin affichons notre composant `Layout`
function Layout() {
  const isLogged = useSelector(state => state.app.isLogged);

  return isLogged? <UserInfo /> :<Anonymous />;
}
```

C'est d'autant plus simple, lisible et compréhensible avec les hooks de redux
