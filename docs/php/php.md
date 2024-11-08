---
title: 'PHP'
---


## Gestion des pluriels

Le nom des variables, quand elles sont au pluriels DOIVENT se terminer par `List` et NE DOIVENT PAS se terminer par `s`.

:::info Pourquoi ?

Cela permet d'avoir une vrai segmentation visuelle afin de comprendre très rapidement que l'on est sur une liste en pas sur un objet simple.

Cela permet aussi d'éviter les problèmes de complexités grammaticales en anglais (les mots terminant en "y" sont transformés en "ies" au pluriels : "cherry" / "cherries", les mots en "-f" prennent un "v", ex "wife" / "wives", etc.).
:::

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
