import Post from "../components/post"
import Project from "../components/project"
import Contact from "../components/contact"
import Layout from "../components/layout"

import fs from 'fs'
import matter from 'gray-matter'
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faChartLine, faMobileAlt, faMobile } from "@fortawesome/free-solid-svg-icons";
import { sortByDate } from "../utils/sortByDate";

export default function Home({ services, posts, projects }) {

  return (
    <Layout>
      <section>
        <p className="text-3xl">Hey, je suis Florent !</p>
        <h1>Développeur web full stack freelance <br />à Bergerac (Dordogne)</h1>
        <p className="text-2xl text-secondary leading-8">
          Je suis <strong>développeur web</strong> à <strong>Bergerac</strong>. J&apos;aime <strong>créer des sites internet</strong> et découvrir de nouvelles technologies. 
          J&apos;utilise principalement <Link href="https://laravel.com/"><a><strong>Laravel</strong></a></Link>, <Link href="https://fr.wordpress.org/"><a><strong>WordPress</strong></a></Link> ainsi que <Link href="https://fr.reactjs.org/"><a><strong>React</strong></a></Link>. 
          Ce site sert également à vous partagez mes retours d&apos;expérience sur mon <Link href="/blog"><a className="font-bold">blog</a></Link>.
        </p>
        <div className="pt-10">
          <Link href="/contact"><a className="btn btn-primary">Me contacter</a></Link>
          <Link href="/realisations"><a className="btn btn-secondary">Voir mes réalisations</a></Link>
        </div>
      </section>
      <section>
        <h2>Mes services.</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {services.map((service) => 
            <div className="service" key={service.title} itemScope itemType="https://schema.org/Service">
              <FontAwesomeIcon icon={service.icon} size="2x" aria-label="Illustration code" />
              <h3 itemProp="name">{service.title}</h3>
              <p itemProp="description">
                {service.content}
              </p>
            </div> 
          )}
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
    </Layout>
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

  const services = [
    {'icon': faMobileAlt, 'title': 'Responsive Design', 'content': 'Le site internet s\'adapte à tous les types d\'écran (mobile, tablette et ordinateur).'},
    {'icon': faChartLine, 'title': 'Référencement Naturel', 'content': 'Le site respecte les bonnes pratiques du web et est optimisé afin d\'améliorer le référencement naturel.'},
    {'icon': faCode, 'title': 'Création de site internet', 'content': 'Site internet développé avec Wordpress ou Laravel/React selon les besoins.'}
  ]
  return {
      props: {
        services,
        posts: posts.sort(sortByDate).slice(0, 3),
        projects : projects.sort(sortByDate).slice(0, 3),
      },
  };
}