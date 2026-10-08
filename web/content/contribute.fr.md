+++
title = "Prêter son GPU à la recherche"
description = "Comment prêter la carte graphique ou le processeur de votre ordinateur à la recherche avec GPU Goblin : ce qui tourne sur votre machine, comment vous gardez la main, ce qu'il vous faut."
template = "page.html"
[extra]
lead = "Votre carte graphique est inactive la plus grande partie de la journée. Avec GPU Goblin, ce temps calcule pour la science, seulement quand vous l'autorisez, et rien d'autre que le code de la plateforme ne tourne sur votre machine."
cta = "Créer mon compte"
cta_page = "account"
cta2 = "Télécharger"
cta2_page = "download"
toc = true
+++

## Ce que fait votre ordinateur

Quand vous prêtez votre machine, l'application demande une tâche au
réseau de calcul, la calcule, renvoie le résultat, puis demande la suivante. Une tâche est un morceau d'un
calcul scientifique : un morceau d'un grand produit de matrices, une opération sur les données d'un
modèle, une étape d'entraînement d'un réseau de neurones, ou la vérification du résultat d'un
autre contributeur.

Le logiciel n'exécute que **le code de calcul de GPU Goblin**. Les chercheurs décrivent leur calcul (les
opérations, les tailles) et leurs données, et le logiciel les calcule avec le code de la plateforme.

## Vous gardez la main

L'application GPU Goblin se loge dans la zone de notification et montre ce que fait la machine.
Depuis elle, ou depuis un terminal sur un serveur :

- **Pause** — après la tâche en cours, ou tout de suite (la tâche repart vers le réseau de calcul, sans
  pénalité) ;
- **Seulement en mon absence** — quand votre session est verrouillée, ou après quelques minutes
  sans vous ;
- **Horaires** — prêter seulement pendant des plages choisies, jour par jour, même la nuit ;
- **Laisser la place aux jeux** — aucune nouvelle tâche quand un jeu ou un autre programme utilise
  la carte ;
- **Garder la carte au frais** — aucune nouvelle tâche au-dessus d'une température que vous
  choisissez ;
- **Mémoire** — la part de mémoire de l'ordinateur et de la carte qu'une tâche peut utiliser.

## Ce qu'il vous faut

- {{ <os k="req_os" lang={lang} win={config.extra.windows_available} /> }}
- Pour la carte graphique : une carte NVIDIA, AMD ou Intel avec un pilote Vulkan fonctionnel. Les
  cartes NVIDIA peuvent aussi utiliser le moteur CUDA natif, plusieurs fois plus rapide sur certains
  modèles (4 Go à télécharger).
- Une connexion internet domestique ; la fibre est idéale, mais toute connexion stable convient.
- Quelques gigaoctets libres sur le disque pour le travail en cours.

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

Les machines à plusieurs cartes graphiques font calculer chaque carte séparément, toutes rattachées à votre
compte. Sur un serveur sans écran, la même application fonctionne dans le terminal.

## Avant de commencer : ce qu'il faut savoir

- **Votre machine reçoit des morceaux de données de recherche** à calculer : des tableaux de
  nombres, sans nom ni description, seulement ce dont sa tâche a besoin.
- **Votre machine partage des données avec d'autres contributeurs** pour économiser la bande
  passante du serveur : les autres machines autorisées sur les mêmes données peuvent voir votre
  adresse publique. Vous pouvez désactiver ce partage.
- **Les crédits n'ont aucune valeur monétaire.** Ils comptent votre contribution ; rien n'est payé.
- Prêter consomme de l'électricité et chauffe la machine. Les limites ci-dessus sont là pour que
  cela ne vous coûte jamais plus que ce que vous avez décidé.

Lisez la [page sécurité](../security) pour comprendre le bac à sable et les vérifications.

## Pour commencer

1. [Créez votre compte](../account) avec votre adresse e-mail (pas de mot de passe : on vous envoie
   un code).
2. [Téléchargez l'application](../download) et connectez-vous avec la même adresse.
3. Choisissez ce que vous prêtez et quand. La machine se rattache à votre compte et démarre.
