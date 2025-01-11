import { useI18n } from 'vue-i18n';

import { get } from 'lodash-es';

export default function useDict(keys: string[]) {
	const { t, locale } = useI18n();
	const dict = ref<Record<string, IOption[]>>();

	onMounted(() => {
		getDict();
	});

	watch(locale, () => {
		getDict();
	});

	const getDictLabel = (key: string, value: string) => {
		const options = get(dict.value, key);
		if (options) {
			const option = options.find((item) => item.value === value);
			return option?.label ?? '';
		}
		return '';
	};

	const getDict = async () => {
		try {
			const res = await uni.$api.common.getDataDictByKeys(keys);
			const { data } = res;

			Object.keys(data).forEach((item) => {
				data[item] = data[item].map((it) => ({
					...it,
					label: it.englishValue ? t(it.englishValue) : it.label,
				}));
			});

			dict.value = data;
		} catch (error) {
			console.log(error);
		}
	};

	return { dict, getDictLabel };
}
