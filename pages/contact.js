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
        Vous pouvez me contacter en remplissant le formulaire de contact
        ci-dessous. Je me ferais une joie de vous répondre dans les plus brefs
        délais pour étudier votre projets.
      </p>
      <Contact />
    </Layout>
  );
}
