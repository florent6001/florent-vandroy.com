import Layout from "../components/layout"

export default function custom404() {
    return (
        <Layout>
            <h1>Erreur 404</h1>
            <hr />
            <p className="py-10">
                La page a laquelle vous essayez d'accéder n'existe pas.
            </p>
            <button className="text-sm bg-primary px-5 py-3 hover:no-underline text-black uppercase font-bold rounded inline-block mr-5 hover:bg-green-300">Se rendre sur la page d'accueil</button>
        </Layout>
    )
}