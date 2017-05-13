---
title: "React-Redux best practices"
---

React-Redux best practices
==============

[*version française ici*]({{ site.baseurl }}{% link fr/react-redux.md %})

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

// still the same two blocks
function Anonymous() {
  return (<div>Hello anonymous<div>);
}

function UserInfo({ username }) {
  return (<div>Hello {username}<div>);
}

// inject the username via the container here, but the choice is up to you, you can pass it from a parent component if needed
const UserInfoContainer = connect(
    state => ({ username: state.app.username })
)(UserInfo);

// kind of our component factory
function UserOrAnonymous({ isLogged }) {
  return isLogged? <UserInfoContainer /> :<Anonymous />;
}

// mapped with the `isLogged` information
const UserOrAnonymousContainer = connect(
  state => ({ isLogged: state.app.isLogged })
)(UserOrAnonymous);


// finally render our Layout component
class Layout extends React.Component {
  render() {
    return (<UserOrAnonymousContainer />);
  }
} 
```
