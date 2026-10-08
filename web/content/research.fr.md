+++
title = "Pour les chercheurs : de plus grands calculs scientifiques"
description = "Utilisez le réseau de calcul de GPU Goblin, fait d'ordinateurs prêtés, pour vos calculs scientifiques : grands produits de matrices, graphes d'opérations sur des tenseurs, entraînement de modèles. Grands calculs découpés automatiquement, résultats vérifiés."
template = "page.html"
[extra]
lead = "Utilisez le réseau de calcul de GPU Goblin pour mener vos calculs depuis Python. Les grands calculs sont découpés automatiquement entre les ordinateurs prêtés par des bénévoles, et chaque résultat est vérifié."
cta = "Demander un accès"
cta_page = "account"
cta2 = "Lire la FAQ"
cta2_page = "faq"
toc = true
+++

## Ce que vous pouvez calculer

GPU Goblin calcule les types de calcul scientifique de son catalogue, sur processeur et sur carte
graphique :

- **De grands produits de matrices**, au cœur d'une grande partie du calcul scientifique, découpés
  en morceaux quand ils sont trop grands pour une seule machine.
- **Des calculs sur des graphes d'opérations sur des tenseurs** : un calcul décrit comme un graphe
  de plus de 45 opérateurs (arithmétique, réductions, tenseurs d'entiers, formules
  personnalisées…), capturé par exemple depuis un programme PyTorch par le paquet Python.
- **L'entraînement de modèles d'apprentissage automatique** : réseaux convolutifs, transformers,
  modèles de langage. Un modèle plus grand qu'aucune machine de contributeur est découpé
  automatiquement en étages (des groupes de couches calculés l'un après l'autre), en tuiles (de
  grandes matrices coupées en morceaux) et en micro-lots.

Vous décrivez le calcul, et le réseau le calcule avec ses propres opérations vérifiées. D'autres types de calcul sont
ajoutés au catalogue au fil du temps : dites-nous ce dont votre recherche a besoin.

## Comment se déroule un calcul

1. Le **nœud** de votre laboratoire, un petit service installé chez vous, garde les données et
   découpe le calcul en tâches.
2. Les machines des contributeurs récupèrent leurs entrées, calculent, et renvoient leurs
   résultats.
3. Chaque résultat est **vérifié** — recalculé par un validateur indépendant, ou comparé au même
   calcul fait par un autre contributeur — avant d'être utilisé.
4. Les résultats acceptés sont assemblés en votre résultat. Pour un modèle en cours
   d'entraînement, c'est un cycle : les gradients sont combinés, l'optimiseur fait son pas, et le
   cycle suivant commence.

## Vos données

- Par défaut, le serveur ne stocke **aucune donnée de recherche**, et le nœud de votre laboratoire n'envoie jamais vos jeux de données tels quels : il envoie aux machines des **opérations à calculer**, avec seulement les nombres dont chaque tâche a besoin.
- Ces nombres arrivent sans nom de fichier ni description de ce qu'ils représentent (le texte arrive sous forme de jetons numériques). Les données ne sont pas chiffrées pendant le calcul : un tableau
  de pixels peut encore s'afficher comme une image, et des jetons se retraduisent en texte. N'envoyez
  pas sur le réseau de calcul ouvert des données qui doivent rester confidentielles (données
  personnelles ou médicales, par exemple).


## Accès

[Demander un accès depuis votre compte](../account) : connectez-vous avec votre adresse e-mail et remplissez la demande d'accès chercheur. Questions : [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Coût

Utiliser le réseau de calcul pour la recherche est **gratuit**. Le logiciel est publié sous la
licence PolyForm Noncommercial : gratuit pour la recherche et tout usage non commercial. Un usage
commercial demande un accord avec l'auteur.
