---
date: "2021-12-29"
title: "Pourquoi utiliser GatsbyJS pour son portfolio ?"
---

## Introduction

Dans cet article, je vous explique pourquoi j'ai utilisé [Gatsby](https://www.gatsbyjs.com/) et non [WordPress](https://wordpress.org) pour développer ce blog, mais surtout pourquoi Gatsby devrait être une option à considérer lors du développement de votre prochain portfolio / blog !

## Qu'est-ce que Gatsby ?

[Gatsby](https://www.gatsbyjs.com/) est un générateur de site statique basé sur [React](https://reactjs.org/docs/getting-started.html) et [GraphQL](https://graphql.org/learn/). Gatsby a beau être basé sur React, il est néanmoins pas nécessaire d'avoir des connaissances très poussées afin de profiter de Gatsby. En effet, Gatsby propose l'utilisation de nombreux plugins accélérant et facilitant le développement de votre application. Le système de routing de Gatsby par exemple, est basé sur la structure dans votre dossier src/pages.

## Pourquoi avoir choisi Gatsby et non WordPress ?

La principale raison pour laquelle j'ai décidé de passer sous Gatsby, ce sont ses performances. Gatsby optimise beaucoup de chose lors de la génération de votre site lorsque vous tapez la commande "gatsby build". Par exemple, il génère plusieurs formats d'image différents afin d'afficher l'image la plus adaptée à la résolution de l'utilisation, il intègre du lazy loading et met également en place un système de cache, il précharge également le contenu des autres pages sur lesquelles vous pouvez naviguer grâce au lien présent sur la page. Évitant un temps de chargement lorsque vous passez d'une page à l'autre.

La seconde raison est que j'aime bien avoir la main sur tout ce qui va être présent sur la page, c'est le cas avec Gatsby, sur WordPress il y aura souvent des divs "imprévu" à cause de certains plugins, thème, ou même de mise à jour, faisant globament de votre code, un code moins propre.

La troisième raison est également que je ne suis jamais satisfait de ce que j'ai fait et souhaite toujours faire mieux, avec gatsby je peux modifier mon site et le déployer sur GitHub, mon hébergeur [Netlify](https://www.netlify.com/) va alors automatiquement récumérer la dernière version du repo git pour rebuild le site automatiquement.

## Les starters

Sur le site de Gatsby, vous pourrez trouver une bonne dizaine de "Starters" permettant de commencer un site avec des fonctionnalités déjà mise en place, dans le cas d'un blog ou d'un portfolio classique, vous aurez simplement à changer le template de ce dernier. Certain starter sont assez poussés, permettant par exemple de récupérer les articles via un backend WordPress, Gatsby gèrera ainsi que le Front-End de votre site.

## Les packages

Gatsby utilisant React, vous pouvez utiliser un grand nombre de packages pour les intégrer dans votre site. Il est également assez simple de créer un package vous mêmes si vous souhaitez utiliser une fonctionnalité sur plusieurs sites Gatsby que vous maintenez, j'ai par exemple développé mon premier package pour ce portfolio, que j'ai rendu libre : [gatsby-cookie-notice](https://github.com/florent6001/gatsby-cookie-notice) permettant d'avertir les utilisateurs sur l'utilisation des cookies.
