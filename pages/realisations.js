import Project from "../components/project";
import { sortByDate } from "../utils/sortByDate";

import fs from 'fs'
import matter from "gray-matter";

export default function realisations({ projects }) {
    return (
        <>
            <h1>Mes réalisations</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {projects.map((project, index) => {
                    return (
                    <Project project={project} key={index} />
                    )
                })}
            </div>
        </>
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