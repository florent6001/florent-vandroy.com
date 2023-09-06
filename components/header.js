import logo_white from "../public/images/logo_white.png";
import logo_black from "../public/images/logo_black.png";

import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiGridAlt, BiMoon, BiNavigation, BiSolidMoon, BiSolidNavigation, BiSolidSun, BiSun } from "react-icons/bi";

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
                    <BiSolidMoon className="text-2xl    " />
                </li>
            );
        } else {
            return (
                <li
                    onClick={() => {
                        setTheme("light");
                    }}
                >
                    <BiSolidSun className="text-2xl " />
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
                        title="Se rendre sur la page d'accueil"
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
                            <Link href="/" title="Se rendre sur la page d'accueil">
                                Accueil
                            </Link>
                        </li>
                        <li className={router.pathname.includes("/blog") ? "active" : ""}>
                            <Link href="#blog" title="Se rendre sur le blog">
                                Blog
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname.includes("/realisations") ? "active" : ""
                            }
                        >
                            <Link
                                href="#recent_projects"
                                title="Se rendre sur la page réalisations"
                            >
                                Projets récents
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname.includes("/realisations") ? "active" : ""
                            }
                        >
                            <Link
                                href="#projects"
                                title="Se rendre sur la page réalisations"
                            >
                                Toutes mes réalisations
                            </Link>
                        </li>
                        <li
                            className={router.pathname.includes("/contact") ? "active" : ""}
                        >
                            <Link href="#contact" title="Se rendre sur la page contact">
                                Contact
                            </Link>
                        </li>
                        {renderThemeChanger()}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
