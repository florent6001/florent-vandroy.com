import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Project({ video, locale }) {

  const { t } = useTranslation();
  const router = useRouter();
  const descriptionKey = `description_${locale}`;

  return (
    <div
      className="w-full video h-full"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <div data-aos="zoom-in" className="flex flex-col justify-between border-gray-600 dark:border-whit h-full rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-700 p-2">
        <iframe src={"https://www.youtube.com/embed/" + video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}
