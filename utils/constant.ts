export const WINDOW_INFO = uni.getWindowInfo();

export const DEVICE_INFO = uni.getDeviceInfo() as UniNamespace.GetDeviceInfoResult & { osName: "ios" | "android" | "windows" | "mac" | "linux" };

export const COLOR = {
  primary: "#347aff",
  bg: "#eceff7",
} as const;
