import { supportedLocales, setupI18n } from '$lib/i18n';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { lang } = params;
	
	if (!supportedLocales.includes(lang)) {
		throw error(404, 'Language not supported');
	}
	
	await setupI18n(lang);
	
	return { lang };
}

export function _entries() {
	return supportedLocales.map(lang => ({ lang }));
}

export const prerender = true;
export const trailingSlash = 'never';