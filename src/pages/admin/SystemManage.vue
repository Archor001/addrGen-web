<template>
  <div class="system-manage-container">
    <el-collapse v-model="activeName" style="width: 100%;" class="system-manage">
      <el-collapse-item name="1" ref="addrISPRef" class="collapse-item">
        <template #title>
          <span class="collapse-title">{{ t('label.ISPPrefix') }}</span>
        </template>
        <isp-manage :isp="ISPPrefix" :length="ISPLength" :edit="!!ISPPrefix && ISPPrefix.length > 0"></isp-manage>
      </el-collapse-item>
      <el-collapse-item name="2" ref="syncAddrRef" class="collapse-item">
        <template #title>
          <span class="collapse-title">{{ t('label.syncAddressGap') }}</span>
        </template>
        <div style="display: flex; align-items: center;justify-content: center;">
          <span style="margin-right: 5px;">{{ t('hour') }}</span>
          <el-input-number :step="0.5" step-strictly :min="2" :max="24" v-model="syncAddressGap"></el-input-number>
          <el-button style="margin-left: 15px;" plain round :icon="Refresh" @click="handleSyncAddrGap()">{{ t('set') }}</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3" ref="regenAddrRef" class="collapse-item">
        <template #title>
          <span class="collapse-title">{{ t('label.regenAddress') }}</span>
        </template>
        <el-button style="margin-left: 15px;" plain round :icon="Refresh" @click="handleRegenAddress()">{{ t('button.regenerateAddress') }}</el-button>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { Refresh } from '@icon-park/vue-next';
import IspManage from '../../components/address/IspManage.vue'
import { onMounted, ref } from 'vue';
import { getConfig, setSyncAddrGap } from '../../api/system'
import { regenerateAddress } from '../../api/address';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const activeName = ref(1)

onMounted(flushConfig)

const addrISPRef = ref(null)
const ISPPrefix = ref('')
const ISPLength = ref(0)

const syncAddrRef = ref(null)
const syncAddressGap = ref(24.0)

const regenAddrRef = ref(null)

function flushConfig(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: addrISPRef.value.$el
  })
  getConfig().then(response => {
    ISPPrefix.value = response.data.isp
    ISPLength.value = response.data.length
    syncAddressGap.value = response.data.syncGap
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(() => {
    loadingInstance.close()
  })
}

// 设置同步时间
function handleSyncAddrGap(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: syncAddrRef.value.$el
  })
  setSyncAddrGap(syncAddressGap.value).then(response => {
    ElMessage.success(t('tip.setSuccess'))
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(()=>{
    loadingInstance.close()
  })
}

// 重新生成地址
function handleRegenAddress(){
  ElMessageBox.confirm(t('warning.changeISPTakesTime'),t('title.warning'),{
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel')
  }).then(() => {
    const loadingInstance = ElLoading.service({
      fullscreen: false,
      target: regenAddrRef.value.$el
    })
    regenerateAddress().then(response => {
      ElMessage.success(t('tip.regenSuccess'))
    }).catch(res => {
      ElMessage.error(res.data.msg)
    }).finally(() => {
      loadingInstance.close()
    })
  })
}

</script>

<style scoped>
.system-manage-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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