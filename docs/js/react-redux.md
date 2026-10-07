---
title: 'React-Redux'
---

Cette liste de bonnes pratiques est surtout un retour sur certaines "mauvaises pratiques" que nous avons mises dans notre code, et sur la façon de les corriger.

### Injection de composants

Imaginons que l'on doit injecter un composant différent en fonction du contexte, par exemple si l'utilisateur est connecté.

Voici l'état de notre "store" redux :

```ts
type AppState = {
  isLogged: boolean; // true
  username?: string; // 'Michel'
};
```

Imaginons que nous ayons un composant `Layout` qui doit afficher un composant `UserInfo` en fonction de l'état de `isLogged`.

Le composant `Layout` NE DEVRAIT PAS recevoir le composant à afficher en props, depuis un `mapStateToProps` : c'est à lui de choisir quel composant afficher, en lisant le state dont il a besoin.

Le contenu du state DEVRAIT être injecté au plus près de son utilisation (ex. avec le `username` ici).

On DEVRAIT utiliser les hooks de react-redux (`useSelector`, `useDispatch`) plutôt que `connect`.

👎

```jsx {12-13,16-24,26-29}
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Anonymous() {
  return <div>Hello anonymous</div>;
}

function UserInfo({ username }) {
  return <div>Hello {username}</div>;
}

function Layout({ username, UserInfoComponent }) {
  return <UserInfoComponent username={username} />;
}

Layout.propTypes = {
  UserInfoComponent: PropTypes.elementType,
  username: PropTypes.string,
};

Layout.defaultProps = {
  UserInfoComponent: UserInfo,
  username: null,
};

const mapStateToProps = (state) => ({
  username: state.app.username,
  UserInfoComponent: state.app.isLogged ? UserInfo : Anonymous,
});

export default connect(mapStateToProps)(Layout);
```

👍

```jsx {8,14,16}
import { useSelector } from 'react-redux';

function Anonymous() {
  return <div>Hello anonymous</div>;
}

function UserInfo() {
  const username = useSelector((state) => state.app.username);

  return <div>Hello {username}</div>;
}

function Layout() {
  const isLogged = useSelector((state) => state.app.isLogged);

  return isLogged ? <UserInfo /> : <Anonymous />;
}
```

C'est d'autant plus simple, lisible et compréhensible avec les hooks de redux.
