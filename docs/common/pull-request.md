---
title: 'Pull request'
---

Une pull request doit respecter les règles suivantes avant d'être mergée :

- 2 reviewers minimum (cas exceptionnel : pompier urgent ou upgrade de package) sans contrainte de durée
- Favoriser les PR de - de 1000 lignes (avec tests) / 600 lignes de code pur

NB : en cas d'absence de review, c'est à l'auteur de la PR de relancer. Si l'équipe concernée ne review pas la PR rapidement, le remonter au point tech en rappelant la responsabilité collective de la review.

### Statuts des reviews

#### Approved
La PR est validée, la relecture peut contenir des commentaires et suggestions qui PEUVENT être pris en compte.

#### Request Changes
La PR est rejetée. Le rejet comporte des commentaires qui DOIVENT être pris en compte.

Une fois la PR corrigée, l'auteur doit "re-request" les reviewers. Si une PR comporte au moins 1 rejet, elle ne doit pas être mergée en l'état.

#### Comment
Ne devrait pas exister. Chaque PR relue doit être validée ou rejetée.
