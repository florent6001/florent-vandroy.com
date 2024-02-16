import "../styles/globals.css";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleRouteChange = (url) => {
      navbar.classList.remove("fixed");
      navbar.classList.add("hidden");
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
