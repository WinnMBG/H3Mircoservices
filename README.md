# H3Mircoservices (Rapport Projet)

### /!\ L'ensemble du projet se situe dans le repertoire projet de ce repot Github, (front + back)

## Sujet du projet: Catalogue de films

Le projet ici sera orienté vers la création d'un catalogue de films très simple, qui va se composer principalement des 2 pages:
- La page d'accueil, avec la barre de recherche et les résultats
- La page des films favoris, qui contiendra les films aouté en favoris
  
Il sera donc composé de 3 services: le front, le back et une BDD.
Pour ce projet, l'archtecture sera orienté sous la forme de microservices. Chaque service ici sera conteneurisé grâce à Docker,
et seront mis en communication avec le network docker. Ils seront ensuite pousser sur un container registry pour pouvoir avoir au final une version online.
En fonction, des contraintes de temps que nous aurons, j'aurais peut être l'occasion de développer un server nginx de reverse proxy pour la partie sécurité.

## Architecture globale du projet

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/49396941-b68a-4112-98b5-642cc12e6990)


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
- Front-end : React.js, pourquoi ?
  - **Composants réutilisables** : React permet de créer des composants réutilisables, ce qui simplifie le développement et la maintenance de l'interface utilisateur. Les composants peuvent être assemblés pour créer des interfaces plus complexes.

  - **Virtual DOM** : React utilise un Virtual DOM pour améliorer les performances. Il compare l'état actuel du DOM avec une représentation virtuelle avant de mettre à jour réellement le DOM, ce qui réduit les opérations coûteuses de manipulation du DOM et améliore les performances.

  - **Mise à jour efficace** : Grâce à sa gestion efficace du rendu et à la mise en œuvre du Virtual DOM, React ne met à jour que les parties du DOM qui ont réellement changé, ce qui minimise le temps de rendu et améliore la réactivité de l'application.

- Back-end: Node.js, pourquoi ?
  - **JavaScript unifié** : Node.js permet aux développeurs d'utiliser JavaScript aussi bien côté client que côté serveur, ce qui simplifie la création d'applications full-stack. Il évite la nécessité d'apprendre un autre langage pour le backend.

  - **Haute performance** : Node.js est conçu pour être non bloquant et basé sur un modèle d'E/S asynchrone. Cela signifie qu'il peut gérer de nombreuses connexions simultanées de manière efficace, ce qui le rend idéal pour les applications en temps réel, telles que les applications de chat, de jeux en ligne et les applications de streaming.

  - **Évolutif** : Node.js peut facilement être mis à l'échelle horizontalement en ajoutant davantage de nœuds, ce qui permet de gérer un trafic plus important.
    
- BDD: MongoDB
J'ai chosi ces technos la en particulier car ce sont celles avec lequel j'ai le plus d'affinité et notamment pour le choix de la BDD MongoDB car c'est une BDD NoSQL orienté documents qui offre beaucoup plus de flexibilité dans la construction de ceux-ci.

## Build docker images et push sur azure container registry

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/68020deb-5006-4cd3-a6f9-2f4e5975d877)


![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/b6a7740b-585c-44e7-8a5f-10dfb9a0792f)


**Version en ligne du projet** : [https://testemicrosservice.netlify.app/](https://testemicrosservice.netlify.app/)

## Comment lancer le projet localement

1) Récupérer les images disponible sur Azure container registry ou bien sur Docker Hub (le cas échéant) :
   - docker pull h3microservices.azurecr.io/micro_frontend or docker pull winnmbg/micro_frontend
   - docker pull h3microservices.azurecr.io/micro_backend or docker pull winn/micro_frontend
2) Récupérer le docker compose donc ce repot git (dans le dossier projet)
3) lancer la commande docker compose up -d
4) le projet est donc accessible sur : [http://localhost:3000](http://localhost:3000)
5) les différents endpoints de l'api seront accessible sur : [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

Voici l'interface obtenu en allant sur cet URL :

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/8acf9c20-81e9-4632-b8cd-77bf201f6dc1)

# Prométheus

Voici un graphique obtenu après avoir lancé l'application:

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/111c7e8f-e9d3-4f71-be25-0dad9fe47a5f)

# ElastichSearch 

Suite au projet de cette semaine, nous avions du ajouter la stack ELK (Elastic, Logstash and Kibana) pour avoir un moteur de recherche efficace et rapide sur notre app.

Real-time data Visualizing:

![image](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/1a646c73-a045-42ea-ba81-681fdacbcf4c)


![Capture d’écran du 2024-01-12 12-18-52](https://github.com/WinnMBG/H3Mircoservices/assets/77972619/58342b59-e758-4475-8bc2-8c0e559582e2)


Il y a une documentation swagger avec tous les endpoints utilisés poour construire l'API (qui est très simpliste comme vous pouvez le constater)
Les requêtes seront effectuées quant à elles, au niveau du **port 3001** qui sera mis à disposition au niveau de l'application globale (grâce au conteneur s'occupant du backend).


# How to start the app

```
docker compose up -d
```
