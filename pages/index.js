import Post from "../components/post"
import Project from "../components/project"
import Contact from "../components/contact"

import fs from 'fs'
import matter from 'gray-matter'
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faChartLine, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { sortByDate } from "../utils/sortByDate";

export default function Home({ posts, projects }) {

  return (
    <>
      <section>
        <p className="text-3xl">Hey, je suis Florent !</p>
        <h1>Développeur web full stack freelance <br />à Bergerac (Dordogne)</h1>
        <p className="text-2xl text-secondary leading-8">
          Je suis <strong>développeur web</strong> à <strong>Bergerac</strong>. J&apos;aime <strong>créer des sites internet</strong> et découvrir de nouvelles technologies. 
          J&apos;utilise principalement <Link href="https://laravel.com/"><a><strong>Laravel</strong></a></Link>, <Link href="https://fr.wordpress.org/"><a><strong>WordPress</strong></a></Link> ainsi que <Link href="https://fr.reactjs.org/"><a><strong>React</strong></a></Link>. 
          Ce site sert également à vous partagez mes retours d&apos;expérience sur mon <Link href="/blog"><a className="font-bold">blog</a></Link>.
        </p>
        <div className="pt-10">
          <Link href="/contact"><a className="text-sm bg-primary px-5 py-3 hover:no-underline text-black uppercase font-bold rounded inline-block mr-5">Me contacter</a></Link>
          <Link href="/realisations"><a className="text-sm bg-secondary px-5 py-3 hover:no-underline text-white uppercase font-bold rounded inline-block">Voir mes réalisations</a></Link>
        </div>
      </section>
      <section>
        <h2>Mes services.</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="service">
            <FontAwesomeIcon icon={faCode} size="2x" aria-label="Illustration code" />
            <h3>Création de site internet</h3>
            <p>
              Site internet développé avec Wordpress ou Laravel selon les besoins.
            </p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faChartLine} size="2x" aria-label="Illustration référencement naturel" />
            <h3>Référencement naturel</h3>
            <p>
              Le site respecte les bonnes pratiques du web et est optimisé afin d&apos;améliorer le référencement naturel.
            </p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faMobileAlt} size="2x" aria-label="Illustration responsive design" />
            <h3>Responsive design</h3>
            <p>
              Le site internet s&apos;adapte à tous les types d&apos;écran (mobile, tablette et ordinateur).
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">Mes derniers articles.</h2>
          <Link href="/blog">
            <a className="text-right">
              Voir plus d&apos;articles
            </a>
          </Link>
        </div>
        {posts.map((post) => {
          return (
            <Post post={post} key={post.slug} />
          )
        })}
      </section>
      <section>
      <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">Mes derniers projets.</h2>
          <Link href="/realisations">
            <a className="text-right">
              Voir plus de projets
            </a>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {projects.map((project, index) => {
            return (
              <Project project={project} key={index} />
            )
          })}
        </div>
      </section>
      <section>
        <h2>Me contacter.</h2>
        <p>
          Actuellement, le développement web n&apos;étant pas ma seule activité. Il est plus facile pour moi de communiquer par email : florentvandroy@gmail.com. Vous pouvez également remplir le formulaire de contact ci-dessous.
        </p>
        <Contact />
      </section>
    </>
  )
}

export async function getStaticProps(){
  var files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", { day: 'numeric', year: 'numeric', month: 'long'});

      return {
        slug,
        frontmatter,
        date
      };
  });

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
        posts: posts.sort(sortByDate).slice(0, 3),
        projects : projects.sort(sortByDate).slice(0, 3)
      },
  };
}