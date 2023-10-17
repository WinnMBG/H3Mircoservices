# H3Mircoservices (Rapport Mi-Parcours Projet)

## Sujet du projet: Catalogue de films

Le projet ici sera orienté vers la création d'un catalogue de films très simple, qui va se composer principalement des 3 pages:
- La page d'accueil, avec la barre de recherche et les résultats
- La page des films favoris, qui contiendra les films aouté en favoris
- Une page pour laisser un avis sur l'un des films, qui contiendra un formulaire.

Il sera donc composé de 3 services: le front, le back et une BDD.
Pour ce projet, l'archtecture sera orienté sous la forme de microservices. Chaque service ici sera conteneurisé grâce à Docker,
et seront mis en communication avec le network docker. Ils seront ensuite pousser sur un container registry pour pouvoir avoir au final une version online.
En fonction, des contraintes de temps que nous aurons, j'aurais peut être l'occasion de développer un server nginx de reverse proxy pour la partie sécurité.

(Schéma à venir)

Les technologies utilisés afin de réaliser ce projet seront les suivantes:
- Front-end : React.js
- Back-end: Node.js
- BDD: MongoDB
J'ai chosi ces technos la en particulier car ce sont celles avec lequel j'ai le plus d'affinité et notamment pour le choix de la BDD MongoDB car c'est une BDD NoSQL orienté documents qui offre beaucoup plus de flexibilité dans la construction de ceux-ci
car les schémas ne sont pas prédéfinis à l'avance.
