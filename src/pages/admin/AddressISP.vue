<template>
  <div class="addr-isp-container">
    <span class="addr-isp-header">{{ t('label.ISPPrefix') }}</span>
    <isp-manage :isp="ISPPrefix" :length="ISPLength" style="width: 50%"></isp-manage>
  </div>
</template>

<script setup>
import IspManage from '../../components/address/IspManage.vue'
import { onMounted, ref } from 'vue';
import { getISP } from '../../api/address'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

onMounted(flushISP)

const ISPPrefix = ref('')
const ISPLength = ref(0)

function flushISP(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.addr-isp-container'
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
.addr-isp-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addr-isp-header{
  width: 90%;
  margin: 0 auto 30px;
  padding: 20px 10px 10px;
  font-size: 20px;
  font-weight: bold;
  color: #343a40;
  font-family:'Times New Roman', Times, serif, Georgia,"Microsoft YaHei",sans-serif;
  text-align: left;
  border-bottom: 1px solid #eeeeee;
}
</style>