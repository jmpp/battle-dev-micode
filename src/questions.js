const questions = [
  {
    question: 'Quel est le langage de programmation utilisé pour le développement web ?',
    answers: ['Java', 'Python', 'JavaScript'],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce que HTML et quelle est sa fonction principale dans le développement Web ?",
    answers: [
      "HTML est un langage de balisage utilisé pour structurer le contenu d'un site Web.",
      'HTML est un langage de programmation utilisé pour créer des applications Web.',
      'HTML est un langage de requête utilisé pour interagir avec une base de données.',
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Qu'est-ce que CSS et quel est son rôle dans la conception des sites Web ?",
    answers: [
      'CSS est un langage de programmation utilisé pour créer des sites Web dynamiques.',
      "CSS est un langage de balisage utilisé pour structurer le contenu d'un site Web.",
      "CSS est un langage de style utilisé pour définir l'apparence visuelle d'un site Web.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Quelles sont les différences entre un site Web statique et un site Web dynamique ?',
    answers: [
      'Un site Web statique est interactif et peut être modifié par les utilisateurs.',
      'Un site Web statique affiche toujours le même contenu pour tous les utilisateurs.',
      'Un site Web dynamique utilise des animations et des effets spéciaux.',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Qu'est-ce qu'un framework de développement Web et donnez un exemple populaire ?",
    answers: [
      'Un framework de développement Web est un outil utilisé pour créer des applications mobiles.',
      "Un framework de développement Web est un ensemble de bibliothèques et d'outils qui facilitent le processus de développement Web.",
      "Un framework de développement Web est une méthode de codage utilisée pour optimiser les performances d'un site Web.",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Qu'est-ce que JavaScript et quel est son rôle dans le développement Web ?",
    answers: [
      "JavaScript est un langage de programmation utilisé pour le développement d'applications mobiles.",
      "JavaScript est un langage de style utilisé pour définir l'apparence visuelle d'un site Web.",
      'JavaScript est un langage de programmation utilisé pour rendre les sites Web interactifs et dynamiques.',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce que le modèle MVC dans le développement Web ?",
    answers: [
      'Le modèle MVC est un langage de programmation utilisé pour créer des sites Web statiques.',
      'Le modèle MVC est une architecture logicielle utilisée pour organiser et structurer les applications Web.',
      "Le modèle MVC est un langage de balisage utilisé pour structurer le contenu d'un site Web.",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Qu'est-ce qu'une requête HTTP et quelle est sa fonction dans le développement Web ?",
    answers: [
      "Une requête HTTP est une méthode de cryptage utilisée pour sécuriser les données d'un site Web.",
      'Une requête HTTP est une demande envoyée par un navigateur Web à un serveur pour récupérer des ressources.',
      'Une requête HTTP est un protocole de communication utilisé pour établir une connexion entre un serveur et un client.',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Qu'est-ce qu'un CMS et quel est son rôle dans le développement Web ?",
    answers: [
      'Un CMS est un langage de programmation utilisé pour créer des applications Web.',
      "Un CMS est une méthode de codage utilisée pour optimiser les performances d'un site Web.",
      'Un CMS est un système de gestion de contenu utilisé pour créer et gérer des sites Web.',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce qu'un CDN et comment cela améliore-t-il les performances d'un site Web ?",
    answers: [
      "Un CDN est une méthode de cryptage utilisée pour sécuriser les données d'un site Web.",
      'Un CDN est un protocole de communication utilisé pour établir une connexion entre un serveur et un client.',
      "Un CDN est un réseau de serveurs répartis géographiquement qui permet de distribuer le contenu d'un site Web de manière efficace, améliorant ainsi les performances du site.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce que l'accessibilité Web et pourquoi est-elle importante dans le développement Web ?",
    answers: [
      "L'accessibilité Web est une méthode de codage utilisée pour optimiser les performances d'un site Web.",
      "L'accessibilité Web est un langage de programmation utilisé pour créer des applications Web.",
      "L'accessibilité Web concerne la conception et le développement de sites Web afin de les rendre accessibles à tous, y compris aux personnes handicapées.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce que le SEO et pourquoi est-il important pour un site Web ?",
    answers: [
      'Le SEO est un système de gestion de contenu utilisé pour créer et gérer des sites Web.',
      'Le SEO est un protocole de communication utilisé pour établir une connexion entre un serveur et un client.',
      "Le SEO (Search Engine Optimization) concerne l'optimisation d'un site Web afin d'améliorer sa visibilité et son classement dans les résultats des moteurs de recherche.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce qu'une API et comment est-elle utilisée dans le développement Web ?",
    answers: [
      "Une API est une méthode de cryptage utilisée pour sécuriser les données d'un site Web.",
      "Une API est une méthode de communication entre différents logiciels, permettant d'échanger des données et de fonctionner de manière interopérable.",
      "Une API est une méthode de codage utilisée pour optimiser les performances d'un site Web.",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Qu'est-ce que le responsive design et pourquoi est-il important dans le développement Web ?",
    answers: [
      'Le responsive design est un langage de programmation utilisé pour créer des applications Web.',
      "Le responsive design est une méthode de codage utilisée pour optimiser les performances d'un site Web.",
      "Le responsive design concerne la conception de sites Web qui s'adaptent automatiquement à différents appareils et tailles d'écran, offrant une expérience utilisateur cohérente et conviviale.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce qu'une base de données relationnelle et comment est-elle utilisée dans le développement Web ?",
    answers: [
      'Une base de données relationnelle est un système de gestion de contenu utilisé pour créer et gérer des sites Web.',
      "Une base de données relationnelle est une méthode de cryptage utilisée pour sécuriser les données d'un site Web.",
      'Une base de données relationnelle est une structure de données organisée en tables liées les unes aux autres par des clés, utilisée pour stocker et gérer les données dans une application Web.',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce qu'un protocole HTTPS et pourquoi est-il important pour la sécurité d'un site Web ?",
    answers: [
      'Le protocole HTTPS est un langage de programmation utilisé pour créer des applications Web.',
      'Le protocole HTTPS est un protocole de communication utilisé pour établir une connexion entre un serveur et un client.',
      "Le protocole HTTPS (HTTP Secure) est une version sécurisée du protocole HTTP qui utilise un chiffrement SSL/TLS pour protéger les données échangées entre un navigateur et un site Web, assurant ainsi la confidentialité et l'intégrité des informations.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce qu'une requête GET dans le contexte du développement Web ?",
    answers: [
      'Une requête GET est utilisée pour envoyer des données au serveur depuis un formulaire Web.',
      "Une requête GET est utilisée pour récupérer des données du serveur dans le cadre d'une API REST.",
      "Une requête GET est utilisée pour supprimer des données du serveur dans le cadre d'une opération de suppression.",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Qu'est-ce qu'une application Web progressive (PWA) ?",
    answers: [
      "Une application Web progressive est une application qui nécessite une installation sur l'appareil de l'utilisateur.",
      'Une application Web progressive est une application qui fonctionne uniquement en ligne, sans nécessiter de connexion Internet.',
      'Une application Web progressive est une application Web qui combine les caractéristiques des applications Web et des applications natives, offrant une expérience utilisateur avancée, même en mode hors ligne.',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce que l'architecture sans serveur (serverless) dans le développement Web ?",
    answers: [
      "L'architecture sans serveur est une approche où aucune donnée n'est stockée sur le serveur.",
      "L'architecture sans serveur est une approche où le développement Web est effectué sans utiliser de serveur web.",
      "L'architecture sans serveur est une approche où la gestion de l'infrastructure serveur est externalisée, permettant aux développeurs de se concentrer sur le code métier sans se soucier de la gestion des serveurs.",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Qu'est-ce que Git et quelle est son utilité dans le développement Web ?",
    answers: [
      'Git est un langage de programmation utilisé pour créer des sites Web statiques.',
      "Git est un logiciel de gestion de version utilisé pour suivre les modifications du code source d'un projet de développement.",
      "Git est un serveur de base de données utilisé pour stocker les informations des utilisateurs d'un site Web.",
    ],
    correctAnswerIndex: 1,
  },
];
export default questions;
