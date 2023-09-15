import Layout from "../components/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Privacy_policy() {

  const { t } = useTranslation();

  return (
    <Layout
      pageTitle={t('privacy_policy_title')}
      pageDescription={t('privacy_policy_description')}
    >
      <div className="mt-5">
        <h1>{t('privacy_policy_title')}</h1>
        <p>{t('privacy_policy_intro_1')}</p>
        <p>{t('privacy_policy_intro_2')}</p>
        <p>{t('privacy_policy_intro_3')}</p>
        <h2>{t('privacy_policy_personal_info')}</h2>
        <p>{t('privacy_policy_auto_info')}</p>
        <h2>{t('privacy_policy_why_process_data')}</h2>
        <p>{t('privacy_policy_data_security')}</p>
        <p>{t('privacy_policy_data_collection')}</p>
        <h2>{t('privacy_policy_your_rights')}</h2>
        <ul className="list-disc pl-12">
          <li>{t('privacy_policy_right_to_be_informed')}</li>
          <li>{t('privacy_policy_right_of_access')}</li>
          <li>{t('privacy_policy_right_to_rectification')}</li>
          <li>{t('privacy_policy_right_to_erasure')}</li>
          <li>{t('privacy_policy_right_to_restrict_processing')}</li>
          <li>{t('privacy_policy_right_to_data_portability')}</li>
          <li>{t('privacy_policy_right_to_object')}</li>
          <li>{t('privacy_policy_rights_related_to_automated_decision')}</li>
        </ul>
        <p className="pt-10">{t('privacy_policy_data_processing_reasons')}</p>
        <h2>{t('privacy_policy_links_to_other_websites')}</h2>
        <p>{t('privacy_policy_other_websites_disclaimer')}</p>
        <h2>{t('privacy_policy_information_security')}</h2>
        <p>{t('privacy_policy_data_security_description')}</p>
        <h2>{t('privacy_policy_legal_disclosure')}</h2>
        <p>{t('privacy_policy_legal_disclosure_description')}</p>
        <h2>{t('privacy_policy_contact_form')}</h2>
        <p>{t('privacy_policy_contact_form_info')} <a href="https://getform.io/legal/privacy-policy">https://getform.io/legal/privacy-policy</a></p>
        <h2>{t('privacy_policy_comments')}</h2>
        <p>{t('privacy_policy_comments_info')}</p>
        <h2>{t('privacy_policy_contact_information')}</h2>
        <p>{t('privacy_policy_contact_info')}</p>
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
