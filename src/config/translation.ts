import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from '@/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' },
  ru: { name: 'Русский' },
  fr: { name: 'Français' },
  it: { name: 'Italiano' },
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
