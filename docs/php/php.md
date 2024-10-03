---
title: 'PHP'
---


## Gestion des pluriels

Le nom des variables, quand elles sont au pluriels DOIVENT se terminer par `List` et NE DOIVENT PAS se terminer par `s`.

:::info Pourquoi ?

Cela permet d'avoir une vrai segmentation visuelle afin de comprendre très rapidement que l'on est sur une liste en pas sur un objet simple.

Cela permet aussi d'éviter les problèmes de complexités grammaticales en anglais (les mots terminant en "y" sont transformés en "ies" au pluriels : "cherry" / "cherries", les mots en "-f" prenent un "v", ex "wife" / "wives", etc.).
:::
