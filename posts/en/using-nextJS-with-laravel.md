---
date: "2022-07-06"
title: "Using NextJS with Laravel"
---

## Introduction

These days, development with a back-end API (such as [Laravel](https://laravel.com/), [Symfony](https://symfony.com/), or [ExpressJS](https://expressjs.com/)), and a separate front-end (with [NextJS](https://nextjs.org/), [NuxtJS](https://nuxtjs.org/), [Gatsby](https://www.gatsbyjs.com/), etc.) is becoming increasingly common. At first glance, the separation of the back-end and front-end may seem complex and daunting. Setting up a login or registration system can appear to be a real challenge, especially managing authentication tokens, member-exclusive access, and more.

Fortunately, Laravel released Laravel Breeze some time ago, providing a basic application to quickly start a project with authentication and password reset functionality.

## The Emergence of Breeze-Next

Although there are currently few videos available on the subject on YouTube, Laravel Breeze offers a starter with NextJS, which you can find on the GitHub repository: [laravel/breeze-next](https://github.com/laravel/breeze-next). This repository allows you to clone a NextJS application that incorporates the same features as Breeze for the Laravel version.

You will have a NextJS application using the Breeze template (with [TailwindCSS](https://tailwindcss.com/)) and offering the same features such as authentication and password reset.

## A Middleware for Users

Breeze-next allows you to restrict access to certain pages for both unidentified users and certain identified users. In the Hooks folder, you will find an "Auth" file that allows you to apply this middleware to your pages.

Here's an example:

```js
import { useAuth } from "@/hooks/auth";

const Login = () => {
  const router = useRouter();

  // This line indicates that the user should not be logged in to access this page; if they are logged in, they will be redirected to the dashboard.
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  return <GuestLayout>// My super client-side rendering</GuestLayout>;
};
```

## Using Layouts

The AppLayout (the name given by Breeze Next to authenticated users) automatically restricts access for non-authenticated users.

```js
const { user } = useAuth({ middleware: "auth" });
```

In this logic, you should use the GuestLayout for pages where the user doesn't need to be logged in and the AppLayout for pages requiring authentication (e.g., a dashboard).

## The Best Way to Understand Is to Try It Yourself

Now that you have an idea of how Breeze Next works, all that's left is to try it out. To clone the repository, I invite you to follow the Readme.MD available on the Breeze-Next GitHub page. It is very detailed and guides you step by step through the installation and configuration of the NextJS and Laravel project.

I recommend testing it by creating a simple project (such as a blog, for example). This way, you can explore the creation of the API with Laravel and its integration into NextJS.
