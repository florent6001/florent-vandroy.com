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
                Vous souhaitez discuter de votre projet ou avez des questions &agrave; me poser ? N&apos;h&eacute;sitez pas &agrave; me cojntacter en utilisant le formulaire ci-dessous. Je serai ravi de vous r&eacute;pondre dans les plus brefs d&eacute;lais) et d&apos;&eacute;tudier votre projet avec attention.
            </p>
            <Contact />
            <p className="mt-5">
                Cliquez sur le bouton &lsquo;Envoyer mon message&lsquo; pour transmettre votre demande. Je m&apos;engage &agrave; vous r&eacute;pondre dans les meilleurs d&eacute;lais. <br />
                Je suis impatient de d&eacute;couvrir votre projet et de collaborer avec vous pour le concr&eacute;tiser.
            </p>

        </Layout>
    );
}
