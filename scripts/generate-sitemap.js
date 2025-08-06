import fs from 'fs';
import { getProjectsAsync } from '../src/lib/data/projects.js';

const site = 'https://www.neopelta.fr';
const supportedLocales = ['fr', 'en'];

async function generateSitemap() {
	console.log('🌍 Starting sitemap generation...');
	console.log(`📍 Site: ${site}`);
	console.log(`🗣️  Languages: ${supportedLocales.join(', ')}`);
	
	const urls = [];
	let totalProjects = 0;
	const projectsByLang = {};

	// Root redirect (will redirect to default language)
	urls.push(`<url><loc>${site}</loc></url>`);

	// Process each language
	for (const lang of supportedLocales) {
		console.log(`\n📝 Processing language: ${lang.toUpperCase()}`);
		
		// Main pages for each language
		urls.push(`<url><loc>${site}/${lang}</loc></url>`);
		urls.push(`<url><loc>${site}/${lang}/projects</loc></url>`);
		urls.push(`<url><loc>${site}/${lang}/sitemap</loc></url>`);

		// Load and process projects
		try {
			const projects = await getProjectsAsync(lang);
			projectsByLang[lang] = projects.length;
			
			// Add project URLs
			projects.forEach((project) => {
				urls.push(`<url><loc>${site}/${lang}/projects/${project.id}</loc></url>`);
			});
			
			console.log(`   ✅ ${projects.length} projects loaded`);
			
			// Use French count as reference for total
			if (lang === 'fr') {
				totalProjects = projects.length;
			}
			
		} catch (error) {
			console.error(`   ❌ Error loading projects for ${lang}:`, error.message);
			projectsByLang[lang] = 0;
		}
	}

	// Add sitemap.xml itself
	urls.push(`<url><loc>${site}/sitemap.xml</loc></url>`);

	// Generate XML content
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	${urls.join('\n\t')}
</urlset>`.trim();

	// Ensure static directory exists
	if (!fs.existsSync('./static')) {
		console.log('📁 Creating static directory...');
		fs.mkdirSync('./static', { recursive: true });
	}

	// Write sitemap file
	try {
		fs.writeFileSync('./static/sitemap.xml', xml, 'utf8');
		console.log('\n✅ Sitemap successfully generated!');
	} catch (error) {
		console.error('\n❌ Error writing sitemap file:', error.message);
		process.exit(1);
	}

	// Generate summary stats
	const totalUrls = urls.length;
	const totalPages = 1 + supportedLocales.length * 3; // root + (homepage + projects + sitemap) per lang
	const totalProjectPages = Object.values(projectsByLang).reduce((sum, count) => sum + count, 0);

	// Final report
	console.log('\n📊 GENERATION SUMMARY:');
	console.log('━'.repeat(35));
	console.log(`📄 Total URLs: ${totalUrls}`);
	console.log(`🌍 Languages: ${supportedLocales.length} (${supportedLocales.join(', ')})`);
	console.log(`🏠 Main pages: ${totalPages}`);
	console.log(`📁 Project pages: ${totalProjectPages}`);
	
	// Breakdown by language
	console.log('\n🔍 BREAKDOWN BY LANGUAGE:');
	supportedLocales.forEach(lang => {
		const count = projectsByLang[lang] || 0;
		const status = count > 0 ? '✅' : '⚠️ ';
		console.log(`   ${status} ${lang.toUpperCase()}: ${count} projects`);
	});
	
	console.log('\n🎯 Sitemap available at: /sitemap.xml');
	console.log('━'.repeat(35));
}

// Execute with error handling
generateSitemap().catch((error) => {
	console.error('\n💥 FATAL ERROR generating sitemap:', error.message);
	console.error('Stack:', error.stack);
	process.exit(1);
});