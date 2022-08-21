import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
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
    )
}