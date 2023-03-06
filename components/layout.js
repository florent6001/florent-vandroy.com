import background from "../public/images/background.png"
import Header from "../components/header"
import Footer from '../components/footer'
import Head from "next/head"
import Cookies from "./cookies"

export default function Layout({children,
    pageTitle = "Développeur Web Fullstack à Bergerac",
    pageDescription = "Florent Vandroy, développeur fullstack à Bergerac (Dordogne). Création de site internet avec WordPress ou bien Laravel et React (selon les besoins)"
}) {

    return (
        <>
            <Head>
                <title>{pageTitle} - Florent Vandroy</title>
                <meta name={"description"} content={pageDescription}/>
                <meta property={"og:title"} content={`${pageTitle} - Florent Vandroy`}/>
                <meta property={"og:description"} content={pageDescription} />
                <meta property={"og:site_name"} content={"Blog de Florent Vandroy"}/>
                <meta property={"og:locale"} content={"fr_FR"}/>
                <meta property={"og:url"} content={`https://www.florent-vandroy.fr$locationpath`}/>
                <meta property={"og:type"} content={"website"} />
                <meta property={"og:image"} content={`https://florent-vandroy.fr${background.src}`} />
                <meta name={"twitter:card"} content={"summary"}/>
                <meta name={"twitter:site"} content={"@Florent_Vandroy"}/>
                <meta name={"twitter:creator"} content={"@Florent_Vandroy"}/>
                <meta name={"twitter:title"} content={`${pageTitle} - Florent Vandroy`}/>
                <meta name={"twitter:description"} content={pageDescription}/>
                <meta name={"twitter:image"} content={`https://florent-vandroy.fr${background.src}`} />
                <meta name={"twitter:image:alt"} content={'Image de fond du site florent-vandroy.fr/'} />
            </Head>
            <Header />
            <main className="max-w-4xl mx-auto px-5">
                {children}
            </main>
            <Footer />
            <Cookies />
        </>
    )
}
