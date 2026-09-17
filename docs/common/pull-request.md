---
title: 'Pull request'
---

Une pull request doit respecter les règles suivantes avant d'être mergée :

- 2 reviewers minimum (cas exceptionnel : pompier urgent ou upgrade de package) sans contrainte de durée
- Aucun "Request changes" en attente, et toutes les conversations résolues
- Être à jour avec `main`

### Taille des PR

Une PR NE DEVRAIT PAS dépasser 1000 lignes (tests inclus) / 600 lignes de code pur : au-delà, la relecture perd en qualité et la PR reste bloquée plus longtemps.

Quand le sujet ne tient pas dans cette limite, le découper en **pile de PR** : chaque PR est ouverte sur la précédente, reste relisible seule, et la pile se merge de bas en haut. On ne dépasse la limite que quand le découpage est réellement impossible (migration générée, renommage global, mise à jour de lockfile) — et dans ce cas on l'explique dans la description de la PR.

### Responsabilité collective de la review

La review est un travail d'équipe : chacun consomme la relecture des autres, chacun la rend. L'ordre de grandeur attendu est de **2 PR relues pour 1 PR poussée**.

NB : en cas d'absence de review, c'est à l'auteur de la PR de relancer. Si l'équipe concernée ne review pas la PR rapidement, le remonter au point tech en rappelant la responsabilité collective de la review.

### Les PR qui traînent

Une PR ouverte depuis plus d'un mois : le code a trop divergé de `main`, elle encombre tout le monde. Passé ce délai, deux options : la traiter ou la fermer.

Ça vaut aussi pour les drafts abandonnés. On nettoie derrière soi, branche comprise !

### Statuts des reviews

#### Approved
La PR est validée, la relecture peut contenir des commentaires et suggestions qui PEUVENT être pris en compte.

#### Request Changes
La PR est rejetée. Le rejet comporte des commentaires qui DOIVENT être pris en compte.

Une fois la PR corrigée, l'auteur DOIT "re-request" les reviewers. Si une PR comporte au moins 1 rejet, elle NE DOIT PAS être mergée en l'état.

#### Comment
PEUT exister dans le cas de question qui mérite des échanges, mais dans l'idéal NE DEVRAIT PAS exister. Chaque PR relue DEVRAIT être validée ou rejetée.

### Résolution des commentaires

Chaque commentaire DOIT recevoir une réponse, ou a minima une réaction (👍) quand il n'appelle pas de discussion : le reviewer sait ainsi qu'il a été lu et pris en compte.

C'est **l'auteur de la PR** qui clique sur "Resolve conversation", une fois le commentaire traité : corrigé, ou discuté et tranché. On ne résout la conversation QU'UNE FOIS la correction poussée : une conversation résolue sans le commit qui va avec laisse croire que le travail est fait.

Le reviewer PEUT "unresolve" une conversation si la réponse ou la correction ne lui convient pas : c'est le signal que l'échange n'est pas terminé.

### Avant de merger

TOUJOURS rebaser la branche sur `main` avant de merger, pour que le code mergé soit exactement celui qui a tourné en CI et que l'historique de `main` reste linéaire.

### Avant de déployer

TOUJOURS attendre que la CI de `main` soit verte avant de déployer. Une CI rouge sur `main` bloque les déploiements de tout le monde : on la répare — ou on revert — avant de déployer quoi que ce soit.
