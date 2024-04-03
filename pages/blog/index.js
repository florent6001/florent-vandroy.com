import fs from 'fs'
import matter from 'gray-matter';

import Post from '../../components/post'
import Layout from "../../components/layout"
import { sortByDate } from '../../utils/sortByDate';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Blog({ posts }) {

  const { t } = useTranslation();

  return (
    <Layout
      pageTitle='Blog'
      pageDescription={t('blog_description')}
    >
      <h1 className="pb-3">{t('blog_title')}</h1>
      <p className="pb-10">{t('blog_text')}</p>
      {posts.map((post) => {
        return (
          <Post post={post} key={post.slug} />
        )
      })}
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const currentLocale = locale == 'default' ? 'en' : 'fr'
  const files = fs.readdirSync(`posts/${currentLocale}`);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${currentLocale}/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    const date = new Date(frontmatter.date).toLocaleDateString(currentLocale, {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
    });

    return {
      slug,
      frontmatter,
      date,
      locale: currentLocale, // Add the locale information
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
      locale: currentLocale,
      ...await serverSideTranslations(locale),
    },
  };
}
