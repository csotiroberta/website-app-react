import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation resources
import hu from './locales/hu/translation.json';
import en from './locales/en/translation.json';

i18n
	.use(initReactI18next) // Connect i18next with React
	.init({
		resources: {
			hu: { translation: hu },
			en: { translation: en },
		},
		lng: 'hu', // Default language
		fallbackLng: 'hu', // Fallback language when translation is missing
		interpolation: {
			escapeValue: false, // React already escapes values
		},
	});

export default i18n;
