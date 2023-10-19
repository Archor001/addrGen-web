
import { applyAddress } from '../../api/address';
<template>
  <div class="addr-generate">
    <div class="addr-generate-header">
      <span>{{ t('label.addressApply') }}</span>
    </div>
    <el-form :model="applyForm" label-width="auto" class="addr-generate-form" ref="applyFormRef" :rules="applyRules">
      <el-form-item :label="t('label.NID')" prop="nid">
        <el-input v-model="applyForm.nid" :placeholder="t('holder.plsInputNID')"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.password')" prop="password">
        <el-input v-model="applyForm.password" :placeholder="t('holder.plsInputPassword')" show-password>
        </el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" @click="handleGenerateAddress()" :icon="Send" 
        class="addr-generate-button" :loading="waitApply">{{ t('button.generateAddress') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { Send } from '@icon-park/vue-next';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { applyAddress } from '../../api/address'
const { t } = useI18n()

const applyForm = ref({})
const applyFormRef = ref(null)

const emit = defineEmits(['generate'])

const waitApply = ref(false)
function handleGenerateAddress(){
  applyFormRef.value.validate((valid) => {
    if(valid){
      waitApply.value = true
      applyAddress(applyForm.value.nid, applyForm.value.password).then(response => {
        emit('generate', response.data.address)
        ElMessage.success(t('tip.registerSuccess'))
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(()=>{
        waitApply.value = false
      })
    }
  })
}

const applyRules = {
  nid: [{required: true, message: t('holder.plsInputNID'), trigger: 'change'}],
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'change'}],
}

</script>

<style scoped>
.addr-generate{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.addr-generate-header{
  width: 90%;
  margin: 0 auto 30px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #343a40;
  font-family:'Times New Roman', Times, serif, Georgia,"Microsoft YaHei",sans-serif;
  text-align: left;
  border-bottom: 1px solid #eeeeee;
}
.addr-generate-form{
  width: 70%;
}
.addr-generate-button{
  margin: 5px 0 15px;
}
</style>