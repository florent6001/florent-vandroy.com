import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return
  }

  if (!request.nextUrl.hostname.startsWith('www.')) {
    // If not, construct the URL with "www" and redirect
    const wwwUrl = new URL(request.url);
    wwwUrl.hostname = `www.${wwwUrl.hostname}`;
    return NextResponse.redirect(wwwUrl.toString(), { status: 301 });
  }

  if (request.nextUrl.locale === 'default') {
    const locale = getPreferredLocale(request.headers.get('user-agent'));
    // Redirect the user to the URL with the detected locale
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url)
    );
  }
}

function getPreferredLocale(userAgent) {
  // Extract the language code from the user agent or any other logic
  // Here, we'll use navigator.language to get the language code from the browser
  let languageCode = 'en'; // Default to English
  if (typeof window !== 'undefined' && window.navigator && window.navigator.language) {
    // Extract the language code from the browser
    languageCode = window.navigator.language.split('-')[0];
  }
  // Return the detected language code
  return languageCode;
}
