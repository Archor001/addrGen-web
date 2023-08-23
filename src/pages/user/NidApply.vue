<template>
  <div class="nid-apply-container">
    <user-register @register="confirmRegister"></user-register>
    <!-- Result -->
    <div class="nid-apply-result" v-if="isApplied">
      <div class="nid-apply-result-header">{{ !!applyInfo ? t('label.nidApplySuccess') : t('label.nidApplyFail') }}</div>
      <el-descriptions :column="2" size="default" border v-if="!!applyInfo">
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <el-icon><User theme="filled" size="20" fill="#4a90e2" /></el-icon>
              <span style="margin-left: 15px; font-size: 16px;">{{ t('label.username') }}</span>
            </div>
          </template>
          <span>{{ applyInfo.username }}</span>
        </el-descriptions-item>
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <el-icon><User theme="outline" size="20" fill="#4a90e2"/></el-icon>
              <span style="margin-left: 15px; font-size: 16px;">{{ t('label.userID') }}</span>
            </div>
          </template>
          <span>{{ applyInfo.userID }}</span>
        </el-descriptions-item>
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <el-icon><Phone theme="filled" size="20" fill="#4a90e2" /></el-icon>
              <span style="margin-left: 15px; font-size: 16px;">{{ t('label.phoneNumber') }}</span>
            </div>
          </template>
          <span>{{ applyInfo.phoneNumber }}</span>
        </el-descriptions-item>
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <el-icon><IdCardV theme="filled" size="20" fill="#4a90e2" /></el-icon>
              <span style="margin-left: 15px; font-size: 16px;">{{ t('label.NID') }}</span>
            </div>
          </template>
          <span>{{ applyInfo.nid }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup>
import { User, Phone, IdCardV } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import UserRegister from '../../components/user/UserRegister.vue'
const { t } = useI18n()

// 注册成功
const applyInfo = ref({})
const isApplied = ref(false)
function confirmRegister(data){
  isApplied.value = true
  applyInfo.value = data
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