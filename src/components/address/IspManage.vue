<template>
  <div>
    <el-form :model="ispForm" label-width="auto" class="addr-query-form" ref="ispFormRef" :rules="ispRules">
      <el-form-item :label="t('label.ISPPrefix')" prop="isp">
        <el-input v-model="ispForm.isp" :placeholder="t('holder.plsInputISPPrefix')"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" @click="confirmISPPrefix()" :loading="waitConfirm" style="margin-top: 10px;">{{ t('confirm') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, toRefs } from 'vue';
import { updateISP } from '../../api/address';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const props = defineProps({
  isp: String
})

const { isp } = toRefs(props)

onMounted(initISP)
watch(isp, initISP)

const ispForm = ref({})
const ispFormRef = ref(null)

function initISP(){
  if(!isp.value || isp.value.length <= 0)
    return;
  ispForm.value.isp = isp.value
}

// 提交ISP地址前缀
const waitConfirm = ref(false)
function confirmISPPrefix(){
  ispFormRef.value.validate((valid) => {
    if(valid){
      waitConfirm.value = true
      updateISP(ispForm.value).then(response => {
        ElMessage.success(t('tip.editSuccess'))
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(() => {
        waitConfirm.value = false
      })
    }
  })
}

const ispRules = {
  isp: [{required: true, message: t('holder.plsInputISPPrefix'), trigger: 'blur'}]
}

</script>

<style scoped>
</style>