<template>
  <div class="addr-query-container">
    <!-- 地址溯源 -->
    <div class="addr-query">
      <span class="addr-query-header">{{ t('label.addressQuery') }}</span>
      <el-form :model="queryForm" label-width="auto" class="addr-query-form" ref="queryFormRef" :rules="queryRules">
        <el-form-item width="100%" :label="t('label.IPv6Address')" prop="queryAddress">
          <el-input v-model="queryForm.queryAddress" :placeholder="t('holder.plsInputIPv6Address')"></el-input>
        </el-form-item>
        <el-form-item width="100%" :label="t('label.ISPPrefix')" prop="prefix">
          <el-input v-model="queryForm.prefix" :placeholder="t('holder.plsInputStandardISPPrefix')"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="handleQueryAddress()" class="addr-query-button" :loading="waitQuery">{{ t('button.addressQuery') }}</el-button>
      </div>

      <!-- Result -->
      <div class="addr-query-result" v-if="queryResultType">
        <div class="addr-query-result-header">{{ !!queryResult ? t('label.addressQuerySuccess') : t('label.addressQueryFail') }}</div>
        <el-descriptions :column="2" size="default" border v-if="!!queryResult">
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <span style="margin-left: 15px; font-size: 16px;">{{ t('label.userID') }}</span>
              </div>
            </template>
            <span>{{ queryResult.userID }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <span style="margin-left: 15px; font-size: 16px;">{{ t('label.phoneNumber') }}</span>
              </div>
            </template>
            <span>{{ queryResult.phoneNumber }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <span style="margin-left: 15px; font-size: 16px;">{{ t('label.registerTime') }}</span>
              </div>
            </template>
            <span>{{ queryResult.registerTime }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <span style="margin-left: 15px; font-size: 16px;">{{ t('label.username') }}</span>
              </div>
            </template>
            <span>{{ queryResult.username }}</span>
          </el-descriptions-item>
        </el-descriptions>
      </div>

    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { queryAddress, ResultTypeSuccess, ResultTypeSuccess } from '../../api/address'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const queryForm = ref({})
const queryFormRef = ref(null)
const queryResult = ref({})

// 地址查询
const waitQuery = ref(false)
const queryResultType = ref(0)
function handleQueryAddress(){
  queryFormRef.value.validate((valid) => {
    if(valid){
      waitQuery.value = true
      queryAddress(queryForm.value.queryAddress, queryForm.value.prefix).then(response => {
        ElMessage.success(t('tip.querySuccess'))
        queryResult.value = response.data.info
        queryResultType.value = ResultTypeSuccess
      }).catch(res => {
        ElMessage.error(res.data.msg)
        queryResultType.value = ResultTypeFail
      }).finally(()=>{
        waitQuery.value = false
        queryResultType.value = 0
      })
    }
  })
}

const queryRules = {
  queryAddress: [{required: true, message: t('holder.plsInputIPv6Address'), trigger: 'blur'}],
  prefix: [{required: true, message: t('holder.plsInputStandardISPPrefix'), trigger: 'blur'}]
}

</script>

<style scoped>
.addr-query-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addr-query{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.addr-query-header{
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
.addr-query-form{
  width: 60%;
}
.addr-query-button{
  margin: 5px 0 15px;
}
.addr-query-result{
  width: 50%;
  margin-top: 20px;
  padding: 15px;
}
.addr-query-result-header{
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
}
</style>