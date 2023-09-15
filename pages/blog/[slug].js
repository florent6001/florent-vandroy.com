import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout";
import "highlight.js/styles/github-dark.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function PostPage({ frontmatter, content, date }) {
  const md = require("markdown-it")().use(require("markdown-it-highlightjs"));
  const { t } = useTranslation();

  return (
    <Layout
      pageTitle={frontmatter.title}
      pageDescription={ content.slice((content.indexOf('Introduction') + 13), 200) + ' ...' }
    >
      <div itemScope itemType="https://schema.org/BlogPosting" className="py-5 my-5">
        <h1 className="text-center pb-4" itemProp="Headline">
          {frontmatter.title}
        </h1>
        <p className="text-center text-lg">
          {t('blog_published_date')} <span itemProp="dateCreated">{date}</span>.
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


export function getStaticPaths() {
  const locales = ["fr", "en"];
  const paths = [];

  locales.forEach((locale) => {
    const postsDirectory = path.join("posts", locale);

    const files = fs.readdirSync(postsDirectory);

    files.forEach((fileName) => {
      paths.push({
        params: {
          slug: fileName.replace(".md", ""),
        },
        locale: locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug }, locale }) {
  const fileName = fs.readFileSync(`posts/${locale}/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const date = new Date(frontmatter.date).toLocaleDateString(locale, {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  return {
    props: {
      frontmatter,
      content,
      date,
      ...(await serverSideTranslations(locale)),
    },
  };
}
