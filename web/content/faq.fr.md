+++
title = "Questions fréquentes"
description = "Réponses sur GPU Goblin : coût, crédits, sécurité de votre ordinateur, électricité et chaleur, matériel pris en charge, données, et accès des chercheurs."
template = "faq.html"
[extra]
lead = "Il vous manque une réponse ? Écrivez à contact@gpugoblin.com."
groups = [
  { id = "general", title = "Le projet", items = [
    { q = "Qu'est-ce que GPU Goblin ?", a = "Un réseau de calcul dédié à la recherche, fait d'ordinateurs prêtés par des particuliers et des labos. Les chercheurs peuvent l'utiliser pour leurs recherches nécessitant une puissance de calcul importante ; les contributeurs prêtent leur carte graphique ou leur processeur quand ils n'en ont pas besoin." },
    { q = "Qui fait GPU Goblin ?", a = "GPU Goblin est conçu et développé par Nicolas Michel, membre du LAAS-CNRS, un laboratoire de recherche à Toulouse. C'est un projet personnel, pas un service officiel du CNRS." },
    { q = "Est-ce gratuit ?", a = "Oui, pour la recherche et tout usage non commercial. Prêter ne coûte que l'électricité, et calculer sur le réseau de calcul est gratuit pour la recherche. Le code source est publié sous la licence PolyForm Noncommercial." },
    { q = "Est-ce un logiciel libre ?", a = "Le code source est publié, mais sous la licence PolyForm Noncommercial : gratuit pour la recherche et les usages non commerciaux, pas libre au sens de l'OSI. Un usage commercial demande l'accord de l'auteur." },
    { q = "Où en est le projet ?", a = "En préparation de bêta : le réseau de calcul fonctionne et est en test avant une ouverture plus large. Il tourne aujourd'hui sous Linux ; une version Windows arrive très bientôt, et une version Android est prévue.", a_win = "En préparation de bêta : le réseau de calcul fonctionne et est en test avant une ouverture plus large. Il tourne sous Windows et Linux ; une version Android est prévue." },
  ] },
  { id = "contributors", title = "Prêter son ordinateur", items = [
    { q = "Serai-je payé ?", a = "Non. Vous gagnez des crédits qui comptent votre contribution, mais ces crédits n'ont aucune valeur monétaire et rien n'est promis." },
    { q = "Est-ce sans danger pour mon ordinateur ?", a = "Votre machine n'exécute que le code de calcul de GPU Goblin, jamais un programme envoyé par un chercheur, et chaque tâche tourne dans un bac à sable sans accès au réseau, à l'écart de vos fichiers, avec des limites de mémoire et de disque." },
    { q = "Est-ce que ça ralentira mon ordinateur ou mes jeux ?", a = "C'est vous qui décidez : prêter seulement en votre absence, à des horaires choisis, jamais quand un jeu utilise la carte, jamais au-dessus d'une température. Pause immédiate depuis l'icône de notification quand vous voulez." },
    { q = "Combien d'électricité cela consomme-t-il ?", a = "Autant que votre carte graphique en pleine charge, seulement pendant qu'elle calcule. Limiter les horaires et la température limite la consommation." },
    { q = "Quel matériel fonctionne ?", a = "Un ordinateur Linux x86-64 (une version Windows arrive très bientôt). Les cartes graphiques NVIDIA, AMD ou Intel via Vulkan ; les cartes NVIDIA peuvent aussi utiliser le moteur CUDA natif, plus rapide. Les processeurs fonctionnent aussi, plus lentement.", a_win = "Un ordinateur sous Windows 10 ou 11, ou Linux x86-64. Les cartes graphiques NVIDIA, AMD ou Intel via Vulkan ; les cartes NVIDIA peuvent aussi utiliser le moteur CUDA natif, plus rapide. Les processeurs fonctionnent aussi, plus lentement." },
    { q = "Puis-je prêter un serveur sans écran, ou une machine à plusieurs cartes graphiques ?", a = "Oui. L'application a un mode console pour les serveurs, et une machine à plusieurs cartes fait calculer chaque carte séparément, toutes rattachées à votre compte." },
    { q = "Mon ordinateur voit-il les données des chercheurs ?", a = "Il ne reçoit que des morceaux des données dont ses tâches ont besoin : des tableaux de nombres, sans nom de fichier ni description de ce qu'ils représentent (le texte arrive sous forme de jetons numériques). Les chercheurs sont prévenus de ne pas envoyer de données sensibles sur le réseau de calcul ouvert." },
    { q = "Mon adresse IP est-elle visible ?", a = "Pour économiser la bande passante du serveur, les machines partagent des données entre elles ; tant que ce partage est activé, les autres machines autorisées sur les mêmes données peuvent voir votre adresse publique. Vous pouvez le désactiver." },
  ] },
  { id = "researchers", title = "Pour les chercheurs", items = [
    { q = "Que puis-je calculer ?", a = "Aujourd'hui : de grands produits de matrices, des calculs décrits comme des graphes d'opérations sur des tenseurs (plus de 45 opérateurs, capturés depuis PyTorch par exemple), et l'entraînement de modèles d'apprentissage automatique (réseaux convolutifs, transformers, modèles de langage). Les calculs plus grands qu'une machine sont découpés automatiquement. Les machines des contributeurs n'exécutent que les types de calcul du catalogue de la plateforme, jamais du code arbitraire : d'autres types y sont ajoutés au fil du temps, dites-nous ce dont vous avez besoin." },
    { q = "Comment les résultats sont-ils vérifiés ?", a = "Chaque résultat est recalculé par un validateur indépendant ou comparé au même calcul fait par un autre contributeur, dans une tolérance mesurée, avant d'être utilisé." },
    { q = "Où sont mes données ?", a = "Par défaut sur le nœud de votre laboratoire, un service installé chez vous. Il n'envoie jamais vos jeux de données tels quels : il envoie aux machines de calcul des opérations à calculer, avec seulement les nombres dont chaque tâche a besoin. Le serveur ne stocke aucune donnée de recherche." },
    { q = "Comment obtenir un accès ?", a = "Depuis votre compte : connectez-vous avec votre adresse e-mail et remplissez la demande d'accès chercheur." },
  ] },
]
+++
