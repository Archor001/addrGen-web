<template>
  <base-container>
    <template #center>
      <base-nav-item name="AddressApply">{{t('title.applyAddress')}}</base-nav-item>
      <base-nav-item name="NidApply">{{ t('title.applyNID') }}</base-nav-item>
    </template>
    <router-view></router-view>
  </base-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import BaseContainer from '../components/common/BaseContainer.vue'
import BaseNavItem from '../components/common/BaseNavItem.vue'
const { t } = useI18n()
</script>