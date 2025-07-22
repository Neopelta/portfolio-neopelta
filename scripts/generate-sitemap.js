import fs from 'fs';
import { projects } from '../src/lib/data/projects.js';

const site = 'https://www.neopelta.fr';

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	<url><loc>${site}</loc></url>
	<url><loc>${site}/projects</loc></url>
	<url><loc>${site}/sitemap</loc></url>
	${projects.map(project => `<url><loc>${site}/projects/${project.id}</loc></url>`).join('')}
</urlset>`.trim();

if (!fs.existsSync('./static')) {
	fs.mkdirSync('./static', { recursive: true });
}

fs.writeFileSync('./static/sitemap.xml', xml, 'utf8');
console.log(`✅ Sitemap generated: ${projects.length + 3} URLs`);