---
title: "Bonne pratiques ReactJS"
---

Bonnes pratiques ReactJS
==============

[*English version here*]({% link /en/react %})

Cette liste de bonne pratique est surtout un retour sur certaines "mauvaise pratiques" que nous avons mis dans notre code et comment les corriger.

### Nommage de méthodes
Un méthode "répondant" à un évènement `onSomething` DEVRAIT être préfixée par `handle`.

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

### bind(this) dans la methode `render`

Le binding javascript [n'est pas simple](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/).

Les nouvelles fonctionnalités d'ECMAScript permettent de se rapprocher des autres langages et de ne plus avoir à connaitre les "internes", et c'est plutôt bien (même si c'est encore mieux de connaitre comment ça fonctionne sous le capôt).

Pour cette raison, le `binding` et les appels de méthodes DEVRAIENT être le plus "simple" et le plus "logique" pour les débutants.

Cela facilite aussi la lisibilité et la compréhension pour les développeurs chevronnés.

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


