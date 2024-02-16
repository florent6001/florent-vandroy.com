import Post from "../components/post";
import Layout from "../components/layout";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";

import florent_vandroy from "../public/images/florent-vandroy.png";
import logo_le_wagon from "../public/images/logo_le_wagon.png";

import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { BiMouse } from 'react-icons/bi';
import { AiOutlineArrowDown, AiOutlineSend } from "react-icons/ai";

import { useTheme } from "next-themes";
import Skills from "../components/skills";
import Counter from "../components/counter";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from "next-i18next";
import { sortByDate } from "../utils/sortByDate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home({ posts, allProjects, latestProjects }) {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const { t } = useTranslation();

  return (
    <Layout>
      <section>
        <p className="text-xl overflow-x-hidden flex gap-4 items-center" >
          <Image src={logo_le_wagon} alt="Le Wagon Logo" className="rounded-xl w-full h-10 w-10" />
          Batch #1598 Online - {t('home_jumbotron_intro')}
        </p>
        <h1 className="text-5xl lg:text-8xl py-3 overflow-x-hidden" data-aos="fade-left" data-aos-delay="500">{t('home_jumbotron_title')}</h1>
        <h2 className="py-3 text-xl overflow-x-hidden" data-aos="fade-left" data-aos-delay="1000">
          {t('home_jumbotron_text')}
        </h2>
        <div className="pt-5">
          <Link
            href="/#contact"
            title={t('goto_page')}
            className="btn btn-primary btn-lg block"
          >
            {t('home_jumbotron_btn_label')} <AiOutlineSend className="inline" />
          </Link>
          <div className="relative h-[50px] w-full mx-auto">
            <Link href="#about" title="Scroll down" className="w-full dark:text-white text-black bounce block flex gap-3 items-center mt-5 text-xl hover:no-underline">
              <BiMouse />
              {t('home_scroll_down')}
              <AiOutlineArrowDown />
            </Link>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="w-full">
          <h2 className="lg:pt-0 pb-10">{t('home_about_me_title')}</h2>
          <div className="w-full flex justify-center gap-10 flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 text-center overflow-x-hidden" data-aos="fade-right">
              <Image src={florent_vandroy} alt={t('home_about_me_picture_alt')} className="rounded-xl w-full" />
            </div>
            <div className="lg:pr-10 w-full overflow-x-hidden" data-aos="fade-left">
              <p className="text-xl">
                {t('home_about_me_text')}
              </p>
              <Link href="/cv-florent-vandroy.pdf" className="btn btn-primary mt-5">{t('home_about_download_resume')}</Link>
              <div className="flex gap-5 justify-between mt-5">
                <Counter number="10" text={t('home_about_technologies_used')} />
                <Counter number="15" text={t('home_about_project_done')} />
                <Counter number="5" text={t('home_about_language_used')} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <h2 className="py-1">{t('home_skills_title')}</h2>
        <p className="text-sm">{t('home_skill_text')}</p>
        <Skills />
      </section>
      <section id="projects">
        <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">{t('home_achievements_tile')}</h2>
        </div>
        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true}
          infinite={false}
          swipeable={true}
          itemClass="mb-5"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {allProjects.map((project, index) => {
            return <Portfolio project={project} key={index} />;
          })}
        </Carousel>
      </section>
      <section id="blog">
        <div className="flex justify-between items-center pb-10">
          <h2 className="py-0">{t('home_all_my_posts')}</h2>
          <Link
            href="/blog"
            title={t('goto_page')}
            className="text-right"
          >
            {t('home_see_more_posts')}
          </Link>
        </div>
        {posts.map((post) => {
          return <Post post={post} key={post.slug} />;
        })}
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {

  let locales = ['fr', 'en'];
  const posts = [];

  if (locale != 'default') {
    locales = [locale]
  }


  for (const currentLocale of locales) {
    const files = fs.readdirSync(`posts/${currentLocale}`);

    const localePosts = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`posts/${currentLocale}/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);
      const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        year: "numeric",
        month: "long",
      });

      return {
        slug,
        frontmatter,
        date,
      };
    });

    posts.push(...localePosts);
  }

  const projectFiles = fs.readdirSync("projects");
  const projects = projectFiles.map((fileName) => {
    const name = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    const date = new Date(frontmatter.date).toLocaleDateString("fr-FR", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });

    return {
      frontmatter,
      date,
      content,
      name,
    };
  });

  projects.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB - dateA;
  });

  const allProjects = projects;

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 3),
      allProjects: allProjects,
      ...(await serverSideTranslations(locale)),
    },
  };
}
