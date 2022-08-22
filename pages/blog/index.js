import fs from 'fs'
import matter from 'gray-matter';

import Layout from "../../components/layout"
import Post from '../../components/post'
import { sortByDate } from '../../utils/sortByDate';

export default function blog({ posts }) {
    return (
        <Layout
            pageTitle='Blog'
            pageDescription="Blog de florent-vandroy.fr, article parlant de développement web, partage et retour d'expérience sur les nouvelles technologies."
        >
            <h1>Blog</h1>
            <p className="pb-10">Cette page regroupe la liste des articles que j&apos;ai écris. Les articles parlent principalement de développement web.</p>
            {posts.map((post) => {
                return (
                    <Post post={post}  key={post.slug} />
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync('posts');

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
  
    return {
        props: {
          posts: posts.sort(sortByDate),
        },
    };
}