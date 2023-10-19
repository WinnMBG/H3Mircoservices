# H3Mircoservices (Rapport Mi-Parcours Projet)

## Sujet du projet: Catalogue de films

Le projet ici sera orienté vers la création d'un catalogue de films très simple, qui va se composer principalement des 2 pages:
- La page d'accueil, avec la barre de recherche et les résultats
- La page des films favoris, qui contiendra les films aouté en favoris
  
Il sera donc composé de 3 services: le front, le back et une BDD.
Pour ce projet, l'archtecture sera orienté sous la forme de microservices. Chaque service ici sera conteneurisé grâce à Docker,
et seront mis en communication avec le network docker. Ils seront ensuite pousser sur un container registry pour pouvoir avoir au final une version online.
En fonction, des contraintes de temps que nous aurons, j'aurais peut être l'occasion de développer un server nginx de reverse proxy pour la partie sécurité.

## Architecture globale du projet

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/42cbe70a-1e14-4091-9674-4fb6618fa47f)

Mon architecture pour ce projet va reposer essentiellement sur des services développés chacun dans des conteneurs Docker et mis en relation par le docker compose. Tout cela est effectué toujours dans un souci de flexibilité, d'élasticité et de la facilité de déploiement sur un cloud type Azure.
Le schéma de données principal est celui de l'objet Film qui est défini comme tel ci dessous: 

```
$ const Film = {
  title: String,
  id: Number,
  _id: ObjectID (ajouté après l'enregistrement en base par MONGODB)
  vote_average: Number,
  genre_ids: Number[],
  overview: String,
  poster_path: String,
  release_date: string
}
```

## Technologies utilisés

Les technologies utilisés afin de réaliser ce projet seront les suivantes:
- Front-end : React.js
- Back-end: Node.js
- BDD: MongoDB
J'ai chosi ces technos la en particulier car ce sont celles avec lequel j'ai le plus d'affinité et notamment pour le choix de la BDD MongoDB car c'est une BDD NoSQL orienté documents qui offre beaucoup plus de flexibilité dans la construction de ceux-ci.

## Build docker images et push sur azure container registry

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/68020deb-5006-4cd3-a6f9-2f4e5975d877)


![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/b6a7740b-585c-44e7-8a5f-10dfb9a0792f)


