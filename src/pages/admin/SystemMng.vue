<template>
  <div class="system-manage-container">
    <el-collapse v-model="activeName" accordion style="width: 100%;" class="system-manage">
      <el-collapse-item name="1" ref="addressTimeoutRef">
        <template #title>
          <span class="collapse-title">{{ t('label.addressTimeout') }}</span>
        </template>
        <el-input-number v-model="config.addressTimeout" :step="0.5" step-strictly size="small">
        </el-input-number>
        <span style="margin-left: 5px;">{{ t('label.hour') }}</span>
      </el-collapse-item>
    </el-collapse>
    <el-row style="margin-top:32px;" justify="center">
      <el-button type="primary" :loading="waitConfirm" @click="confirmConfig">{{ t('confirm') }}</el-button>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getConfig, updateConfig } from '../../api/system'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const activeName = ref(1)
const addressTimeoutRef = ref(null)
const config = ref({
  addressTimeout: 0
})

onMounted(flushConfig)

// 获取系统配置
function flushConfig(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.system-manage'
  })
  getConfig().then(response => {
    config.value = response.data.config
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(() => {
    loadingInstance.close()
  })
}

// 提交系统配置
const waitConfirm = ref(false)
function confirmConfig(){
  if(!!config.value){
    waitConfirm.value = true
    updateConfig(config.value).then(response => {
      ElMessage.success(t('tip.updateSuccess'))
    }).catch(res => {
      ElMessage.error(res.data.msg)
    }).finally(() => {
      waitConfirm.value = false
    })
  }
}

</script>

<style scoped>
.system-manage-container{
  padding: 16px 32px;
  position: relative;
  height: 100%;
  background-size: 100% 100%;
}
.system-manage :deep(.el-collapse-item__content){
  margin-top: 15px;
  width: 100%;
}
.collapse-title{
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #343a40;
  font-family:'Times New Roman', Times, serif, Georgia,"Microsoft YaHei",sans-serif;
  text-align: left;
}
</style>