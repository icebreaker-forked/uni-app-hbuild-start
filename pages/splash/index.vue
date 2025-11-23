<script setup lang="ts">
import { router } from "@/router";
import { useUserStore } from "@/store/user";

const user = useUserStore();

onLoad(() => {
  console.log(user.token);

  if (!user.token) {
    router.login({ reLaunch: true });
  }
  else {
    router.switchTab("pages/index/index");
  }
});
</script>

<template>
  <div />
</template>

<style scoped>

</style>
