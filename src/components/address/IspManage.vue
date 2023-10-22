<template>
  <div style="margin: 0 10%;">
    <el-form :model="ispForm" label-width="auto" class="addr-query-form" ref="ispFormRef" :rules="ispRules">
      <el-form-item :label="t('label.ISPPrefix')" prop="isp">
        <el-input v-model="ispForm.isp" :placeholder="t('holder.plsInputISPPrefix')" class="append-input">
          <template #append>
            <el-button type="primary" @click="confirmISPPrefix()" :loading="waitConfirm" :icon="Send">{{ t('confirm') }}</el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, toRefs } from 'vue';
import { updateISP } from '../../api/address';
import { useI18n } from 'vue-i18n';
import { Send } from '@icon-park/vue-next';
const { t } = useI18n()

const props = defineProps({
  isp: String,
  length: Number,
  edit: {
    type: Boolean,
    default: false
  }
})

const { isp, length, edit } = toRefs(props)

onMounted(initISP)
watch(isp, initISP)

const emit = defineEmits(["success"])

const ispForm = ref({})
const ispFormRef = ref(null)

function initISP(){
  if(!isp.value || isp.value.length <= 0)
    return;
  ispForm.value.isp = isp.value + "::/" + length.value
}

// 提交ISP地址前缀
const waitConfirm = ref(false)
function confirmISPPrefix(){
  if(edit.value){
    ElMessageBox.confirm(t('ask.sureToChangeISP'), t('title.warning'), {
      confirmButtonText: t('confirm'),
      cancelButtonText: t('cancel'),
    }).then(()=>{
      ispFormRef.value.validate((valid) => {
        if(valid){
          waitConfirm.value = true
          updateISP(ispForm.value.isp).then(response => {
            ElMessage.success(t('tip.editSuccess'))
            emit("success")
          }).catch(res => {
            ElMessage.error(res.data.msg)
          }).finally(() => {
            waitConfirm.value = false
          })
        }
      })
    })
  } else {
    ispFormRef.value.validate((valid) => {
      if(valid){
        waitConfirm.value = true
        updateISP(ispForm.value.isp).then(response => {
          ElMessage.success(t('tip.editSuccess'))
          emit("success")
        }).catch(res => {
          ElMessage.error(res.data.msg)
        }).finally(() => {
          waitConfirm.value = false
        })
      }
    })
  }
}

const ispRules = {
  isp: [{required: true, message: t('holder.plsInputISPPrefix'), trigger: 'blur'}]
}

</script>

<style scoped>
.append-input :deep(.el-button){
  background-color: #409eff;
  color: #fff;
  border-radius: 0px;
}
.append-input :deep(.el-button:hover){
  background-color: #4240ff;
  color: #fff;
}
</style>