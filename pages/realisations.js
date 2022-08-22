import Project from "../components/project";
import Layout from "../components/layout";
import { sortByDate } from "../utils/sortByDate";

import fs from 'fs'
import matter from "gray-matter";

export default function realisations({ projects }) {
    return (
        <Layout 
            pageTitle="Mes réalisations"
            pageDescription="Liste des sites sur lesquels j'ai travaillé. Visite et/ou code source à disposition."
            >
            <h1>Mes réalisations</h1>
            <p className="pb-10">Cette page regroupe les projets sur lesquelles j'ai travaillé. Pour chaque projet, vous avez l'opportunité de vous rendre sur le site et/ou de voir le code source du projet.</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {projects.map((project, index) => {
                    return (
                    <Project project={project} key={index} />
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    var files = fs.readdirSync('projects');
    const projects = files.map((fileName) => {
      const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
      const { data: frontmatter, content } = matter(readFile);
      const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", { day: 'numeric', year: 'numeric', month: 'long'});
  
      return {
        frontmatter,
        date,
        content
      };
    });

    return {
        props: {
            projects: projects.sort(sortByDate)
        }
    }
  }