<template>
  <div class="nid-apply">
    <span class="nid-apply-header">{{ t('button.register') + t('label.user') }}</span>
    <el-form :model="nidForm" label-width="auto" class="nid-apply-form" ref="nidFormRef" :rules="applyRules">
      <el-form-item :label="t('label.phoneNumber')" prop="phoneNumber">
        <el-input v-model="nidForm.phoneNumber" :placeholder="t('holder.plsInputPhoneNumber')"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.password')" prop="password">
        <el-input v-model="nidForm.password" type="password" :show-password="true" :placeholder="t('holder.plsInputPassword')"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.username')" prop="username">
        <el-input v-model="nidForm.username" :placeholder="t('holder.plsInputUsername')"></el-input>
      </el-form-item>
    </el-form>
    <div style="display: flex; align-items:center; margin: 5px 0 15px;">
      <el-button type="primary" @click="handleRegistry()" class="nid-apply-button" :loading="waitApply">{{ t('button.register') }}</el-button>
      <slot name="cancel"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { registerNID } from '../../api/user'
const { t } = useI18n()

const nidForm = ref({})
const nidFormRef = ref(null)

const emit = defineEmits(['register'])

const waitApply = ref(false)
function handleRegistry(){
  nidFormRef.value.validate((valid) => {
    if(valid){
      waitApply.value = true
      nidForm.value.userID = nidForm.value.phoneNumber
      registerNID(nidForm.value).then(response => {
        emit('register', response.data.user)
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
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'change'}],
  phoneNumber: [{required: true, message: t('holder.plsInputPhoneNumber'), trigger: 'change'}],
  username: [{required: true, message: t('holder.plsInputUsername'), trigger: 'change'}],
}

</script>

<style scoped>
.nid-apply{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.nid-apply-header{
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
.nid-apply-form{
  width: 60%;
}
</style>