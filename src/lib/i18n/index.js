import { browser } from '$app/environment';
import { init, register, locale, waitLocale } from 'svelte-i18n';

export const defaultLocale = 'fr';
export const supportedLocales = ['fr', 'en'];

register('fr', () => import('./locales/fr.json'));
register('en', () => import('./locales/en.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale
});

export function saveLanguagePreference(lang) {
	if (!browser) return;
	if (supportedLocales.includes(lang)) {
		localStorage.setItem('user-language', lang);
	}
}

export async function setupI18n(lang = defaultLocale) {
	if (!supportedLocales.includes(lang)) {
		lang = defaultLocale;
	}
	
	locale.set(lang);
	await waitLocale();
	return lang;
}