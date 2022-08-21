import Head from "next/head"
import { useCallback, useEffect, useState } from "react"
import Script from "next/script"

export default function Cookies() {
    const [acceptedCookies, setAcceptedCookies] = useState([])
    const [displayCookies, setDisplayCookies] = useState()

    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 180 * 24 * 60 * 60 * 1000; // Six months
    now.setTime(expireTime);
    let cookieExpiration = now.toUTCString()

    const cookies = [
        {"name": "essentiel", required: true, "title": "Essentiel", "text": "Les cookies essentiels sont nécessaires au bon fonctionnement du site. Le site ne peut pas fonctionner correctement sans eux."},
        {"name": "google_analytics", required: false, "title": "Google Analytics", "text": "Google Analytics est un outil statistique de Google permettant de mesurer l'audience du site internet."},
        {"name": "hotjar", required: false, "title": "Hotjar", "text": "Hotjar est un outil marketing qui permet d'analyser le comportement des visiteurs du site web grâce à un ensemble de fonctionnalités avancées."},
    ]
    
    const personalizeCookies = () => {
        var buttons = document.getElementById('cookies-buttons')
        var personalization = document.getElementById('personalize-cookies')

        if(buttons.classList.contains('hidden')) {
            buttons.classList.remove('hidden')
            buttons.classList.add('lg:flex')
            personalization.classList.add('hidden')
        } else {
            buttons.classList.add('hidden')
            buttons.classList.remove('lg:flex')
            personalization.classList.remove('hidden')            
        }
    }

    const acceptCookies = () => {
        cookies.map((cookie) => {
            document.cookie = `${cookie.name}=true;expires=${cookieExpiration}`
        })
        setDisplayCookies(false)
    }

    const denyCookies = () => {
        document.cookie = `essentiel=true;expires=${cookieExpiration}`
        setDisplayCookies(false)
    }

    const acceptPersonalizedCookies = () => {
        cookies.map((cookie) => {
            let input = document.getElementById(cookie.name)
            if(input.checked) {
                document.cookie = `${cookie.name}=true;expires=${cookieExpiration}`
            }
        })
        setDisplayCookies(false)
    }

    useEffect(() => {
        setDisplayCookies(document.cookie.indexOf('essentiel') == -1 ? true : false)
    }, [])

    useEffect(() => {
        let acceptedCookies = []
        document.cookie.replace(/\s/g, '').split(';').map((element) => {
            let cookie_name = element.split('=')[0]
            let cookie_value = element.split('=')[1]

            if(cookie_value == 'true') {
                acceptedCookies.push(cookie_name)
            }
        })
        setAcceptedCookies(acceptedCookies)
        
    }, [displayCookies])

    return (
        <>
            {displayCookies &&
                <div className="fixed w-full h-auto bottom-0 bg-gray-800 py-10 overflow-y-scroll max-h-screen">
                    <div className="max-w-6xl mx-auto px-5">
                        <p className="text-3xl text-primary py-5">Ce site internet utilise des cookies.</p>
                        <p>
                            Nous utilisons les cookies pour améliorer le fonctionnement du site, mais également pour voir comment vous interagissez avec celui-ci. Nous utiliserons les cookies uniquement si vous nous le permettez en cliquant sur &ldquo;Accepter les cookies&ldquo;. Vous pouvez également choisir quel cookie vous souhaitez autoriser.
                        </p>
                        <div id="personalize-cookies" className="hidden">
                            <div className="lg:grid grid-cols-2 gap-5 lg:pt-10
                            -10">
                                {cookies.map((cookie) => 
                                    <div key={cookie.name} className="mt-10 lg:mt-0">
                                        <div className="flex">
                                            {cookie.required ? 
                                                <input name={cookie.name} id={cookie.name} type="checkbox" checked disabled />
                                            : 
                                                <input name={cookie.name} id={cookie.name} type={"checkbox"} />
                                            }
                                            <p className="text-lg text-primary px-2">{cookie.title}</p>
                                        </div>
                                        <p>{cookie.text}</p>
                                    </div>
                                )}
                            </div>
                            <div className="lg:flex justify-end">
                                <button className="btn btn-secondary w-fit h-fit mt-5" onClick={personalizeCookies}>Annuler</button>
                                <button className="btn btn-primary w-fit h-fit mt-5" onClick={acceptPersonalizedCookies}>Accepter les cookies selectionnés</button>
                            </div>
                        </div>
                        <div className="lg:flex justify-between items-center pt-5" id="cookies-buttons">
                            <button onClick={personalizeCookies}>Choisir mes cookies</button>
                            <div className="lg:grid grid-cols-2 mt-5 lg:mt-0">
                                <button className="btn btn-secondary w-fit justify-self-end" onClick={denyCookies}>Refuser</button>
                                <button className="btn btn-primary w-fit" onClick={acceptCookies}>Accepter les cookies</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {acceptedCookies.map((cookie_name) => 
                <div key={cookie_name}>
                    {cookie_name == "google_analytics" &&
                        <>
                            <Script
                                strategy="afterInteractive"
                                src={`https://www.googletagmanager.com/gtag/js?id=UA-123751778-1"`}
                            />
                            <Script
                                id="gtag-init"
                                strategy="afterInteractive"
                                dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'UA-123751778-1', {
                                    page_path: window.location.pathname,
                                    });
                                `,
                                }}
                            />
                        </>
                    }
                    {cookie_name == "hotjar" &&
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
                    }
                </div>
            )}
        </>
    )
}