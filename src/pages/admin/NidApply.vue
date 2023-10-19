<template>
  <div class="nid-apply-container">
    <user-register @register="confirmRegister"></user-register>
    <!-- Result -->
    <div class="nid-apply-result" v-if="isApplied">
      <div class="nid-apply-result-header">{{ !!nid ? t('label.nidApplySuccess') : t('label.nidApplyFail') }}</div>
      <el-descriptions :column="2" size="default" border v-if="!!nid">
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <el-icon><IdCardV theme="filled" size="20" fill="#4a90e2" /></el-icon>
              <span style="margin-left: 15px; font-size: 16px;">{{ t('label.NID') }}</span>
            </div>
          </template>
          <span>{{ nid }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup>
import { IdCardV } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import UserRegister from '../../components/user/UserRegister.vue'
const { t } = useI18n()

// 注册成功
const nid = ref({})
const isApplied = ref(false)
function confirmRegister(data){
  isApplied.value = true
  nid.value = data
}

</script>

<style scoped>
.nid-apply-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nid-apply-result{
  width: 50%;
  margin-top: 20px;
  padding: 15px;
}
.nid-apply-result-header{
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
}
</style>