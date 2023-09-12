import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from './resources';
import 'intl-pluralrules';

i18n.use(initReactI18next).init({
    compabilityJSON: 'v3',
    resources: {
        ...Object.entries(resources).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: {
                    translation: value
                },
            }),
            {},
        ),
    },
    lng: 'en',
})

export default i18n;