<template>
  <el-config-provider :locale="elLocale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { computed,ref,onMounted,watch } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

// 语种列表
import zhCn from 'element-plus/dist/locale/zh-cn'
import enUS from "element-plus/dist/locale/en";

// 切换语言
let elLocale = ref(zhCn)
const { locale } = useI18n()
function changeLocale(v = 'zh-CN') {
  locale.value = v
  switch (v) {
    case "zh-CN":
      elLocale.value = zhCn
      break
    case "en":
      elLocale.value = enUS
      break
    default:
      elLocale.value = zhCn
      locale.value = "zh-CN"
      return
  }
}
let store = useStore()
onMounted(()=>{
  changeLocale(store.state.locale)
})
watch(()=>store.state.locale, (val, old) => {
  changeLocale(store.state.locale)
})

// 是否已登录
const isLogin = computed(() => {
  // TODO 登录验证
  return true;
});
</script>
