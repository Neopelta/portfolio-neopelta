import { supportedLocales } from '$lib/i18n';

export function entries() {
	return supportedLocales.map(lang => ({ lang }));
}

export const prerender = true;
export const trailingSlash = 'never';