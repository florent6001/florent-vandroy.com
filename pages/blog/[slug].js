import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/layout";
import "highlight.js/styles/github-dark.css";

export default function PostPage({ frontmatter, content, date }) {
  const md = require("markdown-it")().use(require("markdown-it-highlightjs"));

  return (
    <Layout
      pageTitle={frontmatter.title}
      pageDescription={content.replace(/#/g, "").slice(0, 200)}
    >
      <div itemScope itemType="https://schema.org/BlogPosting">
        <h1 className="text-center pb-4" itemProp="Headline">
          {frontmatter.title}
        </h1>
        <p className="text-center text-lg">
          Mis en ligne le <span itemProp="dateCreated">{date}</span>.
        </p>
        <div
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: md.render(content) }}
          className="mt-10"
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  return {
    props: {
      frontmatter,
      content,
      date,
    },
  };
}
