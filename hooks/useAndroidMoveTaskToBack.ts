/**
 * 阻止退出应用，直接退回到后台
 */
export default function useAndroidMoveTaskToBack() {
  onBackPress(() => {
    if (DEVICE_INFO.osName === "android") {
      const main = plus.android.runtimeMainActivity() as any;
      plus.runtime.quit = function () {
        main?.moveTaskToBack(false);
      };
    }
  });
}
