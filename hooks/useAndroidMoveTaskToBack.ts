/**
 * 组织退出应用，直接退回到后台
 */
export default function useAndroidMoveTaskToBack() {
	onBackPress(() => {
		uni.getSystemInfo({
			success(res) {
				if (res.osName == 'android') {
					let main = plus.android.runtimeMainActivity();
					plus.runtime.quit = function () {
						//@ts-ignore
						main?.moveTaskToBack(false);
					};
				}
			},
		});
	});
}
