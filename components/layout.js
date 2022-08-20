import logo from "../public/images/logo.png"
import background from "../public/images/background.png"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"

export default function Layout({children, 
    pageTitle = "Développeur Web Fullstack à Bergerac",
    pageDescription = "Florent Vandroy, développeur fullstack à Bergerac (Dordogne). Création de site internet avec WordPress ou bien Laravel et React (selon les besoins)"
}) {

    const router = useRouter()

    useEffect(() => {
        const navbar = document.getElementById("navbar")
        const handleRouteChange = (url) => {
            navbar.classList.remove('fixed')
            navbar.classList.add('hidden')
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    })

    const toggleNavBar = () => {
        const navbar = document.getElementById("navbar")
        if(navbar.classList.contains('hidden')) {
            navbar.classList.add('fixed')
            navbar.classList.remove('hidden')
        } else {
            navbar.classList.remove('fixed')
            navbar.classList.add('hidden')
        }
    }

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
            <header className="border-b border-primary px-5">
                <div className="max-w-6xl flex justify-between items-center mx-auto min-h-[100px]">
                    <Link href={"/"}>
                        <a className="relative h-[40px] w-[50px]">
                            <Image src={logo} layout={'fill'} objectFit={'contain'} className="object-left" alt="Logo de Florent Vandroy" />
                        </a>
                    </Link>
                    <div className="float-right lg:hidden cursor-pointer" onClick={toggleNavBar}>
                        <FontAwesomeIcon icon={faBars} size="2x" aria-label="Ouvrir le menu" />
                    </div>
                    <nav className="lg:relative lg:w-full lg:bg-transparent overflow-y-auto hidden lg:block top-0 right-0 w-2/3 h-full bg-gray-800" id="navbar">
                        <div className="float-right pt-6 pr-6 cursor-pointer lg:hidden" onClick={toggleNavBar}>
                            <FontAwesomeIcon icon={faClose} size="2x" aria-label="Fermer le menu" />
                        </div>
                        <ul className="w-full flex flex-col lg:flex-row justify-end items-center pt-5 lg:pt-0">
                            <li className={router.pathname == '/' ? 'border-primary' : ''}><Link href="/"><a>Accueil</a></Link></li>
                            <li className={router.pathname.includes('/blog') ? 'border-primary' : ''}><Link href="/blog"><a>Blog</a></Link></li>
                            <li className={router.pathname.includes('/realisations') ? 'border-primary' : ''}><Link href="/realisations"><a>Réalisations</a></Link></li>
                            <li className={router.pathname.includes('/contact') ? 'border-primary' : ''}><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="max-w-6xl mx-auto px-5">
                {children}
            </main>
            <footer className="border-t border-primary my-20 px-5">
            <div className="flex justify-between flex-col lg:flex-row max-w-6xl mx-auto">
                <div>
                    <h4 className="text-primary">A propos</h4>
                    <p>Je suis développeur web PHP Fullstack freelance sur le secteur de Bergerac, en Dordogne (24). Passionnée depuis petit par l&apos;informatique, je crée maintenant des sites web depuis environs 5 ans.</p>
                </div>
                <div className="lg:mx-5">
                    <h4 className="text-primary">Documents légaux</h4>
                    <ul>
                        <li><Link href="/mentions-legales"><a>Mentions légales</a></Link></li>
                        <li><Link href="/politique-de-confidentialite-des-donnees"><a>Politique de confidentialité des données</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-primary">Réseaux sociaux</h4>
                    <Link href="https://www.facebook.com/FlorentVandroy/"><a target={"_blank"} className="hover:text-primary transition-colors duration-700"><FontAwesomeIcon icon={faFacebookSquare} size="2x" aria-label="Se rendre sur la page Facebook" /></a></Link>
                    <Link href="https://fr.linkedin.com/in/florent-vandroy"><a target={"_blank"} className="hover:text-primary transition-colors duration-700 mx-5"><FontAwesomeIcon icon={faLinkedin} size="2x" aria-label="Se rendre sur la page Linkedin" /></a></Link>
                    <Link href="https://github.com/florent6001"><a target={"_blank"} className="hover:text-primary transition-colors duration-700"><FontAwesomeIcon icon={faGithubSquare} size="2x" aria-label="Se rendre sur lap age Github" /></a></Link>
                </div>
            </div>
        </footer>
        </>
    )
}