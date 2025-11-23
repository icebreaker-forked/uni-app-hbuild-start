<!-- 包裹每个页面的组件，集成一些全局功能 -->

<script setup lang="ts">
import { router } from "@/router";

defineOptions({
  name: "Container",
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared",
  },
});

const props = withDefaults(
  defineProps<{
    /**
     * 是否需要登录
     */
    needAuth?: boolean;
    customClass?: string;
    footerClass?: string;
    title?: string;
    isTabbar?: boolean;
  }>(),
  {
    needAuth: true,
    title: "",
    isTabbar: false,
  },
);

const { osName } = useSystemOs();

const themeStore = useThemeStore();

const user = useUserStore();

const slots = useSlots();

const instance = getCurrentInstance();

const footerHeader = ref(0);

const contentTop = computed(() => {
  return slots.header ? getCustomNavHeight() : 0;
});

const contentBottom = computed(() => {
  return slots.footer ? footerHeader.value : 0;
});

onMounted(() => {
  // #ifdef APP
  if (router.isCustomTabbar && props.isTabbar) {
    uni.hideTabBar();
  }
  // #endif
  if (slots.footer) {
    getFooterHeight();
  }
});

onLoad(() => {
  if (props.needAuth && !user.token) {
    router.login({ reLaunch: true });
  }
});

onShow(() => {});

function getFooterHeight() {
  const query = uni.createSelectorQuery().in(instance?.proxy);
  query
    .select("#container_footer")
    .boundingClientRect((data: any) => {
      footerHeader.value = data?.height ?? 0;
    })
    .exec();
}

defineExpose({
  getFooterHeight,
});
</script>

<template>
  <wd-config-provider :theme="themeStore.theme" :theme-vars="themeStore.themeVars" :custom-class="cn(osName, themeStore.theme)">
    <view :class="cn('relative box-border min-h-screen  bg-background text-foreground')">
      <wd-navbar
        v-if="props.title"
        custom-class="relative " fixed
        safe-area-inset-top
        placeholder bordered
        :title="props.title"
      />
      <view :style="{ paddingBottom: `${contentBottom}px` }" :class="cn('relative', props.customClass)">
        <slot />
      </view>
      <view id="container_footer" :class="cn('fixed inset-x-0 z-300 box-border ', props.isTabbar ? 'bottom-15' : 'bottom-safe bottom-0 ', props.footerClass)">
        <slot name="footer" />
      </view>
      <QTabbar v-if="props.isTabbar" />
    </view>

    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<style lang="scss" scoped>
:deep(.wd-navbar__content){
  position: relative;
  z-index: 1;

}
</style>
