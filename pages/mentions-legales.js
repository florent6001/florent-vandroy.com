import Layout from "../components/layout";

export default function mentions_legales() {
    return (
        <Layout
            pageTitle="Mentions légales"
            pageDescription="Mentions légales du site www.florent-vandroy.fr/"
        >
            <h1 className="text-primary">Mentions légales</h1>
            <ul className="list-disc">
                <li>Raison sociale : Florent VANDROY</li>
                <li>Forme Juridique : Auto-Entrepreneur</li>
                <li>Numéro de SIREN : 850 476 367</li>
                <li>Numéro de SIRET : 850 476 367 00014</li>
                <li>Adresse : 16 rond-point du hameau des chênes – 24100 CREYSSE</li>
                <li>Adresse e-mail : florentvandroy@gmail.com</li>
                <li>Numéro de téléphone : 0603008201</li>
                <li>Responsable de la publication : VANDROY Florent</li>
                <li>Hébergeur : Netlify – 610 22nd Street, Suite 315 CA 94107 San Francisco +1 844-899-7312</li>
            </ul>
        </Layout>
    )
}