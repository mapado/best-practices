---
title: 'ReactJS'
---

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
      <button onClick={this.handleClick}>
        Click
      </button>
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

    return <button onClick={this.handleClick}></button>;
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
    return <button onClick={this.handleClick}></button>;
  }
}
```

### class element: anonymous function in the `render` method

Same as the `bind` call, we MUST NOT create anonymous functions in the `render` method for two reasons:

- Anonymous functions are regenerated on each call of the `render` function, which consume useless resources.
- The `render` method is less readable, because there will be business logic in it.

👎

```js
class Foo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      foo: null,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ foo: 'bar' });
          }}
        >
          Hey, click-me !
        </button>
      </div>
    );
  }
}
```

👍

```js
class Foo extends PureComponent {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      foo: false,
    };
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      foo: !prevState.foo,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Hey, click-me !</button>
      </div>
    );
  }
}
```

#### Exception

The only exception is if we are iterating over a list and if we must pass an item of this list as parameter.

We MUST limit the call to calling a class method with for readability.

We CAN do it this way:

👍

```js
class Foo extends PureComponent {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      btnClicked: null,
    };
  }

  handleButtonClick(item) {
    this.setState({
      btnClicked: item,
    });
  }

  render() {
    return (<div>
      {this.props.myList.map(item =>
        <button onClick={(item) => this.handleButtonClick(item)}>
          Hey, click-me !
        </button>
      }
    </div>);
  }
}
```
