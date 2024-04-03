import Layout from "../components/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Legal_notice() {

  const { t } = useTranslation();

  return (
    <Layout
      pageTitle={t('legal_notice_title')}
      pageDescription={t('legal_notice_description')}
    >
      <h1>{t('legal_notice_title')}</h1>
      <ul className="list-disc pl-[15px]">
        <li>{t('legal_notice_company_name')}</li>
        <li>{t('legal_notice_address')} 16 rond-point du hameau des chênes - 24100 CREYSSE</li>
        <li>{t('legal_notice_email_address')} <a href="mailto:florentvandroy@gmail.com">florentvandroy@gmail.com</a></li>
        <li>{t('legal_notice_phone_number')} <a href="tel:+33603008201">06 03 00 82 01</a></li>
        <li>{t('legal_notice_publication_manager')} VANDROY Florent</li>
        <li>
          {t('legal_notice_host_provider')} Netlify - 610 22nd Street, Suite 315 CA 94107 San
          Francisco +1 844-899-7312
        </li>
      </ul>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
