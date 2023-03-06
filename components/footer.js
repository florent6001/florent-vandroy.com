import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary mt-10 py-5">
      <ul className="flex items-center justify-center gap-5">
        <li>
          <Link href="/mentions-legales" title="Voir les mentions légales">
            Mentions légales
          </Link>
        </li>
        <li>
          <Link
            href="/politique-de-confidentialite-des-donnees"
            title="Voir la politique de confidentialité des données"
          >
            Politique de confidentialité des données
          </Link>
        </li>
      </ul>
    </footer>
  );
}
