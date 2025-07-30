import { supportedLocales, setupI18n, defaultLocale } from '$lib/i18n';
import { redirect } from '@sveltejs/kit';

export async function load({ params, url }) {
	const { lang } = params;
	
	if (!supportedLocales.includes(lang)) {
		const correctPath = url.pathname.replace(`/${lang}`, `/${defaultLocale}`);
		throw redirect(302, correctPath);
	}
	
	await setupI18n(lang);
	
	return { lang };
}

export function _entries() {
	return supportedLocales.map(lang => ({ lang }));
}

export const prerender = true;
export const trailingSlash = 'never';