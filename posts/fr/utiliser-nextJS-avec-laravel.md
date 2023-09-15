---
date: "2022-07-06"
title: "Utiliser nextJS avec Laravel"
---

## Introduction

De nos jours, le développement avec une API back-end (comme ([Laravel](https://laravel.com/), [Symfony](https://symfony.com/) ou [ExpressJS](https://expressjs.com/fr/)), et un front-end séparé (avec [NextJS](https://nextjs.org/), [NuxtJS](https://nuxtjs.org/), [Gatsby](https://www.gatsbyjs.com/), etc.) est de plus en plus courant. Au premier abord, la séparation du back-end et du front-end peut sembler complexe et intimidante. La mise en place d'un système de connexion ou d'inscription ppeut sembler être un véritable défi, notamment la gestion des tokens d'authentification, des accès réservés au membres, etc.


Heureusement, Laravel a sorti Laravel Breeze il y a quelques temps, offrant une application de base pour démarrer rapidement un projet avec un système d'authenticatioon et de réinitialisation de mot de passe.

## L'apparition de breeze-next

Bien que peu de vidéos soient actuellement disponibles sur le sujet sur YouTube, Laravel Breeze propose un starter avec NextJS, que vous pouvez trouver sur le dépot github : [laravel/breeze-next](https://github.com/laravel/breeze-next). Ce référentiel vous permet de cloner une application NextJS qui intègre exactement les mêmes fonctionnalités que Breeze pour la version Laravel.

Vous disposerez ainsi d'une application NextJS utilisant le template de Breeze (avec [TailwindCSS](https://tailwindcss.com/)) et offrant les mêmes fonctionnalités telle que l'authentification et la réinitialisation de mot de passe.

## Un middleware pour les utilisateurs

Breeze-next vous permet de restreindre l'accès à certaines pages aux utilisateurs non identifiés, maiségalement à certains utilisateurs identifiés. Dans le dossier Hooks, vous trouvez un fichier "Auth" qui permet d'appliquer ce middleware à vos pages.

Voici un exemple :

```js
import { useAuth } from "@/hooks/auth";

const Login = () => {
  const router = useRouter();

  // Cette ligne indique que l'utilisateur ne doit pas être connecté pour accéder à cette page, si il est connecté, on le redirige vers le dashboard.
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  return <GuestLayout>// Mon super rendu côté client</GuestLayout>;
};
```

## Utilisation des layouts

Le layout AppLayout (nom donné par Breeze Next aux utilisateurs connectés) restreint automatiquement l'accès aux utilisateurs non connectés.

```js
const { user } = useAuth({ middleware: "auth" });
```

Dans cette logique, vous devrez utiliser le layout GuestLayout pour les pages où l'utilisateur n'a pas besoin d'être connecté, et le layout AppLayout pour les pages nécessitant une connexion (par exemple, un tableau de bord).

## Le meilleur moyen de comprendre est de tester par vous-même

Maintenant que vous avez une idée de comment fonctionne Breeze Next, il ne vous reste plus qu'à l'essayer. Pour cloner le référenciel, je vous invite à suivre le Readme.MD disponible sur la page Github de Breeze-Next. Celui-ci est très bien détaillé et vous guide pas à pas dans l'installation et la configuration du projet NextJS et Laravel.

Je vous recommande de le tester en créant un projet simple (comme un blog par exemple). Vous pourrez ainsi découvrir la création de l'API avec Laravel et son intégration dans NextJS.
