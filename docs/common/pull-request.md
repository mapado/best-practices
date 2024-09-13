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

Une fois la PR corrigée, l'auteur DOIT "re-request" les reviewers. Si une PR comporte au moins 1 rejet, elle NE DOIT PAS être mergée en l'état.

#### Comment
PEUT exister dans le cas de question qui mérite des échanges, mais dans l'idéal NE DEVRAIT PAS exister. Chaque PR relue DEVRAIT être validée ou rejetée.
