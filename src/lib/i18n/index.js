import { browser } from '$app/environment';
import { init, register, locale, waitLocale } from 'svelte-i18n';

export const defaultLocale = 'fr';
export const supportedLocales = ['fr', 'en'];

register('fr', () => import('./locales/ui-fr.json'));
register('en', () => import('./locales/ui-en.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale
});

export function getLanguagePreference() {
	if (!browser) return defaultLocale;
	
	try {
		const saved = localStorage.getItem('user-language');
		if (saved && supportedLocales.includes(saved)) {
			return saved;
		}
	} catch (error) {
		console.warn('Failed to read language preference from localStorage:', error);
	}
	
	return defaultLocale;
}

export function saveLanguagePreference(lang) {
	if (!browser) return;
	
	if (supportedLocales.includes(lang)) {
		try {
			localStorage.setItem('user-language', lang);
		} catch (error) {
			console.warn('Failed to save language preference to localStorage:', error);
		}
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