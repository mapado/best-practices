---
title: 'PHP'
---

## Gestion des pluriels

Le nom des variables, quand elles sont au pluriels DOIVENT se terminer par `List` et NE DOIVENT PAS se terminer par `s`.

:::info Pourquoi ?

Cela permet d'avoir une vrai segmentation visuelle afin de comprendre très rapidement que l'on est sur une liste en pas sur un objet simple.

Cela permet aussi d'éviter les problèmes de complexités grammaticales en anglais (les mots terminant en "y" sont transformés en "ies" au pluriels : "cherry" / "cherries", les mots en "-f" prennent un "v", ex "wife" / "wives", etc.).
:::

## camelCase / snake_case

Les noms des classes, méthodes et constantes DOIVENT suivre la [PSR-1](https://www.php-fig.org/psr/psr-1/).

Pour les autres cas, nous utilisons le **camelCase** pour :

- les propriétés de classe
- les clés de tableau

et le **snake_case** pour :

- valeurs de tableau
- valeurs de variables

```php
private const PROVIDER_KEY = 'provider_name';

private array $aggregationData = [
    "filterList": [],
    "aggregationList": [
        "average_cart_value"
    ]
];
```

## Assertions

En PHP, on a plusieurs façons de faire des assertions. Pour rappel une assertions en PHP [est définie de la manière suivante](https://www.php.net/assert) :

:::info Assertion
Les assertions doivent être utilisées uniquement comme fonctionnalité de débogage. Un cas d'utilisation pour les assertions est de servir de vérifications de cohérence pour des préconditions qui devraient toujours être true, et si elles ne sont pas respectées, cela indique des erreurs de programmation.
:::

Autrement dit, si l'on envoit une erreur, c'est que c'est du code qui NE DOIT JAMAIS échouer.

Une façon de faire ça est d'utiliser un `if` avec une exception :

```php
if (!is_int($id)) {
    throw new \LogicException('$id must be an int. This should not happen.');
}
```

C'est très fonctionnel, mais c'est un peu verbeux, et on ne sait jamais trop quelle exception lancer (`InvalidArgumentException`, `RuntimeException`, `LogicException` ?)

Une autre façon est d'utiliser la fonction php [`assert`](https://www.php.net/assert) :

```php
assert(is_int($id));
```

C'est très simple, mais cela manque de description, et cela ne permet pas d'avoir d'assertions complexes écrites simplement.

On DEVRAIT utiliser la librairie webmozarts/assert qui donne accès à un large panel d'assertion, et qui permet d'avoir un message d'erreur plus explicite.

:::note
Pour info, webmozarts utilise une `InvalidArgumentException` en soute.
:::

## If / Match / Switch

`If`, `match` et `switch` sont trois façons différentes d'exécuter du code conditionnel en PHP.
Les trois façons sont valables, mais choisir l'une ou l'autre des instructions peut avoir un impact sur la lisibilité du code.

On DEVRAIT utiliser `match` uniquement dans des cas "simples". Par exemple:

```php
$expressionResult = match ($condition) {
    1, 2 => foo(),
    3, 4 => bar(),
    default => baz(),
};

match ($job->getName()) {
    Job::NAME_EXPORT_DATA => $this->exportData($job),
    Job::NAME_DENORMALIZE => $this->denormalize($job),
    default => null,
};
```

Dès lors que l'on veut faire plusieurs choses dans un cas, on DEVRAIT utiliser un `switch` :

```php
switch ($action) {
    case self::NAME_EXPORT_DATA:
        $this->exportData($job);
        break;
    case self::DENORMALIZE:
        $this->publishToRabbitMQ($job);
        $this->onJobUpdated($job);
        $this->triggerCoffeeMachine($job);
        break;
    default:
        break;
}
```

A noter quand dans ce cas, on PEUT aussi tout à refactorer le code du `case self::DENORMALIZE` dans une méthode dédiée, et appeler `match`.

Dès que les cas de tests deviennent trop complexes, on DEVRAIT utiliser un `if` / `elseif` / `else` :

Par exemple, on ne DEVRAIT pas faire ça :

```php
$result = match ($x) {
    foo() => 'value',
    $this->bar() => 'value', // $this->bar() n'est pas appelé si foo() === $x
    $this->baz => beep(), // beep() n'est pas appelé sauf si $x === $this->baz
    // etc.
};
```

Dans ce cas on DEVRAIT utiliser un `if` :

```php
if (foo()) {
    $result = 'value';
} elseif ($this->bar()) {
    $result = 'value';
} elseif ($this->baz) {
    $result = beep();
} else {
    $result = null;
}
```

:::note
On ne DEVRAIT jamais utiliser un `match(true)` ou un `switch(true)` et TOUJOURS utiliser des `if` dans ce cas.

Car le `match(true)` implique souvent que l'on va avoir des cas de tests trop complexes, sur des données différentes, et que l'on va perdre la lisibilité du code.
:::

## Utilisation de `compact`

Il existe une fonction [`compact`](https://www.php.net/compact) en PHP qui permet de créer un tableau à partir de chaine de caractère:

```php
$id  = 5;

$r = compact('id');

// [ 'id' => 5 ]
```

Cela dit, cette fonction est trop "magique" et moins lisible.

On NE DOIT PAS utiliser cette fonction en production, mais préférer la version explicite :

```
$id = 5;

$r = ['id' => $id];
```
