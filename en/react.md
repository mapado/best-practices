---
title: "Best practice ReactJS"
---

Best practice ReactJS
==============

[*Version française ici*]({% link fr/react %})

This best practice list is more a list of corrected "bad practices" that we had in our codebase and fixed.

### Method naming
A method "handling" an event `onSomething` SHOULD start with `handle`.

```js
class Foo() {
  handleClick() {
    // do something
  }

  render() {
    return (
        <div onClick={this.handleClick}>
        </div>
    );
  }
}
```


### bind(this) in the `render` method

Binding and this in Javascript [is not easy](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/).

The new ECMAScript functionnality allow us to keep it like other programming languages and does not force us to know the "internals", and it's pretty cool (even if it's better to know how it works underneath).

For this reason, `binding` and method call SHOULD be the most "easy" and "logical" way for beginners.

It makes it easier to read and understand the code for experienced programmer too.

👎
```js
class Foo extends Component {
  handleClick(foo) {
    // do someting
  }

  render() {
    this.handleClick.bind(this, this.props.foo);

    return (
      <div onClick={this.handleClick}>
      </div>
    );
  }
}
```


👍
```js
class Foo extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    const foo = this.props.foo;
    // do someting
  }

  render() {

    return (
      <div onClick={this.handleClick}>
      </div>
    );
  }
}
```
