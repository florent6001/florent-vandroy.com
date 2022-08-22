import Post from "../components/post"
import Project from "../components/project"
import Contact from "../components/contact"
import Layout from "../components/layout"

import florent_vandroy from "../public/images/florent-vandroy.png"

import fs from 'fs'
import matter from 'gray-matter'
import Link from "next/link"
import Image from "next/image"

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
          Je suis <strong>développeur web</strong> à <strong>Bergerac</strong>. Je <strong>créer des sites internet</strong> pour les professionnels et les particuliers. 
          J&apos;utilise principalement <Link href="https://laravel.com/"><a rel="nofollow" title="Voir le site de Laravel"><strong>Laravel</strong></a></Link>, <Link href="https://fr.wordpress.org/"><a rel="nofollow" title="Voir le site de WordPress"><strong>WordPress</strong></a></Link> ainsi que <Link href="https://fr.reactjs.org/"><a rel="nofollow" title="Voir le site de React"><strong>React</strong></a></Link>. 
        </p>
        <div className="pt-10">
          <Link href="/contact" title="Se rendre sur la page contact"><a className="btn btn-primary">Me contacter</a></Link>
          <Link href="/realisations" title="Se rendre sur la page réalisations"><a className="btn btn-secondary">Voir mes réalisations</a></Link>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-2/3">
            <h2 className="lg:pt-0">A propos de moi</h2>
            <p className="text-xl">
              Passionnée par le développement et geek depuis mon adolescence, j'ai commencé par passer un <Link href="https://www.greta-npdc.fr/formation/bep-systemes-electroniques-numeriques/"><a rel="nofollow" title="Voir les détails du diplôme">BEP SEN (Système Électronique et Numérique)</a></Link> avant d'intégrer <Link href="https://www.la-wab.fr/"><a rel="nofollow" title="Aller sur le site de la wab">La WAB</a></Link> pour une initiation au métiers du web (graphismes, développement, marketing, ..) d'une durée de six mois. <br /><br />
              La formation étant très bénéfique pour moi, je suis resté à la WAB pour effectuer une alternance de deux ans et ainsi obtenir un <Link href="https://www.francecompetences.fr/recherche/rncp/26602/"><a title="En savoir plus sur le titre professionnel" rel="nofollow">titre professionnel WebDesigner</a></Link>.
              Pendant ses deux ans d'alternance, j'ai eu la chance de pouvoir travaillé au service pôle internet du <Link href="https://www.credit-agricole.fr/ca-charente-perigord/particulier.html"><a title="Visiter le site du crédit agricole charente-perigord" rel="nofollow">Crédit Agricole Charente-Périgord</a></Link>. <br /><br />
              Toujours aussi passionné qu'au début, je continue d'apprendre chaque jours de nouvelles technologies et propose mes services de développeur fullstack en tant que freelance.
            </p>
          </div>
          <div className="relative right-0 w-full lg:w-1/3 text-center">
            <Image src={florent_vandroy} objectPosition={'center'} />
          </div>
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
          <h2 className="py-0">Mes derniers projets.</h2>
          <Link href="/realisations">
            <a title="Se rendre sur la page des projets" className="text-right">
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
        <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">Mes derniers articles.</h2>
          <Link href="/blog" title="Se rendre sur la page du blog">
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
    const name = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", { day: 'numeric', year: 'numeric', month: 'long'});

    return {
      frontmatter,
      date,
      content,
      name
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