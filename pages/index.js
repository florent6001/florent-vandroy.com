import Post from "../components/post";
import Project from "../components/project";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Service from "../components/service";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRocket, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

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
                <p className="text-4xl">Hey! 🤙, je suis <span className="text-primary">Florent</span> Vandroy.</p>
                <h1 className="py-3">
                    Développeur web Laravel Freelance
                </h1>
                <p className="text-xl">
                    Passionn&eacute; de d&eacute;veloppement web depuis mon adolescence, je consacre mon temps &agrave; cr&eacute;er des sites internet sur mesure pour aider les entreprises &agrave; se d&eacute;velopper. 
                </p>
                <div className="pt-5">
                    <Link
                        href="/realisations"
                        title="Se rendre sur la page réalisations"
                        className="btn btn-primary"
                    >
                        D&eacute;couvrir mes réalisations
                    </Link>
                </div>
            </section>
            <section>
                <div className="w-full">
                    <h2 className="lg:pt-0 py-5">A propos de moi</h2>
                    <div className="w-full flex justify-center flex-col-reverse lg:flex-row">
                        <div className="lg:pr-10 w-full">
                            <p className="text-xl">
                                Passionn&eacute; de d&eacute;veloppement web depuis mon adolescence, et j&apos;ai eu la chance de concr&eacute;tiser ma passion en int&eacute;grant {" "}
                                <Link
                                    href="https://www.la-wab.fr/"
                                    rel="nofollow"
                                    title="Aller sur le site de la wab"
                                >
                                    La WAB
                                </Link>{" "}
                                pour une alternance de deux ans, qui m&apos;a permis d&apos;obtenir un {" "}
                                <Link
                                    href="https://www.francecompetences.fr/recherche/rncp/26602/"
                                    title="En savoir plus sur le titre professionnel"
                                    rel="nofollow"
                                >
                                    titre professionnel Designer Web.
                                </Link>
                                <br />
                                <br />
                                Pendant cette exp&eacute;rience enrichissante, j&apos;ai pu d&eacute;velopper de nombreux outils internes au seins du service pôle internet du{" "}
                                <Link
                                    href="https://www.credit-agricole.fr/ca-charente-perigord/particulier.html"
                                    title="Visiter le site du crédit agricole charente-perigord"
                                    rel="nofollow"
                                >
                                    Crédit Agricole Charente-Périgord
                                </Link>{" "}
                                Toujours avide de nouvelles d&eacute;couvertes, j&apos;&eacute;largis continuellement mes comp&eacute;tences en me familiarisant avec les derni&egrave;res technologies du web.
                                <br />
                                <br />
                                Voici une liste de technologies avec lesquelles j&apos;aime travaill&eacute; :
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
                                    href={"https://react.dev/"}
                                    target={"_blank"}
                                    title="Se rendre sur le site de React"
                                >
                                    <Image
                                        src={reactJS}
                                        width={"30"}
                                        height={"30"}
                                        alt="Logo de reactJS"
                                    />
                                </Link>
                                <Link
                                    href={"https://tailwindcss.com/"}
                                    target={"_blank"}
                                    title="Se rendre sur le site de TailwindCSS"
                                >
                                    <Image
                                        src={tailwindCSS}
                                        width={"30"}
                                        height={"30"}
                                        alt="Logo de TailwindCSS"
                                    />
                                </Link>
                                <Link
                                    href={"https://www.typescriptlang.org/"}
                                    target={"_blank"}
                                    title="Se rendre sur le site de Typescript"
                                >
                                    <Image
                                        src={typeScript}
                                        width={"30"}
                                        height={"30"}
                                        alt="Logo de Typescript"
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
                <div className="pb-10">
                    <h2 className="py-0">Mes services.</h2>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 items-start">
                    <Service
                        title="Développement de sites web sur mesure"
                        description="Créez un site web unique et personalisé pour votre entreprise. Je réalise votre vision en concevant un site attrayant, engageant et convivial qui correspond parfaitement à votre identité de marque."
                        icon={<FontAwesomeIcon icon={faCode} />}
                    />
                    <Service
                        title="Refonte de sites web existants"
                        description="Donnez une nouvelle vie à votre site web existant. Je modernise votre site en améliorant l'expérience utilisateur, les performances et le design. Une refonte complète qui donnera une apparence moderne et attrayante."
                        icon={<FontAwesomeIcon icon={faSyncAlt} />}
                    />
                    <Service
                        title="Optimisation des performances"
                        description="Optimisation des performances pour une navigation rapide et fluide. J'effectue l'optimisation des images, la mise en cache, la compression des fichiers et améliore la vitesse globale du site. Une performance optimale garantit une meilleur expérience utilisateur et favorise le référencement."
                        icon={<FontAwesomeIcon icon={faRocket} />}
                    />
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
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
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
                    Vous souhaitez collaborer sur un projet passionnant ? N&apos;h&eacute;sitez pas &agrave; me contacter d&egrave;s maintenant ! <br />
                    Vous pouvez remplir le formulaire de contact ci-dessous, ou me contacter directement par email <a href="mailto:florentvandroy@gmail.com">florentvandroy@gmail.com</a>.
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
            projects: projects.sort(sortByDate).slice(0, 4),
        },
    };
}
