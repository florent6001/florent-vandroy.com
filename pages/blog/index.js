import fs from 'fs'
import matter from 'gray-matter';

import Post from '../../components/post'
import { sortByDate } from '../../utils/sortByDate';

export default function blog({ posts }) {
    return (
        <>
            <h1>Blog</h1>
            {posts.map((post) => {
                return (
                    <Post post={post}  key={post.slug} />
                )
            })}
        </>
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