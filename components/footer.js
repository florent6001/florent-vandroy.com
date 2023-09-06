import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-10 py-5">
      <div className="flex justify-between flex-col-reverse lg:flex-row px-10 py-4 lg:px-20 gap-10 ">
        <ul className="flex lg:flex-row flex-col items-center justify-center gap-5">
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
        <ul className="flex lg:flex-row flex-col-reverseitems-center justify-center gap-5 text-xl">
          <li>
            <Link href="https://www.linkedin.com/in/florent-vandroy" title="Voir les mentions légales">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/florent6001" title="Voir les mentions légales">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/Florent_Vandroy" title="Voir les mentions légales">
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
