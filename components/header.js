import logo_white from "../public/images/logo_white.png";
import logo_black from "../public/images/logo_black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faClose,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme == "light") {
            return (
                <li
                    onClick={() => {
                        setTheme("dark");
                    }}
                >
                    <FontAwesomeIcon
                        icon={faMoon}
                        color="#000"
                        fontSize={"1.3rem"}
                        className="hover:cursor-pointer"
                    />
                </li>
            );
        } else {
            return (
                <li
                    onClick={() => {
                        setTheme("light");
                    }}
                >
                    <FontAwesomeIcon
                        icon={faSun}
                        color="#ffae42"
                        fontSize={"1.3rem"}
                        className="hover:cursor-pointer"
                    />
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
                    alt={"Logo de Florent Vandroy"}
                />
            );
        } else {
            return (
                <Image
                    src={logo_white.src}
                    width={40}
                    height={40}
                    alt={"Logo de Florent Vandroy"}
                />
            );
        }
    };

    const toggleNavBar = () => {
        const navbar = document.getElementById("navbar");
        if (navbar.classList.contains("hidden")) {
            navbar.classList.add("fixed");
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.remove("fixed");
            navbar.classList.add("hidden");
        }
    };

    return (
        <header className="max-w-5xl mx-auto px-10">
            <div className="flex justify-between items-center mx-auto min-h-[100px]">
                <Link
                    href={"/"}
                    className="relative text-5xl mr-5"
                    title="Se rendre sur la page d'accueil"
                >
                    {renderLogo()}
                </Link>
                <div
                    className="float-right lg:hidden cursor-pointer"
                    onClick={toggleNavBar}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        size="2x"
                        aria-label="Ouvrir le menu"
                    />
                </div>
                <nav
                    className="lg:relative lg:w-full lg:bg-transparent overflow-y-auto hidden lg:block top-0 right-0 w-2/3 h-full bg-gray-200 dark:bg-gray-800 lg:dark:bg-inherit"
                    id="navbar"
                >
                    <div
                        className="float-right pt-6 pr-6 cursor-pointer lg:hidden"
                        onClick={toggleNavBar}
                    >
                        <FontAwesomeIcon
                            icon={faClose}
                            size="2x"
                            aria-label="Fermer le menu"
                        />
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-between">
                        <ul className="w-full flex flex-col lg:flex-row items-center pt-5 lg:pt-0">
                            <li className={router.pathname == "/" ? "active" : ""}>
                                <Link href="/" title="Se rendre sur la page d'accueil">
                                    Accueil
                                </Link>
                            </li>
                            <li className={router.pathname.includes("/blog") ? "active" : ""}>
                                <Link href="/blog" title="Se rendre sur le blog">
                                    Blog
                                </Link>
                            </li>
                            <li
                                className={
                                    router.pathname.includes("/realisations") ? "active" : ""
                                }
                            >
                                <Link
                                    href="/realisations"
                                    title="Se rendre sur la page réalisations"
                                >
                                    Réalisations
                                </Link>
                            </li>
                            <li
                                className={router.pathname.includes("/contact") ? "active" : ""}
                            >
                                <Link href="/contact" title="Se rendre sur la page contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex justify-center lg:justify-end w-full">
                            {renderThemeChanger()}
                            <li>
                                <Link
                                    href="https://twitter.com/Florent_Vandroy"
                                    target={"_blank"}
                                    rel={"nofollow"}
                                    title="Se rendre sur ma page Twitter"
                                >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        color="#1DA1F2"
                                        fontSize={"1.3rem"}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://fr.linkedin.com/in/florent-vandroy"
                                    target={"_blank"}
                                    rel={"nofollow"}
                                    title="Se rendre sur ma page Linkedin"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedinIn}
                                        color="#0e76a8"
                                        fontSize={"1.3rem"}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/florent6001/"
                                    target={"_blank"}
                                    rel={"nofollow"}
                                    title="Se rendre sur ma page Github"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        color="171515"
                                        fontSize={"1.3rem"}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
