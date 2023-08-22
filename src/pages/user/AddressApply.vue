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
        <el-form-item :label="t('label.ISPPrefix')" prop="prefix">
          <el-input v-model="applyForm.prefix" :placeholder="t('holder.plsInputStandardISPPrefix')"></el-input>
        </el-form-item>
        <el-form-item :label="t('label.suffix')" prop="suffix">
          <el-input v-model="applyForm.suffix" :placeholder="t('holder.plsInput64Suffix')"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="handleGenerateAddress()" :icon="Send" 
          class="addr-generate-button" :loading="waitGenerate">{{ t('button.generateAddress') }}</el-button>
      </div>
    </div>

    <!-- 生成地址表格 -->
    <div>
      <div class="addrGen-table">
        <el-table :data="addrGenData" :header-cell-style="{ 'text-align': 'center' }" v-show="addrGenVisible">
          <el-table-column prop="message" label="ipv6地址" width="300" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="block"></div>
    </div>

  </div>
</template>

<script setup>
import { Send } from '@icon-park/vue-next';
import { applyAddress } from '../../api/address'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const applyForm = ref('')     // 地址生成的表单
const applyFormRef = ref(null)

// 地址生成
const waitGenerate = ref(false)
function handleGenerateAddress(){
  applyFormRef.value.validate((valid) => {
    if(valid){
      waitGenerate.value = true
      applyAddress(applyForm.value).then(response => {
        ElMessage.success(t('tip.applySuccess'))
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(()=>{
        waitGenerate.value = false
      })
    } else {
      return
    }
  })
}

const applyRules = {
  NID: [{required: true, message: t('holder.plsInputNid'), trigger: 'blur'}],
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'blur'}],
}

</script>

<style scoped>

.addr-generate{
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

.addrGen-table {
  width: 100%;
  margin: auto;
  margin-top: 80px;
  width: 300px;
  opacity: 0.75;
  color: black;
  font-weight: 600px;
  text-align: center;
}

.block {
  height: 120px;
}
</style>
