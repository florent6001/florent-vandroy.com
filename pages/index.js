import Post from "../components/post";
import Project from "../components/project";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Layout from "../components/layout";

import florent_vandroy from "../public/images/florent-vandroy.png";

import nextJSBlack from "../public/icons/nextJSBlack.svg";
import nextJSWhite from "../public/icons/nextJSWhite.svg";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { BiMouse } from 'react-icons/bi';
import { AiOutlineArrowDown, AiOutlineSend } from "react-icons/ai";

import { sortByDate } from "../utils/sortByDate";
import { useTheme } from "next-themes";
import Counter from "../components/counter";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skills from "../components/skills";

export default function Home({ posts, allProjects, latestProjects }) {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    let nextJS = "test";

    if (currentTheme == "light") {
        nextJS = nextJSBlack;
    } else {
        nextJS = nextJSWhite;
    }

    return (
        <Layout>
            <section>
                <p className="text-xl overflow-x-hidden" data-aos="fade-left">Je suis</p>
                <h1 className="text-5xl lg:text-8xl py-5 overflow-x-hidden" data-aos="fade-left" data-aos-delay="500">Florent Vandroy</h1>
                <h2 className="py-3 text-xl overflow-x-hidden" data-aos="fade-left" data-aos-delay="1000">
                    Développeur web FullStack
                </h2>
                <div className="pt-5">
                    <Link
                        href="/realisations"
                        title="Se rendre sur la page réalisations"
                        className="btn btn-primary btn-lg block"
                    >
                        Me contacter <AiOutlineSend className="inline" />
                    </Link>
                    <div className="relative h-[50px] w-full mx-auto">
                        <Link href="#about" title="Scroll down" className="w-full dark:text-white text-black bounce block flex gap-3 items-center mt-5 text-xl hover:no-underline">
                            <BiMouse />
                            Scroll down
                            <AiOutlineArrowDown />
                        </Link>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="w-full">
                    <h2 className="lg:pt-0 pb-10">A propos de moi</h2>
                    <div className="w-full flex justify-center gap-10 flex-col lg:flex-row">
                        <div className="w-full lg:w-2/5 text-center overflow-x-hidden" data-aos="fade-right">
                            <Image src={florent_vandroy} alt="Photo de Florent Vandroy" className="rounded-xl w-full" />
                        </div>
                        <div className="lg:pr-10 w-full overflow-x-hidden" data-aos="fade-left">
                            <p className="text-xl">
                            En tant que développeur passionné, je suis toujours à la recherche de défis stimulants pour mettre mes compétences techniques et ma créativité au service de projets innovants. Je reste à l&apos;affût des dernières tendances et techs du moment, convaincu que mon expertise pourrait être un autout au seins d&apos;une équipe dynamique et des projets ambitieux. 🚀
                            </p>
                           <Link href="/cv-florent-vandroy.pdf" class="btn btn-primary mt-5">Télécharger Mon C.V</Link>
                           <div className="flex gap-5 justify-between mt-5">
                                <Counter number="10" text="Technologies utilisées" />
                                <Counter number="15" text="Projets terminée" />
                                <Counter number="5" text="Language de programmation utilisés" />
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="recent_projects">
                <h2 className="py-0 pb-10">Mes projets récents</h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-start">
                    {latestProjects.map((project, index) => {
                        return <Project project={project} key={index} />;
                    })}
                </div>
            </section>
            <section id="projects">
                <div className="flex justify-between items-center pb-10">
                    <h2 className="py-0">Tous mes projets</h2>
                </div>
                <Carousel 
                    responsive={responsive}
                    showDots={true}
                    ssr={true}
                    infinite={false}
                    swipeable={true}
                    itemClass="mb-5"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {allProjects.map((project, index) => {
                        return <Portfolio project={project} key={index} />;
                    })} 
                </Carousel>
            </section>
            <section id="skills">
                <h2 className="py-1">Mes compétences</h2>
                <p class="text-sm">Outils avec lesquelles j&apos;ai déjà travaillé.</p>
                <Skills />
            </section>
            <section id="blog">
                <div className="flex justify-between items-center pb-10">
                    <h2 className="py-0">Tous mes articles</h2>
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
            <section id="contact">
                <Contact />
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync("posts");
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

    const projectFiles = fs.readdirSync("projects");
    const projects = projectFiles.map((fileName) => {
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

    projects.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date);
        const dateB = new Date(b.frontmatter.date);
        return dateB - dateA;
    });

    const allProjects = projects.slice(2);
    const latestProjects = projects.slice(0, 2);

    return {
        props: {
            posts: posts.sort(sortByDate).slice(0, 3),
            allProjects: allProjects,
            latestProjects: latestProjects,
        },
    };
}