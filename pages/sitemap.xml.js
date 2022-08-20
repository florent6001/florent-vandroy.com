import fs from 'fs'

const base_url = 'https://florent-vandroy.fr/'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${`${base_url}`}</loc>
        </url>
        <url>
            <loc>${`${base_url}mentions-legales`}</loc>
        </url>
        <url>
            <loc>${`${base_url}politique-de-confidentialite-des-donnees`}</loc>
        </url>
        <url>
            <loc>${`${base_url}realisations`}</loc>
        </url>
        <url>
            <loc>${`${base_url}blog`}</loc>
        </url>
        ${posts
        .map((post) => {
            return `
        <url>
            <loc>${`${base_url}blog/${post}`}</loc>
        </url>
        `;
        })
        .join('')}
    </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {

    const sitemap = []

    const posts = fs.readdirSync('posts').map((fileName) => {
        sitemap.push(fileName.replace('.md', ''));
    });

    const result = generateSiteMap(sitemap);
    res.setHeader('Content-Type', 'text/xml');
    res.write(result);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
