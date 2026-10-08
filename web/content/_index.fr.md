+++
title = "GPU Goblin"
description = "Prêtez la carte graphique de votre ordinateur au calcul scientifique, ou utilisez le réseau de calcul de GPU Goblin pour vos recherches. Gratuit pour la recherche, résultats vérifiés, vous gardez la main."
template = "index.html"

[extra]
hero_title = "Votre carte graphique inactive peut faire avancer la science de demain"
hero_lead = "GPU Goblin réunit les ordinateurs des contributeurs en un seul réseau de calcul dédié à la recherche. Les chercheurs peuvent mener leurs calculs grâce à votre aide, et ainsi faire progresser les connaissances scientifiques."

steps_title = "Comment ça marche"
steps = [
  { title = "Installez l'application", text = "Connectez-vous avec votre adresse e-mail et choisissez ce que vous prêtez : processeur ou carte graphique." },
  { title = "Vous choisissez quand", text = "Seulement en votre absence, la nuit, sous une température donnée : votre machine prête quand cela vous convient, et vous pouvez l'arrêter à tout moment." },
  { title = "Les chercheurs calculent", text = "Les scientifiques utilisent les cartes graphiques prêtées pour des calculs liés à leurs recherches." },
]

sides = [
  { title = "Vous avez un ordinateur", text = "Un PC de jeu, une station de travail, un serveur de labo : sa carte graphique reste inactive la plus grande partie de la journée. Prêtez ce temps à la recherche.", points = ["Seul le code de la plateforme tourne, dans un bac à sable", "Vous décidez quand : absence, horaires, température, mémoire", "Arrêt immédiat dès que vous avez besoin de la machine"], page = "contribute", cta = "Prêter son GPU" },
  { title = "Vous êtes chercheur", text = "Utilisez le réseau de calcul de GPU Goblin pour vos calculs scientifiques depuis Python : il suffit d'importer la bibliothèque gpugoblin.", points = ["Grands calculs découpés automatiquement en morceaux", "Vos données restent sur le nœud de votre labo par défaut", "Résultats vérifiés avant de vous parvenir"], page = "research", cta = "Pour les chercheurs" },
]

trust_title = "Conçu pour mériter votre confiance"
trust_lead = "Votre machine reste protégée, et les chercheurs peuvent se fier à chaque résultat."
trust = [
  { title = "Aucun code étranger", text = "Votre machine exécute uniquement le code de calcul publié de GPU Goblin, jamais un programme envoyé par un chercheur." },
  { title = "Bac à sable", text = "Chaque tâche tourne isolée de vos fichiers et du réseau, avec des limites de mémoire, de disque et de processeur." },
  { title = "Résultats vérifiés", text = "Un résultat ne compte qu'après un recalcul indépendant ou une concordance avec celui d'un autre contributeur." },
  { title = "Vous gardez la main", text = "Pause, horaires, seulement en votre absence, limites de température et de mémoire : la machine est d'abord à vous." },
]

status_title = "Où en est le projet"
faq_title = "Les premières questions"
faq = [
  { q = "GPU Goblin est-il gratuit ?", a = "Oui, pour la recherche et tout usage non commercial. Prêter son ordinateur ne coûte que l'électricité, et utiliser le réseau de calcul pour la recherche est gratuit. Le logiciel est publié sous la licence PolyForm Noncommercial." },
  { q = "Serai-je payé pour prêter mon ordinateur ?", a = "Non. Les contributeurs gagnent des crédits qui comptent leur contribution, mais ces crédits n'ont aucune valeur monétaire et rien n'est promis. GPU Goblin, c'est du calcul bénévole pour la science." },
  { q = "Un chercheur peut-il exécuter ce qu'il veut sur ma machine ?", a = "Non. Votre machine n'exécute que le code de calcul de GPU Goblin (produits de matrices, opérations sur des tenseurs, étapes d'entraînement de modèles), dans un bac à sable. Les chercheurs décrivent des modèles et des données ; ils n'envoient jamais de programme." },
]

final_title = "Donnez à la science la puissance qui lui manque"
final_text = "Inscrivez-vous en une minute avec votre adresse e-mail, installez l'application, et choisissez quand votre machine aide la recherche."
+++

GPU Goblin est **en préparation de bêta** : le réseau de calcul est en test avant l'arrivée de contributeurs et
de chercheurs plus nombreux. Ce qui fonctionne déjà :

- les grands calculs matriciels, et les calculs décrits comme des graphes d'opérations sur des
  tenseurs (écrits avec PyTorch, par exemple), y compris plus grands qu'aucun ordinateur seul,
  découpés en morceaux ;
- l'entraînement de modèles d'apprentissage automatique, y compris des modèles plus grands qu'aucun
  ordinateur seul, découpés en étages et en tuiles ;
- le calcul sur processeur, sur carte graphique via Vulkan (NVIDIA, AMD, Intel) et nativement sur
  les cartes NVIDIA avec CUDA ;
- la vérification de chaque résultat, par un recalcul indépendant ou par comparaison avec le
  résultat d'un autre contributeur ;
- {{ <os k="home_app" lang={lang} win={config.extra.windows_available} /> }}

{{ <os k="home_plans" lang={lang} win={config.extra.windows_available} /> }} 
