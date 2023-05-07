import Project from "../components/project";
import Layout from "../components/layout";
import { sortByDate } from "../utils/sortByDate";

import fs from "fs";
import matter from "gray-matter";

export default function realisations({ projects }) {
    return (
        <Layout
            pageTitle="Mes réalisations"
            pageDescription="Liste des sites sur lesquels j'ai travaillé. Visite et/ou code source à disposition."
        >
            <h1>Mes r&eacute;alisations</h1>
            <p className="pb-10">
                Bienvenue sur ma page de r&eacute;alisations ! Vous trouverez ici une s&eacute;lection de projets sur lesquels j&apos;ai travaill&eacute;. Chaque projet repr&eacute;sente une occasion de mettre en pratique mes comp&eacute;tences et ma passion pour le d&eacute;veloppement web. Pour chaque projet, vous avez l&apos;opportunitée de d&eacute;couvrir le site en direct et/ou de consulter le code source du projet.
                <br /><br />
                N&apos;h&eacute;sitez pas &agrave; explorer ces r&eacute;alisationstions pour vous faire une id&eacute;e de mon travail et de mon expertise. Je suis impatient de collaborer avec vous et de transformer votre vision en r&eacute;alit&eacute;.
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {projects.map((project, index) => {
                    return <Project project={project} key={index} />;
                })}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
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
            projects: projects.sort(sortByDate),
        },
    };
}
