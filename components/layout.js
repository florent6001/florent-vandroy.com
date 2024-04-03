import AOS from 'aos';
import 'aos/dist/aos.css';

import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import background from "../public/images/background.png";

import favicon_32 from "../public/favicon/favicon-32x32.png";
import favicon_16 from "../public/favicon/favicon-16x16.png";
import apple_touch from "../public/favicon/apple-touch-icon.png";
import safari_pinned from "../public/favicon/safari-pinned-tab.svg";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Layout({
  children,
  pageTitle,
  pageDescription,
}) {

  const { t } = useTranslation();
  const router = useRouter();

  if (!pageTitle) {
    pageTitle = t('default_page_title')
  }

  if (!pageDescription) {
    pageDescription = t('default_page_description')
  }

  const completeTitle = `${pageTitle} - Florent Vandroy`;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false
    });
  }, []);

  return (
    <>
      <Head>
        <title>{completeTitle}</title>
        <meta name={"description"} content={pageDescription} />
        <meta
          property={"og:title"}
          content={`${pageTitle} - Florent Vandroy`}
        />
        <meta property={"og:description"} content={pageDescription} />
        <meta property={"og:site_name"} content={"Florent Vandroy"} />
        <meta property={"og:locale"} content={router.locale} />
        <meta
          property={"og:url"}
          content={`https://www.florent-vandroy.com${locationpath}`}
        />
        <meta property={"og:type"} content={"website"} />
        <meta
          property={"og:image"}
          content={`https://florent-vandroy.com${background.src}`}
        />
        <meta name={"twitter:card"} content={"summary"} />
        <meta name={"twitter:site"} content={"@Florent_Vandroy"} />
        <meta name={"twitter:creator"} content={"@Florent_Vandroy"} />
        <meta
          name={"twitter:title"}
          content={`${pageTitle} - Florent Vandroy`}
        />
        <meta name={"twitter:description"} content={pageDescription} />
        <meta
          name={"twitter:image"}
          content={`https://florent-vandroy.com${background.src}`}
        />
        <meta
          name={"twitter:image:alt"}
          content={t('background_image')}
        />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href={apple_touch.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon_32.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon_16.src} />
        <link rel="mask-icon" href={safari_pinned.src} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#926363" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-5 scroll-smooth">{children}</main>
      <Footer />
    </>
  );
}
