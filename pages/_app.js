import '../styles/globals.css'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import * as gtag from "../lib/gtag"
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const navbar = document.getElementById("navbar")
    const handleRouteChange = (url) => {
      navbar.classList.remove('fixed')
      navbar.classList.add('hidden')
      if(document.cookie.indexOf('google_analytics') !== -1) {
        gtag.pageview(url)
      } else {
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
