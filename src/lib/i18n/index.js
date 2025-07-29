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

export function detectUserLanguage() {
	if (!browser) {
		console.log('Not in browser, returning default:', defaultLocale);
		return defaultLocale;
	}
	
	const savedLang = localStorage.getItem('user-language');
	console.log('Saved language in localStorage:', savedLang);
	
	if (savedLang && supportedLocales.includes(savedLang)) {
		console.log('Using saved language:', savedLang);
		return savedLang;
	}
	
	const browserLang = navigator.language.split('-')[0];
	console.log('Browser language:', navigator.language, '-> extracted:', browserLang);
	
	if (supportedLocales.includes(browserLang)) {
		console.log('Using browser language:', browserLang);
		return browserLang;
	}
	
	console.log('Using default language:', defaultLocale);
	return defaultLocale;
}

export function saveLanguagePreference(lang) {
	if (!browser) return;
	if (supportedLocales.includes(lang)) {
		console.log('Saving language preference:', lang);
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