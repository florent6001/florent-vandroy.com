import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-800 mt-10 py-5">
      <div className="flex justify-between flex-col-reverse lg:flex-row px-10 py-4 lg:px-20 gap-10 ">
        <ul className="flex lg:flex-row flex-col items-center justify-center gap-5">
          <li>
            <Link href="/legal-notice" title={t('goto')}>
              {t('legal_notice_title')}
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              title={t('goto')}
            >
              {t('privacy_policy_title')}
            </Link>
          </li>
        </ul>
        <ul className="flex lg:flex-row flex-col-reverseitems-center justify-center gap-5 text-xl">
          <li>
            <Link href="https://www.linkedin.com/in/florent-vandroy" title={t('goto_page')} target="_blank">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/florent6001" title={t('goto_page')} target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/Florent_Vandroy" title={t('goto_page')} target="_blank">
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
