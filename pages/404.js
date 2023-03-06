import Layout from "../components/layout";

export default function custom404() {
  return (
    <Layout>
      <h1>Erreur 404</h1>
      <hr />
      <p className="py-10">
        La page à laquelle vous essayez d&apos;accéder n&apos;existe pas.
      </p>
      <button className="btn btn-primary">
        Se rendre sur la page d&apos;accueil
      </button>
    </Layout>
  );
}
