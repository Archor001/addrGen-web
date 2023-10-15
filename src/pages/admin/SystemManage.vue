<template>
  <div class="system-manage-container">
    <el-collapse v-model="activeName" accordion style="width: 100%;" class="system-manage">
      <el-collapse-item name="1" ref="addrISPRef">
        <template #title>
          <span class="collapse-title">{{ t('label.ISPPrefix') }}</span>
        </template>
        <isp-manage :isp="ISPPrefix" :length="ISPLength" :edit="!!ISPPrefix && ISPPrefix.length > 0"></isp-manage>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import IspManage from '../../components/address/IspManage.vue'
import { onMounted, ref } from 'vue';
import { getISP } from '../../api/address'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const activeName = ref(1)
const addrISPRef = ref(null)

onMounted(flushISP)

const ISPPrefix = ref('')
const ISPLength = ref(0)

function flushISP(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: addrISPRef.value.$el
  })
  getISP().then(response => {
    ISPPrefix.value = response.data.isp
    ISPLength.value = response.data.length
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(() => {
    loadingInstance.close()
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