import logo_white from "../public/images/logo_white.png";
import logo_black from "../public/images/logo_black.png";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { BiGridAlt, BiSolidMoon, BiSolidSun } from "react-icons/bi";

export default function Header() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const { t } = useTranslation();


  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme == "light") {
      return (
        <li
          className="cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <BiSolidMoon className="text-2xl" />
        </li>
      );
    } else {
      return (
        <li
          className="cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        >
          <BiSolidSun className="text-2xl" />
        </li>
      );
    }
  };

  const renderLogo = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme == "light") {
      return (
        <Image
          src={logo_black.src}
          width={40}
          height={40}
          alt={t('logo_alt')}
        />
      );
    } else {
      return (
        <Image
          src={logo_white.src}
          width={40}
          height={40}
          alt={t('logo_alt')}
        />
      );
    }
  };

  const toggleNavBar = () => {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("hidden")) {
      navbar.classList.add("block");
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.remove("block");
      navbar.classList.add("hidden");
    }
  };

  return (
    <header className="mx-auto px-10 py-8 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto">
        <div className="flex justify-between w-full lg:w-auto">
          <Link
            href={"/"}
            className="text-5xl mr-5"
            title={t('goto_page')}
          >
            {renderLogo()}
          </Link>
          <div
            className="lg:hidden cursor-pointer"
            onClick={toggleNavBar}
          >
            <BiGridAlt className="text-2xl" />
          </div>
        </div>
        <nav
          className="hidden lg:block w-full lg:w-auto"
          id="navbar"
        >
          <ul className="flex flex-col lg:flex-row pt-5 lg:pt-0">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/" title={t('goto_page')}>
                {t('navbar_home')}
              </Link>
            </li>
            <li className={router.pathname.includes("/blog") ? "active" : ""}>
              <Link href="/#blog" title={t('goto_page')}>
                {t('navbar_blog')}
              </Link>
            </li>
            <li
              className={
                router.pathname.includes("/realisations") ? "active" : ""
              }
            >
              <Link
                href="/#recent_projects"
                title={t('goto_page')}
              >
                {t('navbar_recent_projects')}
              </Link>
            </li>
            <li
              className={
                router.pathname.includes("/realisations") ? "active" : ""
              }
            >
              <Link
                href="/#projects"
                title={t('goto_page')}
              >
                {t('navbar_accomplishments')}
              </Link>
            </li>
            <li
              className={
                router.pathname.includes("/realisations") ? "active" : ""
              }
            >
              <Link
                href="/#skills"
                title={t('goto_page')}
              >
                {t('navbar_skills')}
              </Link>
            </li>
            <li
              className={router.pathname.includes("/contact") ? "active" : ""}
            >
              <Link href="/#contact" title={t('goto_page')}>
                {t('navbar_contact')}
              </Link>
            </li>
            {renderThemeChanger()}
          </ul>
        </nav>
      </div>
    </header>
  );
}
