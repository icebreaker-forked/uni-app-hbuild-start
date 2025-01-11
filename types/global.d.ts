import i18n from '@/i18n';

// 声明全局命名空间
declare global {
	interface Uni {}
}

// 声明导出
export {};

declare module 'vue' {
	interface ComponentCustomProperties {
		$t: typeof i18n.global.t;
	}
}
