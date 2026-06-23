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

## Documentation technique

### Documentation markdown

Lors du développement de feature complexe (workflow spécifique, possibilité d'implémentation future de la feature...), on DOIT ajouter une documentation technique.

Cette documentation doit être synthétique :

- Expliquer le fonctionnement de la feature / du workflow
- Si besoin, expliquer comment étendre la feature (exemple avec [l'implémentation de la connexion SSO](https://github.com/mapado/oauth-server/blob/main/docs/SSO_EXTERNAL_PROVIDER.md))
- Ajouter un schéma s'il en existe un ([Excalidraw](https://excalidraw.com/) or [Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/))

Cette documentation doit être créée dans le dossier `/doc(s)` à la racine du projet.

### @see

Pour aider les autres devs à naviguer dans le code que vous avez créé, il est possible d'utiliser la phpdoc `@see` pour faire un lien vers un fichier.

Exemple :

```php
/**
 * @see /doc/ENTITY_AVAILABLE_ACTION.md
 * @see \Mapado\TicketingBundle\Api\Normalizer\AvailableActionNormalizer::normalize
 * @see \Mapado\TicketingBundle\Application\Resolver\AvailableAction\AvailableActionResolverInterface
 */
interface HasAvailableActionInterface {}
```

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

## Patcher une dépendance

Quand on a besoin de modifier le code d'une dépendance (un package du `vendor`), on DOIT privilégier [`symplify/vendor-patches`](https://github.com/symplify/vendor-patches) plutôt que de forker le projet.

### Problèmes des forks

- On perd petit à petit l'information du « pourquoi on a forké », à partir de quelle version, etc.
- Si des CVE arrivent sur le projet d'origine, on n'en est pas informé.
- On n'a plus accès aux éventuelles mises à jour du projet.

### Avantages des vendor patches

- Les « patches » git sont commités dans le projet : on peut les commenter et on garde une trace du pourquoi et du comment.
- On garde la même dépendance dans `composer.json`, donc on peut toujours upgrade la dépendance et on conserve les éventuelles alertes de CVE.
- Si le patch entre en conflit avec une version ultérieure de la dépendance, le plugin nous le signale et on a l'occasion d'adapter le patch.

### Quand préférer un fork

On préfère tout de même forker dans les cas où la librairie est réellement abandonnée, ou lorsqu'il y a beaucoup de fichiers à modifier.
