import { createI18n } from 'vue-i18n';

import en from '@/i18n/lang/en';
import ru from '@/i18n/lang/ru';
import ky from '@/i18n/lang/ky';
import zhCn from '@/i18n/lang/zh-cn';
import { useI18nStoreHook } from '@/store/i18n';

const messages = {
  'zh-cn': {
    message: {
      ...zhCn,
    },
  },
  en: {
    message: {
      ...en,
    },
  },
  ru: {
    message: {
      ...ru,
    },
  },
  ky: {
    message: {
      ...ky,
    },
  },
};

const config = useI18nStoreHook();
const i18n = createI18n({
  legacy: false,
  locale: config.locale,
  fallbackLocale: config.locale,
  messages,
});

export default i18n;
