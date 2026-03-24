---
title: 'Code style'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
<?php
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
<?php
if (!is_int($id)) {
    throw new \LogicException('$id must be an int. This should not happen.');
}
```

C'est très fonctionnel, mais c'est un peu verbeux, et on ne sait jamais trop quelle exception lancer (`InvalidArgumentException`, `RuntimeException`, `LogicException` ?)

Une autre façon est d'utiliser la fonction php [`assert`](https://www.php.net/assert) :

```php
<?php
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
<?php
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
<?php
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
<?php
$result = match ($x) {
    foo() => 'value',
    $this->bar() => 'value', // $this->bar() n'est pas appelé si foo() === $x
    $this->baz => beep(), // beep() n'est pas appelé sauf si $x === $this->baz
    // etc.
};
```

Dans ce cas on DEVRAIT utiliser un `if` :

```php
<?php
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
<?php
$id  = 5;

$r = compact('id');

// [ 'id' => 5 ]
```

Cela dit, cette fonction est trop "magique" et moins lisible.

On NE DOIT PAS utiliser cette fonction en production, mais préférer la version explicite :

```php
<?php
$id = 5;

$r = ['id' => $id];
```

## Property hooks et Visibilité asymétrique à la place des getters et setters

Depuis PHP 8.4, trois fonctionnalités majeures ont été introduites :

- les [property hooks](https://www.php.net/manual/fr/language.oop5.property-hooks.php)
- la [visibilité asymétrique](https://www.php.net/manual/fr/language.oop5.asymmetric-visibility.php)
- les [propriétés dans les interfaces](https://www.php.net/manual/fr/language.oop5.interfaces.php)

Toutes ces fonctionnalités permettent de ne plus avoir besoin de getter et de setter.

On DOIT utiliser ces fonctionnalités au maximum et NE PLUS écrire de getters/setters classiques.

:::info Pourquoi ?

- **Moins de code boilerplate** : plus besoin de getters/setters mécaniques qui n'apportent aucune valeur.
- **API plus naturelle** : accéder à `$user->name` est plus lisible et idiomatique que `$user->getName()`.
- **Encapsulation préservée** : la visibilité asymétrique permet de garder le contrôle sur l'écriture tout en exposant la lecture.
- **Interfaces plus expressives** : déclarer une propriété dans une interface est plus clair et direct que forcer l'implémentation d'un getter.

:::

### Property hooks

Les [property hooks](https://www.php.net/manual/fr/language.oop5.property-hooks.php) permettent de définir un comportement personnalisé lors de la lecture (`get`) ou de l'écriture (`set`) d'une propriété, sans passer par des méthodes explicites.

#### Validation dans un setter

Au lieu d'écrire un setter qui valide la donnée, on DOIT utiliser un property hook `set` :

<Tabs
defaultValue="good"
values={[
{ label: 'setter avec validation ❌', value: 'bad', },
{ label: 'Après : property hook avec validation ✅', value: 'good', },
]
}>
<TabItem value="bad">

```php
class User
{
    private string $email;

    public function setEmail(string $email): void
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \InvalidArgumentException('Email invalide');
        }

        $this->email = $email;
    }
}

$user->setEmail('john@example.com');
```

</TabItem>
<TabItem value="good">

```php
class User
{
    public string $email {
        set(string $value) {
            if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                throw new \InvalidArgumentException('Email invalide');
            }

            $this->email = $value;
        }
    }
}

$user->email = 'john@example.com';
```

</TabItem>
</Tabs>

#### Traitement dans un setter

De la même façon, au lieu d'écrire un setter qui transforme la donnée, on DOIT utiliser un property hook `set` :

<Tabs
defaultValue="good"
values={[
{ label: 'setter avec traitement ❌', value: 'bad', },
{ label: 'property hook avec traitement ✅', value: 'good', },
]
}>
<TabItem value="bad">

```php
class User
{
    private string $firstName;

    public function setFirstName(string $firstName): void
    {
        $this->firstName = ucfirst(strtolower($firstName));
    }
}

$user->setFirstName('john');
```

</TabItem>
<TabItem value="good">

```php
class User
{
    public string $firstName {
        set(string $value) {
            $this->firstName = ucfirst(strtolower($value));
        }
    }
}

$user->firstName = 'john'; // stocke "John"
```

</TabItem>
</Tabs>

#### Propriétés virtuelles

Une propriété qui ne définit qu'un hook `get` (sans `set`) et qui ne stocke pas de valeur en interne est une **propriété virtuelle**.
Elle ne prend pas de mémoire et se comporte comme une méthode déguisée en propriété, on DOIT utiliser une propriété virtuelle :

<Tabs
defaultValue="good"
values={[
{ label: 'getter calculé ❌', value: 'bad', },
{ label: 'propriété virtuelle ✅', value: 'good', },
]
}>
<TabItem value="bad">

```php
class User
{
    public function __construct(
        private string $firstName,
        private string $lastName,
    ) {
    }

    public function getFullName(): string
    {
        return $this->firstName . ' ' . $this->lastName;
    }
}

echo $user->getFullName();
```

</TabItem>
<TabItem value="good">

```php
class User
{
    public string $fullName {
        get => $this->firstName . ' ' . $this->lastName;
    }

    public function __construct(
        private string $firstName,
        private string $lastName,
    ) {
    }
}

echo $user->fullName;
```

</TabItem>
</Tabs>

### Visibilité asymétrique

La [visibilité asymétrique](https://www.php.net/manual/fr/language.oop5.asymmetric-visibility.php) permet de définir une visibilité différente pour la lecture et l'écriture d'une propriété.

L'exemple le plus courant est une propriété que l'on veut exposer en lecture publique, mais dont on veut interdire la modification depuis l'extérieur de la classe, on DOIT utiliser la visibilité asymétrique :

<Tabs
defaultValue="good"
values={[
{ label: 'getter pour exposer une propriété ❌', value: 'bad', },
{ label: 'visibilité asymétrique ✅', value: 'good', },
]
}>
<TabItem value="bad">

```php
class User
{
    private string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function updateName(string $name): void
    {
        // logique complexe de mise à jour du nom
        // ...
    }
}

echo $user->getName();
```

</TabItem>
<TabItem value="good">

```php
class User
{
    public function __construct(
        public private(set) string $name,
    ) {
    }

    public function updateName(string $name): void
    {
        // logique complexe de mise à jour du nom
        // ...
    }
}

echo $user->name;
```

</TabItem>
</Tabs>

La propriété est lisible publiquement (`public`), mais ne peut être modifiée que depuis l'intérieur de la classe (`private(set)`). Le code extérieur peut lire `$user->name` directement, mais toute tentative d'écriture `$user->name = 'foo'` provoquera une erreur.

:::warning Attention
Ne pas confondre avec `readonly` : une propriété `readonly` ne peut être écrite qu'une seule fois (en général dans le constructeur), même depuis l'intérieur de la classe. Avec `private(set)`, la classe peut modifier la propriété autant de fois qu'elle le souhaite via ses propres méthodes.
:::

### Propriétés dans les interfaces

Depuis PHP 8.4, les [interfaces peuvent déclarer des propriétés](https://www.php.net/manual/fr/language.oop5.interfaces.php).
On DOIT les utiliser lorsqu'on veut garantir qu'une classe expose une donnée en lecture.

On NE DOIT PAS forcer l'implémentation d'un getter quand on veut simplement que l'interface garantisse l'accès à une propriété, on DOIT déclarer une propriété dans l'interface :

<Tabs
defaultValue="good"
values={[
{ label: 'getter dans l\'interface ❌', value: 'bad', },
{ label: 'propriété dans l\'interface ✅', value: 'good', },
]
}>
<TabItem value="bad">

```php
interface HasName
{
    public function getName(): string;
}

class User implements HasName
{
    public function __construct(private string $name) {}

    public function getName(): string
    {
        return $this->name;
    }
}
```

</TabItem>
<TabItem value="good">

```php
interface HasName
{
    public string $name { get; }
}

class User implements HasName
{
    public function __construct(
        public readonly string $name,
    ) {
    }
}
```

</TabItem>
</Tabs>

L'interface déclare que `$name` doit être lisible publiquement, mais n'impose pas de setter. La classe est libre de choisir comment implémenter cette propriété : promotion de constructeur, property hook, propriété classique, etc.
