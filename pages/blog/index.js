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
            <h1 className="pb-3">Blog</h1>
            <p className="pb-10">Cette page regroupe la liste des articles que j&apos;ai écrits. Plongez dans l&apos;univers du d&eacute;veloppement web et d&eacute;couvrez des conseils, des astuces et des r&eacute;flexions sur des sujets vari&eacute;s. Que vous soyez d&eacute;veloppeur en herbe ou expert chevronn&eacute;, vous trouverez ici des ressources pour nourrir votre passion du web.</p>
            {posts.map((post) => {
                return (
                    <Post post={post} key={post.slug} />
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
        const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", { day: 'numeric', year: 'numeric', month: 'long' });

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
