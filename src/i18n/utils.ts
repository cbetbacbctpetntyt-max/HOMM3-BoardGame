import { ui, defaultLang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: UIKey): string {
    return ui[lang as keyof typeof ui]?.[key] || ui[defaultLang][key];
  };
}

export function getOtherLang(lang: string): string {
  return lang === 'ru' ? 'en' : 'ru';
}
