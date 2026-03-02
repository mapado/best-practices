---
title: 'Behat'
---

### egalité de "JSON node"

Évitez d'utiliser :

```gherkin
Then the JSON node "@id" should be equal to "/v1/ticket_prices/13"
```

Mais utilisez plutôt la forme "tableau" :


```gherkin
Then the JSON nodes should be equal to:
  | @id| /v1/ticket_prices/13 |
```

:::info Pourquoi ?

Car si on ajoute une nouvelle donnée a tester, on va ajouter une ligne :

```gherkin
Then the JSON node "@id" should be equal to "/v1/ticket_prices/13"
Then the JSON node "hash" should be equal to "mon billet test|1000"
```

Dans ce cas behat va devoir "parser" deux fois la ligne `Then the JSON node :node should be equal to :value`
Et c'est plutôt peu performant.

:::

Alors que si on fait :

```gherkin
Then the JSON nodes should be equal to:
  | @id  | /v1/ticket_prices/13  |
  | hash | mon billet test\|1000 |
```

behat parse une seule fois la ligne, et fait tout le traitement du "check" en une seule fois : c'est plus rapide.

Accessoirement, si vous avez les deux lignes avec les infos en erreur (si je suis sur le billet 14 à 8€ par exemple), vous aurez en retour toutes les lignes qui sont mauvaise, alors qu'en traitement ligne à ligne, vous aurez le retour de la première ligne seulement, puis vous allez relancer le test pour vous apercevoir que la deuxième ligne est en erreur.
