import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Project({ project }) {

  const { t } = useTranslation();
  const router = useRouter();
  const descriptionKey = `description_${router.locale}`;

  return (
    <div
      className="w-full project h-full"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div data-aos="zoom-in" className="flex justify-between flex-col p-5 h-full border border-gray-600 dark:border-white rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-700">
        <div className="w-full">
          <h3 className="font-normal py-0" itemProp="name">
            {project.frontmatter.title}
          </h3>
          <div className="flex lg:flex-row gap-2 my-4">
            {project.frontmatter.demo && (
              <Link
                title={t('portfolio_demo_title')}
                href={project.frontmatter.demo}
                target={"_blank"}
                className="btn btn-primary"
                itemProp="url"
              >
                {t('portfolio_demo')}
              </Link>
            )}
            {project.frontmatter.source && (
              <Link
                title={t('portfolio_source_code_title')}
                href={project.frontmatter.source}
                target={"_blank"}
                className="btn btn-primary"
              >
                {t('portfolio_source_code')}
              </Link>
            )}
          </div>
          <div itemProp="description">
            {project.frontmatter[descriptionKey]}
          </div>
        </div>
      </div>
    </div>
  );
}
