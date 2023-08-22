<template>
  <div class="nid-apply">
    <span class="nid-apply-header">{{ t('label.registryNID') }}</span>
    <el-form :model="nidForm" label-width="auto" class="nid-apply-form" ref="nidFormRef" :rules="applyRules">
      <el-form-item :label="t('label.userID')" prop="userID">
        <el-input v-model="nidForm.userID" :placeholder="t('holder.plsInputUserID')"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.password')" prop="password">
        <el-input v-model="nidForm.password" show-password :placeholder="t('holder.plsInputPassword')"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.phoneNumber')" prop="phoneNumber">
        <el-input v-model="nidForm.phoneNumber" :placeholder="t('holder.plsInputPhoneNumber')"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.username')" prop="username">
        <el-input v-model="nidForm.name" :placeholder="t('holder.plsInputUsername')"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" @click="handleRegistry()" class="nid-apply-button" :loading="waitApply">{{ t('button.register') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { registerNID } from '../../api/user'
const { t } = useI18n()

const nidForm = ref('')
const nidFormRef = ref(null)

const applyRules = {
  userID: [{required: true, message: t('holder.plsInputUserID'), trigger: 'blur'}],
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'blur'}],
  phoneNumber: [{required: true, message: t('holder.plsInputPhoneNumber'), trigger: 'blur'}],
  username: [{required: true, message: t('holder.plsInputUsername'), trigger: 'blur'}],
}

const waitApply = ref(false)
function handleRegistry(){
  nidFormRef.value.validate((valid) => {
    if(valid){
      waitApply.value = true
      registerNID(nidForm.value).then(response => {
        ElMessage.success(t('tip.registerSuccess'))
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(()=>{
        waitApply.value = false
      })
    }
  })
}

</script>

<style scoped>
.nid-apply{
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
.nid-apply-button{
  margin: 5px 0 15px;
}
</style>