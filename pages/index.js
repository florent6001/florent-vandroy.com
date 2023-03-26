import Post from "../components/post";
import Project from "../components/project";
import Contact from "../components/contact";
import Layout from "../components/layout";

import florent_vandroy from "../public/images/florent-vandroy.png";
import laravel from "../public/icons/laravel.svg";
import reactJS from "../public/icons/reactJS.svg";
import tailwindCSS from "../public/icons/tailwindCSS.svg";
import typeScript from "../public/icons/typeScript.svg";

import nextJSBlack from "../public/icons/nextJSBlack.svg";
import nextJSWhite from "../public/icons/nextJSWhite.svg";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

import { sortByDate } from "../utils/sortByDate";
import { useTheme } from "next-themes";

export default function Home({ posts, projects }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  let nextJS = "test";

  if (currentTheme == "light") {
    nextJS = nextJSBlack;
  } else {
    nextJS = nextJSWhite;
  }

  return (
    <Layout>
      <section>
        <p className="text-3xl">Hey! 🤙</p>
        <h1 className="py-3">
          Je suis <span className="text-primary">Florent</span> Vandroy,
        </h1>
        <p className="text-xl">
          Développeur web full stack junior. Je me concentre actuellement sur le
          développement de mon activité freelance. Je suis disponible pour toute
          demande professionnel et prêt à entreprendre de nouveaux projets.
        </p>
        <div className="pt-5">
          <Link
            href="/realisations"
            title="Se rendre sur la page réalisations"
            className="btn btn-primary"
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>
      <section>
        <div className="w-full">
          <h2 className="lg:pt-0 py-5">A propos de moi</h2>
          <div className="w-full flex justify-center flex-col-reverse lg:flex-row">
            <div className="lg:pr-10 w-full">
              <p className="text-xl">
                Passionné par le développement web depuis mon adolescence,
                j&apos;ai intégré{" "}
                <Link
                  href="https://www.la-wab.fr/"
                  rel="nofollow"
                  title="Aller sur le site de la wab"
                >
                  La WAB
                </Link>{" "}
                pour effectuer une alternance de deux ans et ainsi obtenir un{" "}
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/26602/"
                  title="En savoir plus sur le titre professionnel"
                  rel="nofollow"
                >
                  titre professionnel Designer Web.
                </Link>
                <br />
                <br />
                Pendant cette d&apos;alternance, j&apos;ai eu la chance de
                travailler au service pôle internet du{" "}
                <Link
                  href="https://www.credit-agricole.fr/ca-charente-perigord/particulier.html"
                  title="Visiter le site du crédit agricole charente-perigord"
                  rel="nofollow"
                >
                  Crédit Agricole Charente-Périgord
                </Link>
                , au sein duquel j&apos;ai pu développer de nombreux outils en
                interne.
                <br />
                <br />
                Toujours aussi passionné, je continue chaque jour de développer
                de nouvelles compétences en découvrant de nouvelles
                technologies.
                <br />
                <br />
                Voici une liste de tehcnologies avec lesquelles j&apos;ai
                travaillé récemment :
              </p>
              <div className="flex gap-3 mt-5 text-4xl">
                <Link
                  href={"https://laravel.com"}
                  target={"_blank"}
                  title="Se rendre sur le site de Laravel"
                >
                  <Image
                    src={laravel}
                    width={"30"}
                    height={"30"}
                    alt="Logo de Laravel"
                  />
                </Link>
                <Link
                  href={"https://nextJS.org"}
                  target={"_blank"}
                  title="Se rendre sur le site de nextJS"
                >
                  <Image
                    src={nextJS}
                    width={"30"}
                    height={"30"}
                    alt="Logo de NextJS"
                  />
                </Link>
                <Link
                  href={"https://reactjs.org"}
                  target={"_blank"}
                  title="Se rendre sur le site de nextJS"
                >
                  <Image
                    src={reactJS}
                    width={"30"}
                    height={"30"}
                    alt="Logo de reactJS"
                  />
                </Link>
                <Link
                  href={"https://reactjs.org"}
                  target={"_blank"}
                  title="Se rendre sur le site de nextJS"
                >
                  <Image
                    src={tailwindCSS}
                    width={"30"}
                    height={"30"}
                    alt="Logo de reactJS"
                  />
                </Link>
                <Link
                  href={"https://reactjs.org"}
                  target={"_blank"}
                  title="Se rendre sur le site de nextJS"
                >
                  <Image
                    src={typeScript}
                    width={"30"}
                    height={"30"}
                    alt="Logo de reactJS"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-2/5 text-center">
              <Image src={florent_vandroy} alt="Photo de Florent Vandroy" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">Mes derniers projets.</h2>
          <Link
            href="/realisations"
            title="Se rendre sur la page des projets"
            className="text-right"
          >
            Voir tous les projets
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">Mes tous les articles.</h2>
          <Link
            href="/blog"
            title="Se rendre sur la page du blog"
            className="text-right"
          >
            Voir plus d&apos;articles
          </Link>
        </div>
        {posts.map((post) => {
          return <Post post={post} key={post.slug} />;
        })}
      </section>
      <section>
        <h2>Me contacter.</h2>
        <p>
          Actuellement, le développement web n&apos;étant pas ma seule activité.
          Il est plus facile pour moi de communiquer par email :
          florentvandroy@gmail.com. Vous pouvez également remplir le formulaire
          de contact ci-dessous.
        </p>
        <Contact />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  var files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });

    return {
      slug,
      frontmatter,
      date,
    };
  });

  var files = fs.readdirSync("projects");
  const projects = files.map((fileName) => {
    const name = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });

    return {
      frontmatter,
      date,
      content,
      name,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 3),
      projects: projects.sort(sortByDate).slice(0, 3),
    },
  };
}
