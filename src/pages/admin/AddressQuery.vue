<template>
  <div class="addr-container">
    <!-- 地址查询 -->
    <div class="addr-query">
      <span class="addr-query-header">{{ t('label.addressQuery') }}</span>
      <el-form :model="queryForm" label-width="auto" class="addr-query-form" ref="queryFormRef" :rules="queryRules">
        <el-form-item width="100%" :label="t('label.NID')" prop="nid">
          <el-input v-model="queryForm.nid" :placeholder="t('holder.plsInputNID')"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="handleQueryAddress()" class="addr-query-button" :loading="waitTrace">{{ t('button.addressQuery') }}</el-button>
      </div>

      <!-- Result -->
      <div class="addr-query-result" v-if="!!queryResultType">
        <div class="addr-query-result-header">{{ (queryResultType == ResultTypeSuccess) ? t('label.addressQuerySuccess') : t('label.addressQueryFail') }}</div>
        <el-descriptions :column="4" size="default" style="width: 70%;" border v-if="(queryResultType == ResultTypeSuccess)" direction="vertical">
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <el-icon><Computer theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.address') }}</span>
              </div>
            </template>
            <div style="display: flex; flex-direction: column; align-items: center; padding-bottom: 10px;">
              <el-tag class="addr-query-result-font" v-for="address in queryResult.address" type="primary" size="large">{{ address }}</el-tag>
            </div>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <el-icon><User theme="outline" size="20" fill="#4a90e2"/></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.username') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ queryResult.user.username }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><User theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.name') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ queryResult.user.name }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><Phone theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.phoneNumber') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ queryResult.user.phoneNumber }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><Mail theme="filled" size="20" fill="#4a90e2"/></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.emailAddress') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ queryResult.user.emailAddress }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><People theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.role') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ formatRole(queryResult.user.role) }}</span>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>

    <!-- 地址溯源 -->    
    <div class="addr-query" style="margin-top: 25px;">
      <span class="addr-query-header">{{ t('label.addressTrace') }}</span>
      <el-form :model="traceForm" label-width="auto" class="addr-query-form" ref="traceFormRef" :rules="traceRules">
        <el-form-item width="100%" :label="t('label.IPv6Address')" prop="address">
          <el-input v-model="traceForm.address" :placeholder="t('holder.plsInputIPv6Address')"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="handleTraceAddress()" class="addr-query-button" :loading="waitTrace">{{ t('button.traceQuery') }}</el-button>
      </div>

      <!-- Result -->
      <div class="addr-query-result" v-if="!!traceResultType">
        <div class="addr-query-result-header">{{ (traceResultType == ResultTypeSuccess) ? t('label.addressTraceSuccess') : t('label.addressTraceFail') }}</div>
        <el-descriptions :column="4" size="default" direction="vertical" border v-if="(traceResultType == ResultTypeSuccess)" style="width: 100%">
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><People theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.NID') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ traceResult.nid }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center; justify-content: center;">
                <el-icon><User theme="outline" size="20" fill="#4a90e2"/></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.username') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ traceResult.username }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><User theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.name') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ traceResult.name }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><Time theme="outline" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.registerTime') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ formatStamp(+traceResult.registerTime) }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><Phone theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.phoneNumber') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ traceResult.phoneNumber }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><Mail theme="filled" size="20" fill="#4a90e2"/></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.emailAddress') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ traceResult.emailAddress }}</span>
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div style="display: flex; align-items: center;justify-content: center;">
                <el-icon><People theme="filled" size="20" fill="#4a90e2" /></el-icon>
                <span style="margin-left: 15px; font-size: 18px;">{{ t('label.role') }}</span>
              </div>
            </template>
            <span class="addr-query-result-font">{{ formatRole(traceResult.role) }}</span>
          </el-descriptions-item>
        </el-descriptions>
      </div>

    </div>
  </div>
  
</template>

<script setup>
import { Mail, Phone, Time, User, People, Computer } from '@icon-park/vue-next';
import { ref } from 'vue';
import { formatStamp, formatRole } from '../../utils/index'
import { queryAddress, ResultTypeSuccess, ResultTypeFail, traceAddress } from '../../api/address'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// 地址查询
const queryForm = ref({})
const queryFormRef = ref(null)
const queryResult = ref({})

const waitQuery= ref(false)
const queryResultType = ref(0)
function handleQueryAddress(){
  queryFormRef.value.validate((valid) => {
    if(valid){
      waitQuery.value = true
      queryAddress(queryForm.value.nid).then(response => {
        ElMessage.success(t('tip.querySuccess'))
        queryResult.value.address = response.data.address.split(",")
        queryResult.value.user = response.data.user
        queryResultType.value = ResultTypeSuccess
      }).catch(res => {
        ElMessage.error(res.data.msg)
        queryResultType.value = ResultTypeFail
      }).finally(() => {
        waitQuery.value = false
      })
    }
  })
}

const queryRules = {
  nid: [{required: true, message: t('holder.plsInputNID'), trigger: 'blur'}]
}

// 地址溯源
const traceForm = ref({})
const traceFormRef = ref(null)
const traceResult = ref({})

const waitTrace = ref(false)
const traceResultType = ref(0)
function handleTraceAddress(){
  traceFormRef.value.validate((valid) => {
    if(valid){
      waitTrace.value = true
      traceAddress(traceForm.value.address).then(response => {
        ElMessage.success(t('tip.traceSuccess'))
        traceResult.value = response.data.user
        console.log(traceResult.value)
        traceResultType.value = ResultTypeSuccess
      }).catch(res => {
        ElMessage.error(res.data.msg)
        traceResultType.value = ResultTypeFail
      }).finally(()=>{
        waitTrace.value = false
      })
    }
  })
}

const traceRules = {
  address: [{required: true, message: t('holder.plsInputAddress'), trigger: 'blur'}]
}

</script>

<style scoped>
.addr-container{
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
  margin: 5px 0;
}
.addr-query-result{
  width: 60%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addr-query-result-header{
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
}
.addr-query-result-font{
  font-size: 14px;
  margin-top: 10px;
}
</style>