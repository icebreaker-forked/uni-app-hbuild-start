<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useI18nStoreHook } from '@/store/i18n';
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';

const { locale } = useI18n();
</script>
<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@import './styles/theme.css';

/* #ifdef H5 */
.uni-modal {
	border-radius: 10px;
}
.uni-modal__hd {
	text-align: start;
}
.uni-modal__ft:after,
.uni-modal__btn:after {
	border: none;
}
/* #endif */
</style>
