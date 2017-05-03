---
title: "Bonne pratiques React-Redux"
---

Bonnes pratiques React-Redux
==============

[*English version here*]({{ site.baseurl }}{% link en/react-redux.md %})

Cette liste de bonne pratique est surtout un retour sur certaines "mauvaise pratiques" que nous avons mis dans notre code et comment les corriger.

### Injection de composants

Imaginons que l'on doit injecter un composant différent en fonction du context, par exemple si l'utilisateur est connecté.

Voici l'état de notre "store" redux:
```js
const store = {
  [isLogged: boolean]: true,
  [username: ?string]: 'Michel',
};
```

Imaginons que nous ayons un composant `Layout` qui doit afficher un composant `UserInfo` en fonction de l'état de `isLogged`.

Le composant `Layout` NE DEVRAIT PAS décider quel composant utiliser mais DEVRAIT utiliser un container redux intermédiaire qui fait ce travail:

👎
```
import React from 'react';
import { connect } from 'react-redux';

function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo({ username }) {
  return (<div>Hello {username}<div>);
}

class Layout extends React.Component {
    static get propTypes() {
      return {
        UserInfoComponent: React.PropTypes.oneOfType([
          React.PropTypes.element,
          React.PropTypes.func,
        ]),
      };
    }

    static get defaultProps() {
      return {
        UserInfoComponent: UserInfo,
      }
    }

    render() {
      return (
        {<this.props.UserInfoComponent user={this.props.user} />}
      );
    }
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
import { connect } from 'react-redux';

// toujours les deux même blocks
function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo({ username }) {
  return (<div>Hello {username}<div>);
}

// inject le nom du user via le container ici, mais le choix est votre, vous pouvez le passer depuis un composant parent si besoin
const UserInfoContainer = connect(
    state => ({ username: state.app.username })
)(UserInfo);

// un espèce de composant "factory"
function UserOrAnonymous({ isLogged, username }) {
  return isLogged? <UserInfoContainer /> :<Anonymous />;
}

// mappons ici l'information `isLogged`
const UserOrAnonymousContainer = connect(
  state => ({ isLogged: state.app.isLogged })
)(UserOrAnonymous);


// enfin affichons notre composant `Layout`
class Layout extends React.Component {
  render() {
    return (<UserOrAnonymousContainer />);
  }
} 
```
