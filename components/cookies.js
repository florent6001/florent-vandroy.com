import Script from "next/script";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export default function Cookies() {
  const [acceptedCookies, setAcceptedCookies] = useState([]);
  const [displayCookies, setDisplayCookies] = useState();

  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 180 * 24 * 60 * 60 * 1000; // Six months
  now.setTime(expireTime);
  let cookieExpiration = now.toUTCString();
  const { t } = useTranslation();

  const cookies = [
    {
      name: "essentiel",
      required: true,
      title: t('cookie_essential_title'),
      text: t('cookie_essential_text'),
    },
    {
      name: "google_analytics",
      required: false,
      title: t('cookie_analytics_title'),
      text: t('cookie_analytics_text'),
    },
    {
      name: "hotjar",
      required: false,
      title: t('cookie_hotjar_title'),
      text: t('cookie_hotjar_text'),
    },
  ];

  const personalizeCookies = () => {
    var buttons = document.getElementById("cookies-buttons");
    var personalization = document.getElementById("personalize-cookies");

    if (buttons.classList.contains("hidden")) {
      buttons.classList.remove("hidden");
      buttons.classList.add("lg:flex");
      personalization.classList.add("hidden");
    } else {
      buttons.classList.add("hidden");
      buttons.classList.remove("lg:flex");
      personalization.classList.remove("hidden");
    }
  };

  const acceptCookies = () => {
    cookies.map((cookie) => {
      document.cookie = `${cookie.name}=true;expires=${cookieExpiration}`;
    });
    setDisplayCookies(false);
  };

  const denyCookies = () => {
    document.cookie = `essentiel=true;expires=${cookieExpiration}`;
    setDisplayCookies(false);
  };

  const acceptPersonalizedCookies = () => {
    cookies.map((cookie) => {
      let input = document.getElementById(cookie.name);
      if (input.checked) {
        document.cookie = `${cookie.name}=true;expires=${cookieExpiration}`;
      }
    });
    setDisplayCookies(false);
  };

  useEffect(() => {
    setDisplayCookies(
      document.cookie.indexOf("essentiel") == -1 ? true : false
    );
  }, []);

  useEffect(() => {
    let acceptedCookies = [];
    document.cookie
      .replace(/\s/g, "")
      .split(";")
      .map((element) => {
        let cookie_name = element.split("=")[0];
        let cookie_value = element.split("=")[1];

        if (cookie_value == "true") {
          acceptedCookies.push(cookie_name);
        }
      });
    setAcceptedCookies(acceptedCookies);
  }, [displayCookies]);

  return (
    <>
      {displayCookies && (
        <div className="fixed w-full h-auto bottom-0 bg-gray-300 dark:bg-gray-800 py-10 overflow-y-scroll max-h-screen">
          <div className="max-w-7xl mx-auto px-5">
            <p className="text-3xl text-primary py-5">
              { t('cookie_banner_title') }
            </p>
            <p>
              { t('cookie_banner_text') }
            </p>
            <div id="personalize-cookies" className="hidden">
              <div
                className="lg:grid grid-cols-2 gap-5 lg:pt-10"
              >
                {cookies.map((cookie) => (
                  <div key={cookie.name} className="mt-10 lg:mt-0">
                    <div className="flex">
                      {cookie.required ? (
                        <input
                          name={cookie.name}
                          id={cookie.name}
                          type="checkbox"
                          checked
                          disabled
                        />
                      ) : (
                        <input
                          name={cookie.name}
                          id={cookie.name}
                          type={"checkbox"}
                        />
                      )}
                      <p className="text-lg text-primary px-2">
                        {cookie.title}
                      </p>
                    </div>
                    <p>{cookie.text}</p>
                  </div>
                ))}
              </div>
              <div className="lg:flex justify-end">
                <button
                  className="btn btn-secondary w-fit h-fit mt-5"
                  onClick={personalizeCookies}
                >
                  { t('cookie_cancel_btn') }
                </button>
                <button
                  className="btn btn-primary w-fit h-fit mt-5"
                  onClick={acceptPersonalizedCookies}
                >
                  { t('cookie_accept_selected_cookies') }
                </button>
              </div>
            </div>
            <div
              className="lg:flex justify-between items-center pt-5"
              id="cookies-buttons"
            >
              <button onClick={personalizeCookies}>{ t('cookie_choose_btn') }</button>
              <div className="lg:grid grid-cols-2 gap-3 mt-5 lg:mt-0">
                <button
                  className="btn btn-secondary w-fit justify-self-end"
                  onClick={denyCookies}
                >
                  { t('cookie_decline_btn') }
                </button>
                <button
                  className="btn btn-primary w-fit"
                  onClick={acceptCookies}
                >
                  { t('cookie_accept_all') }
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {acceptedCookies.map((cookie_name) => (
        <div key={cookie_name}>
          {cookie_name == "google_analytics" && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-BRHFW3DMGM"`}
              />
              <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'G-BRHFW3DMGM', {
                                    page_path: window.location.pathname,
                                    });
                                `,
                }}
              />
            </>
          )}
          {cookie_name == "hotjar" && (
            <>
              <Script
                id="hotjar-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                                    (function(h,o,t,j,a,r){
                                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                        h._hjSettings={hjid:1085320,hjsv:6};
                                        a=o.getElementsByTagName('head')[0];
                                        r=o.createElement('script');r.async=1;
                                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                        a.appendChild(r);
                                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                                `,
                }}
              />
            </>
          )}
        </div>
      ))}
    </>
  );
}
