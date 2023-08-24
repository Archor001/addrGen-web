<template>
  <div class="addr-apply-container">
    <!-- 地址生成表单 -->
    <div class="addr-generate">
      <div class="addr-generate-header">
        <span>{{ t('label.addressApply') }}</span>
      </div>
      <el-form :model="applyForm" label-width="auto" class="addr-generate-form" ref="applyFormRef" :rules="applyRules">
        <el-form-item label="NID" prop="nid">
          <el-input v-model="applyForm.nid" :placeholder="t('holder.plsInputNid')"></el-input>
        </el-form-item>
        <el-form-item :label="t('label.password')" prop="password">
          <el-input v-model="applyForm.password" :placeholder="t('holder.plsInputPassword')" show-password>
          </el-input>
        </el-form-item>
        <el-form-item :label="t('label.ISPPrefix')">
          <el-input v-model="applyForm.prefix" :placeholder="t('holder.plsInputStandardISPPrefix')"></el-input>
        </el-form-item>
        <el-form-item :label="t('label.suffix')">
          <el-input v-model="applyForm.suffix" :placeholder="t('holder.plsInput64Suffix')"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="handleGenerateAddress()" :icon="Send" 
          class="addr-generate-button" :loading="waitGenerate">{{ t('button.generateAddress') }}</el-button>
      </div>
    </div>

    <!-- Result -->
    <div class="addr-generate-result" v-if="applyResultType">
      <div class="addr-generate-result-header">{{ !!applyResult ? t('label.addressApplySuccess') : t('label.addressApplyFail') }}</div>
      <el-descriptions :column="2" size="default" border v-if="!!applyResult">
        <el-descriptions-item align="center">
          <template #label>
            <div style="display: flex; align-items: center; justify-content: center;">
              <span style="margin-left: 15px; font-size: 16px;">{{ t('label.address') }}</span>
            </div>
          </template>
          <span>{{ applyResult }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </div>

  </div>
</template>

<script setup>
import { Send } from '@icon-park/vue-next';
import { applyAddress, ResultTypeSuccess, ResultTypeFail } from '../../api/address'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const applyForm = ref({})     // 地址生成的表单
const applyFormRef = ref(null)

const applyResult = ref('')   // 地址生成结果

// 地址生成
const waitGenerate = ref(false)
const applyResultType = ref(0)
function handleGenerateAddress(){
  applyFormRef.value.validate((valid) => {
    if(valid){
      waitGenerate.value = true
      applyAddress(applyForm.value).then(response => {
        ElMessage.success(t('tip.applySuccess'))
        applyResult.value = response.data.address
        applyResultType.value = ResultTypeSuccess
      }).catch(res => {
        ElMessage.error(res.data.msg)
        applyResultType.value = ResultTypeSuccess
      }).finally(()=>{
        waitGenerate.value = false
        applyResultType.value = 0
      })
    } else {
      return
    }
  })
}

const applyRules = {
  nid: [{required: true, message: t('holder.plsInputNid'), trigger: 'blur'}],
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'blur'}],
}

</script>

<style scoped>
.addr-apply-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
.addr-generate-result{
  width: 50%;
  margin-top: 20px;
  padding: 15px;
}
.addr-generate-result-header{
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
}
</style>
