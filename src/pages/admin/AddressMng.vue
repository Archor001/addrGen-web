<template>
  <div class="address-management-page">
    <el-row justify="space-between">
      <el-col :span="6" style="text-align: left">
        <el-button type="primary" round @click="applyAddressVisible = true">{{ t('button.applyAddress') }}</el-button>
      </el-col>
      <el-col :span="12">
        <el-input v-model="userFilterContent" @keyup.enter="handleGetAddress()" :placeholder="t('holder.userFilter')">
          <template #append>
            <el-button @click="handleGetAddress()"><el-icon><Search /></el-icon></el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>

    <el-row justify="center" style="margin-top: 32px">
      <el-table :data="addressList" class="address-list-table" style="width: 100%" table-layout="auto">
        <el-table-column align="center" :label="t('label.address')" prop="address">
          <template #default="scope">
            <el-tag type="primary" size="large">{{ scope.row.address }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.addressStatus')" prop="status">
          <template #default="scope">
            <el-tag :type="formatStatusTag(scope.row.status)">{{ formatStatus(scope.row.status) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.username')" prop="username">
        </el-table-column>
        <el-table-column align="center" :label="t('label.name')" prop="name">
        </el-table-column>
        <el-table-column align="center" :label="t('label.NID')" prop="nid">
        </el-table-column>
        <el-table-column align="center" :label="t('label.registerTime')" prop="registerTime">
          <template #default="scope">
            <div style="display: flex; align-items: center; justify-content: center;">
              <Time theme="outline" size="16" fill="#333" style="margin-top: 5px;"/>
              <span style="margin-left: 3px; font-size:16px;">{{ formatStamp(scope.row.registerTime) }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.option')">
          <template #default="scope">
            <el-button type="danger" @click="handleSuspendAddress(scope.row)" size="small">{{ t('button.suspend') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="margin-top:32px;" justify="center">
          <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" hide-on-single-page
            :page-sizes="[10, 15, 20, 25, 30]" background layout="total, sizes, prev, pager, next, jumper"
            :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-row>
    </el-row>
  </div>
</template>

<script setup>
import { Time } from '@icon-park/vue-next';
import { ref, onMounted, nextTick } from 'vue';
import { getAddress } from '../../api/address'
import { useI18n } from 'vue-i18n';
import { formatStamp, formatStatus, formatStatusTag } from '../../utils';
const { t } = useI18n()

const userFilterContent = ref('')
const currentPage = ref(1)
const pageSize = ref(12)
const total = ref(0)
const addressList = ref([])

onMounted(()=>{
  nextTick(()=>{
    handleGetAddress()
  })
})

// 批量获取地址
function handleGetAddress(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.address-list-table'
  })
  getAddress((currentPage.value - 1) * pageSize.value, pageSize.value, userFilterContent.value).then(response => {
    addressList.value = response.data.addresses
    total.value = response.data.count
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(()=>{
    loadingInstance.close()
  })
}

// 停用地址
function handleSuspendAddress(address){

}

// 分页
function handleCurrentChange(val){
  currentPage.value = val
  handleGetAddress()
}

function handleSizeChange(val){
  pageSize.value = val
  handleGetAddress()
}

</script>

<style scoped>
.address-management-page{
  padding: 16px 32px;
  position: relative;
  height: 100%;
  background-size: 100% 100%;
}
</style>