import { store } from '@/store';
import { defineStore } from 'pinia';

export const useI18nStore = defineStore({
	id: 'i18n',
	state: () => ({
		locale: (uni.getStorageSync('lang') || 'ru') as string,
		isAutoLang: (uni.getStorageSync('isAutoLang') || '1') as '0' | '1',
	}),
	actions: {
		setLang(locale?: string) {
			if (locale) {
				uni.setStorageSync('lang', locale);
			}
			this.locale = locale || localStorage.getItem('lang') || '';
		},
		setIsAutoLang(v: '0' | '1') {
			uni.setStorageSync('isAutoLang', v);
			this.isAutoLang = v;
		},
	},
});

export function useI18nStoreHook() {
	return useI18nStore(store);
}
