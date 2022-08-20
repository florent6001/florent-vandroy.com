import Contact from "../components/contact"
import Layout from "../components/layout"

export default function contact() {
    return (
        <Layout
            pageTitle="Contact"
            pageDescription="Page permettant de retrouver mes différents moyens de contact (email, téléphone). Avec un formulaire de contact pour m'envoyer un message directement."
        >
            <h1>Me contacter</h1>
            <Contact />
        </Layout>
    )
}