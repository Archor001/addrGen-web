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

      
      <div class="addr-query-table">
        <el-table :data="addrQueryData" :header-cell-style="{ 'text-align': 'center' }" v-show="addrQueryVisible">
          <el-table-column prop="status" :label="t('label.status')" width="80" align="center">
          </el-table-column>
          <el-table-column prop="message" :label="t('label.information')" width="160" align="center">
          </el-table-column>
          <el-table-column prop="userID" :label="t('label.userID')" width="160" align="center">
          </el-table-column>
          <el-table-column prop="phoneNumber" :label="t('label.phoneNumber')" width="160" align="center">
          </el-table-column>
          <el-table-column prop="registerTime" :label="t('label.registerTime')" width="160" align="center">
          </el-table-column>
          <el-table-column prop="userName" :label="t('label.username')" width="160" align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { queryAddress } from '../../api/address'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const queryForm = ref('')
const queryFormRef = ref(null)

// 地址查询
const waitQuery = ref(false)
function handleQueryAddress(){
  queryFormRef.value.validate((valid) => {
    if(valid){
      waitQuery.value = true
      queryAddress(queryForm.value).then(response => {
        ElMessage.success(t('tip.querySuccess'))
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(()=>{
        waitQuery.value = false
      })
    }
  })
}

const queryRules = {
  queryAddress: [{required: true, message: t('holder.plsInputIPv6Address'), trigger: 'blur'}],
}

</script>

<style scoped>
.addr-query{
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
</style>