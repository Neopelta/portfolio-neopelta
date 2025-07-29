import fs from 'fs';
import { projects } from '../src/lib/data/projects.js';

const site = 'https://www.neopelta.fr';
const supportedLocales = ['fr', 'en'];
const urls = [];

urls.push(`<url><loc>${site}</loc></url>`);

supportedLocales.forEach(lang => {
	urls.push(`<url><loc>${site}/${lang}</loc></url>`);
	urls.push(`<url><loc>${site}/${lang}/projects</loc></url>`);
	urls.push(`<url><loc>${site}/${lang}/sitemap</loc></url>`);
	
	projects.forEach(project => {
		urls.push(`<url><loc>${site}/${lang}/projects/${project.id}</loc></url>`);
	});
});

urls.push(`<url><loc>${site}/sitemap.xml</loc></url>`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	${urls.join('\n\t')}
</urlset>`.trim();

if (!fs.existsSync('./static')) {
	fs.mkdirSync('./static', { recursive: true });
}

fs.writeFileSync('./static/sitemap.xml', xml, 'utf8');

const totalUrls = urls.length;
const projectsCount = projects.length;
const totalPages = 1 + (supportedLocales.length * (3 + projectsCount)); // racine + (accueil + projets + sitemap + projets individuels) par langue

console.log(`✅ Sitemap generated: ${totalUrls} URLs`);
console.log(`   - ${supportedLocales.length} languages`);
console.log(`   - ${projectsCount} projects`);
console.log(`   - ${totalPages} total pages`);