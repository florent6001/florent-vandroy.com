import fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';

import Layout from "../../components/layout"

export default function PostPage({ frontmatter, content, date }) {
    return (
      <Layout pageTitle={frontmatter.title}
        pageDescription={content.replace(/#/g, '').slice(0, 200)}
        >
        <h1 className="text-center pb-4">{frontmatter.title}</h1>
        <p className="text-center text-lg">Mis en ligne le {date}.</p>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} className="mt-10" />
      </Layout>
    );
  }

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", { day: 'numeric', year: 'numeric', month: 'long'});
  
  return {
    props: {
      frontmatter,
      content,
      date
    },
  };
}