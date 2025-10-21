---
title: 'Guidelines globales'
---

## Refacto - Ligne de conduite

### Refactos d'architecture

Quand ils sont identifiés :

- Soit on crée une tâche dans le backlog tech
- Soit on peut les faire lors d'un focus qui s'y prête

### Petits refactos

- Oui, si c'est lié au contexte / au code que je crée
- Je n'impose rien à personne, chaque dev est libre de faire ou non de la refacto
- Si je refacto, je DOIS séparer mon commit de refacto de mon commit de dev (éventuellement faire une PR à part)
- Le pompier lit beaucoup de code, c'est le plus à même de faire des petites refactos

**Exemple :**

- Scinder une fonction qui gère plusieurs cas d'usage
- Ajouter des interfaces à des repository
- Recoder une fonction qui n'est pas assez explicite
- ...

## TODOs

### TODO liées à une future mise à jour de package

On utilise `phpstan-todo-by` qui permet de lier des todo à une version d'un package.

Exemple :

```php
// @TODO php:8.5 use pipe operator
$result = trim(str_shuffle(strtoupper("Hello World")));

/**
 * @TODO symfony/framework-bundle:6.4 migrate to AutowireIterator/Locator
 */
class SsoProviderFactory
{
}
```

Il est aussi possible d'utiliser des dates, des issues Github ([voir doc](https://github.com/staabm/phpstan-todo-by/))

Lors de la mise à jour vers les versions concernées, PHPStan émettra des erreurs.
