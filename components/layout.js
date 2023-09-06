import background from "../public/images/background.png";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import Cookies from "./cookies";

import apple_touch from "../public/favicon/apple-touch-icon.png";
import favicon_32 from "../public/favicon/favicon-32x32.png";
import favicon_16 from "../public/favicon/favicon-16x16.png";
import safari_pinned from "../public/favicon/safari-pinned-tab.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Layout({
    children,
    pageTitle = "Développeur Web Laravel à Bergerac (Dordogne)",
    pageDescription = "Florent Vandroy, développeur Laravel à Bergerac (Dordogne) proche de Bordeaux. Création de site internet avec WordPress ou bien Laravel et React (selon les besoins)",
}) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            mirror: false
        });
    }, []); 

    const completeTitle = `${pageTitle} - Florent Vandroy`;
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
                <meta property={"og:site_name"} content={"Blog de Florent Vandroy"} />
                <meta property={"og:locale"} content={"fr_FR"} />
                <meta
                    property={"og:url"}
                    content={`https://www.florent-vandroy.fr$locationpath`}
                />
                <meta property={"og:type"} content={"website"} />
                <meta
                    property={"og:image"}
                    content={`https://florent-vandroy.fr${background.src}`}
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
                    content={`https://florent-vandroy.fr${background.src}`}
                />
                <meta
                    name={"twitter:image:alt"}
                    content={"Image de fond du site florent-vandroy.fr/"}
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
            <Cookies />
        </>
    );
}
