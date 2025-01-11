<template>
	<view class="p-2.5 text-center text-sm text-borurio-info2">
		<view v-if="props.hasNextPage">{{ $t('message.All.Loading') }}</view>
		<view v-else>{{ $t('message.All.No_More') }}</view>
	</view>
</template>

<script lang="ts">
export default {
	name: 'LoadMoreText',
	options: {
		addGlobalClass: true,
		virtualHost: true,
		styleIsolation: 'shared',
	},
};
</script>

<script setup lang="ts">
const props = defineProps<{
	hasNextPage?: boolean;
}>();
</script>

<style scoped></style>
