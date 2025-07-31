export async function getProjectDetailsAsync(projectId, lang = 'fr') {
	try {
		let projectDetails;

		if (lang === 'en') {
			const module = await import('../i18n/locales/projectDetails-en.js');
			projectDetails = module.projectDetails;
		} else {
			const module = await import('../i18n/locales/projectDetails-fr.js');
			projectDetails = module.projectDetails;
		}

		return projectDetails[projectId] || null;
	} catch (error) {
		console.error(`Error loading project details for ${lang}:`, error);

		if (lang !== 'fr') {
			try {
				const fallbackModule = await import('../i18n/locales/projectDetails-fr.js');
				return fallbackModule.projectDetails[projectId] || null;
			} catch (fallbackError) {
				console.error('Fallback to French also failed:', fallbackError);
			}
		}

		return null;
	}
}
