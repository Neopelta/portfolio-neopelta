import fs from 'fs';
import { getProjectsAsync } from '../src/lib/data/projects.js';

const site = 'https://www.neopelta.fr';
const supportedLocales = ['fr', 'en'];

async function generateSitemap() {
	const urls = [];

	urls.push(`<url><loc>${site}</loc></url>`);

	for (const lang of supportedLocales) {
		urls.push(`<url><loc>${site}/${lang}</loc></url>`);
		urls.push(`<url><loc>${site}/${lang}/projects</loc></url>`);
		urls.push(`<url><loc>${site}/${lang}/sitemap</loc></url>`);

		try {
			const projects = await getProjectsAsync(lang);
			projects.forEach((project) => {
				urls.push(`<url><loc>${site}/${lang}/projects/${project.id}</loc></url>`);
			});
		} catch (error) {
			console.error(`Error loading projects for ${lang}:`, error);
		}
	}

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
	let totalProjects = 0;

	for (const lang of supportedLocales) {
		try {
			const projects = await getProjectsAsync(lang);
			if (lang === 'fr') {
				totalProjects = projects.length;
			}
		} catch (error) {
			console.error(`Error when counting projects for ${lang}:`, error);
		}
	}

	const totalPages = 1 + supportedLocales.length * (3 + totalProjects);

	console.log(`✅ Sitemap generated: ${totalUrls} URLs`);
	console.log(`   - ${supportedLocales.length} languages`);
	console.log(`   - ${totalProjects} projects`);
	console.log(`   - ${totalPages} total pages`);
}

generateSitemap().catch((error) => {
	console.error('Error generating sitemap:', error);
	process.exit(1);
});
