import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "../components/layout";

export default function Custom404() {

  const { t } = useTranslation();

  return (
    <Layout>
      <div className="my-5 py-5 text-center">
        <h1 className="text-6xl">{t('404_title')}</h1>
        <p className="pb-10 text-xl">
          {t('404_text')}
        </p>
        <button className="btn btn-primary">
          {t('404_button')}
        </button>
      </div>
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
