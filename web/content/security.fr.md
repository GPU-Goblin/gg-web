+++
title = "Sécurité et confiance"
description = "Comment GPU Goblin protège les machines des contributeurs et les résultats des chercheurs : aucun code étranger, tâches isolées, résultats vérifiés, et ce qui n'est pas protégé."
template = "page.html"
[extra]
lead = "Comment GPU Goblin protège votre machine et vérifie les résultats, et ce qui n'est pas protégé."
toc = true
+++

## Sur votre ordinateur

- **Aucun code étranger.** Le logiciel n'exécute que le code de calcul de GPU Goblin. Une tâche est une
  *description* (les couches d'un modèle, un lot de données, une taille).
- **Un bac à sable pour chaque tâche.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Données contrôlées.** Avant d'effectuer les calculs, le logiciel vérifie la signature du serveur à la réception des données. Si une donnée a été modifiée, le calcul est rejeté.
- **Contrôle local.** Le logiciel ne se pilote que depuis votre propre machine.

## Sur les résultats

- **Vérification des calculs.** Chaque résultat est soit recalculé par un validateur
  indépendant, soit calculé deux fois par deux contributeurs différents et comparé dans une
  tolérance mesurée.
- **Contrôles aléatoires.** Une part des résultats est recalculée une troisième fois, au hasard,
  même quand deux contributeurs sont d'accord.

## Ce qui n'est pas protégé

- **Les contributeurs reçoivent des morceaux des données qu'ils calculent** : des tableaux de
  nombres sans nom ni description, seulement ce dont chaque tâche a besoin. Les données ne sont pas chiffrées pendant le calcul : n'envoyez pas de données confidentielles sur le réseau de calcul ouvert.
- **Votre adresse publique est visible** des autres machines autorisées sur les mêmes données quand
  le partage entre contributeurs est activé (il l'est par défaut, et peut être désactivé).


## Signaler un problème

Vous avez trouvé une faille de sécurité ? Écrivez à
[contact@gpugoblin.com](mailto:contact@gpugoblin.com) avant de la publier.
