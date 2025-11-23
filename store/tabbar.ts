import { defineStore } from "pinia";
import { ref } from "vue";
import { router } from "@/router";

const iconPath = {
  "pages/index/index": "home",
  "pages/my/index": "user",
};

const useTabbarStore = defineStore("tabbar", () => {
  const activeTabbar = ref(router.pageConfig.home);

  const tabbarList = ref(router.tabs.map(item => ({
    ...item,
    iconPath: item.iconPath ? `/${item.iconPath!}` : iconPath[item.pagePath as keyof typeof iconPath],
    selectedIconPath: item.selectedIconPath ? `/${item.selectedIconPath!}` : iconPath[item.pagePath as keyof typeof iconPath],
    value: 0,

  })));

  return {
    activeTabbar,
    tabbarList,
  };
});

export { useTabbarStore };
