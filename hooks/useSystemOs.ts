export default function useSystemOs() {
	const osName = ref<'ios' | 'android' | 'windows' | 'mac' | 'linux'>();

	const isIos = computed(() => osName.value === 'ios');
	const isAndroid = computed(() => osName.value === 'android');

	onLoad(() => {
		uni.getSystemInfo({
			success(res) {
				osName.value = res.osName as any;
			},
		});
	});

	return { osName, isAndroid, isIos };
}
