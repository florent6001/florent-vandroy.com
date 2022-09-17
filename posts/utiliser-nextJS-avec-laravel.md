---
date: "2022-07-06"
title: "Utiliser nextJS avec Laravel"
---

## Introduction

Nous entendons parler de plus en plus de développement avec une API back-end ([Laravel](https://laravel.com/), [Symfony](https://symfony.com/), [ExpressJS](https://expressjs.com/fr/)), et un front-end séparé (avec [NextJS](https://nextjs.org/), [NuxtJS](https://nuxtjs.org/), [Gatsby](https://www.gatsbyjs.com/), ...).
À première vue, séparer le back-end et le front-end peut faire peur et paraître compliqué.
Le simple fait de créer un système de login / register paraît être un véritable calvaire, il faut placer le token dans les entêtes, gérer les accès réservés au membre, ..
Laravel a sorti [Laravel Breeze](https://laravel.com/docs/9.x/starter-kits) il y a quelques temps maintenant, permettant de générer une application de base pour démarrer son projet (Système d'authentification, mot de passe oublié, ..)

## L'apparition de breeze-next.

Bien qu'il n'y ai actuellement que très peu de vidéo sur le sujet sur Youtube, [Laravel Breeze](https://laravel.com/docs/9.x/starter-kits) propose un starter avec nextJS, que vous trouverez sur ce dépôt Github : [laravel/breeze-next](https://github.com/laravel/breeze-next). Ce repository, vous permettra de clôner une application NextJS comportant exactement la même chose que Breeze pour la version Laravel.

Vous aurez donc une application NextJS utilisant le template de Breeze (avec [TailwindCSS](https://tailwindcss.com/)) comportant les mêmes fonctionnalité (Authentication, mot de passe oublié, ..)

## Un middleware pour les utilisateurs.

Breeze-next, vous permet de bloquer l'accès au utilisateurs non identifié, mais également au utilisateurs identifiés pour certaine page. Dans le dossier Hook, vous trouverez un fichier Auth, permettant de faire passer ce middleware sur vos pages.

Voici un exemple de celui-ci :

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

Le AppLayout (le nom du layout donné par breeze-next pour les utilisateurs connecté, restreint automatique les utilisateurs non connecté.)

```js
const { user } = useAuth({ middleware: "auth" });
```

Dans la logique des choses, vous devrez donc utiliser le layout GuestLayout pour les pages où l'utilisateur n'a pas besoin d'être connecté. Et le layout AppLayout pour les pages nécessitant d'être connecté (un tableau de bord par exemple).

## Le mieux à faire, c'est de tester.

Maintenant que vous avez une petite idée de comment fonctionne breeze-next, il ne vous reste plus qu'à l'essayer. Pour cloner le repository, je vous laisse suivre le [README.MD](https://github.com/laravel/breeze-next) présent sur la page Github, celui-ci est très bien détaillé et vous guides dans l'installation et la configuration du projet Next ET Laravel.

Je vous conseille de le tester en faisant un simple projet assez basique (un blog par exemple). Vous verrez ainsi la création de l'API avec Laravel, et l'intégration de celle-ci avec Next.
