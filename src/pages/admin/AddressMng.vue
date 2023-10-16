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
        <el-table-column align="center" :label="t('label.username')" prop="username">
        </el-table-column>
        <el-table-column align="center" :label="t('label.name')" prop="name">
        </el-table-column>
        <el-table-column align="center" :label="t('label.NID')" prop="nid">
        </el-table-column>
        <el-table-column align="center" :label="t('label.address')">
        </el-table-column>
        <el-table-column align="center" :label="t('label.addressStatus')">
        </el-table-column>
        <el-table-column align="center" :label="t('label.registerTime')">
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
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const currentPage = ref(1)
const pageSize = ref(12)
const total = ref(0)
const addressList = ref([])

// 批量获取地址
function handleGetAddress(){

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