import Contact from "../components/contact";
import Layout from "../components/layout";

export default function contact() {
    return (
        <Layout
            pageTitle="Contact"
            pageDescription="Page permettant de retrouver mes différents moyens de contact (email, téléphone). Avec un formulaire de contact pour m'envoyer un message directement."
        >
            <h1>Me contacter</h1>
            <p>
                Vous souhaitez discuter de votre projet ou avez des questions à me poser ? N'hésitez pas à me cojntacter en utilisant le formulaire ci-dessous. Je serai ravi de vous répondre dans les plus brefs délais) et d'étudier votre projet avec attention.
            </p>
            <Contact />
            <p className="mt-5">
                Cliquez sur le bouton "Envoyer mon message" pour transmettre votre demande. Je m'engage à vous répondre dans les meilleurs délais. <br />
                Je suis impatient de découvrir votre projet et de collaborer avec vous pour le concrétiser.
            </p>

        </Layout>
    );
}
