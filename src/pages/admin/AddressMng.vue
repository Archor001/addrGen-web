<template>
  <div class="addr-manage-container">
    <span class="addr-manage-header">{{ t('label.addressManage') }}</span>
    <div class="addr-manage-body">
      <!-- 地址操作 -->
      <div class="addr-manage-toolbar">
        <div style="display:flex; align-items: center;">
          <span>{{ t('label.ISPPrefix') + "：" }}</span>
          <el-tag style="margin-left: 5px;" type="primary" size="large">{{ ISPPrefix }}</el-tag>
          <el-button style="margin-left: 15px;" plain round :icon="EditOne">{{ t('button.editISP') }}</el-button>
          <el-button style="margin-left: 15px;" plain round :icon="Refresh">{{ t('button.regenerateAddress') }}</el-button>
        </div>
        <el-input v-model="userFilterContent" @keyup.enter="handleGetUser()" :placeholder="t('holder.userFilter')" style="width: 30%;">
          <template #append>
            <el-button @click="handleGetUser()"><el-icon><Search /></el-icon></el-button>
          </template>
        </el-input>
      </div>

      <!-- 地址列表 -->
      <el-table :data="userList" class="addr-list-table" table-layout="auto">
        <el-table-column align="center" :label="t('label.username')" prop="username">
        </el-table-column>
        <el-table-column align="center" :label="t('label.userID')" prop="userID">
        </el-table-column>
        <el-table-column align="center" :label="t('label.NID')" prop="nid">
        </el-table-column>
        <el-table-column align="center" :label="t('label.phoneNumber')" prop="phoneNumber">
        </el-table-column>
        <el-table-column align="center" :label="t('label.address')">
          <template #default="scope">
            <el-tag v-if="!!scope.row.address && scope.row.address.length > 0" type="primary">{{ scope.row.address }}</el-tag>
            <el-tag v-else type="info">{{ t('label.notApplyYet') }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.registerTime')">
          <template #default="scope">
            <el-tag v-if="!!scope.row.registerTime" type="primary">{{ formatStamp(scope.row.registerTime) }}</el-tag>
            <el-tag v-else type="info">{{ t('label.notApplyYet') }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.option')">
          <template #default="scope">
            <el-button type="danger" plain @click="handleDeleteUser(scope.row)" size="small">{{ t('button.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="margin-top:32px;" justify="center">
          <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" hide-on-single-page
            :page-sizes="[10, 15, 20, 25, 30]" background layout="total, sizes, prev, pager, next, jumper"
            :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-row>
    </div>
  </div>
</template>

<script setup>
import { Search, Refresh, EditOne } from '@icon-park/vue-next';
import { ref, onMounted, nextTick } from 'vue';
import { getUser, deleteUser } from '../../api/user';
import { formatStamp } from '../../utils';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

onMounted(() => {
  nextTick(() => initAddressMng())
})

const userFilterContent = ref('')
const ISPPrefix = ref('')

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const userList = ref([])

// 初始化地址管理页面
function initAddressMng(){
  ISPPrefix.value = "2001:250:4000::/48"
  handleGetUser()
}

function handleGetUser(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.user-list-table'
  })
  getUser((currentPage.value - 1) * pageSize.value, pageSize.value, userFilterContent.value).then(response => {
    userList.value = response.data.users
    total.value = response.data.count
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(()=>{
    loadingInstance.close()
  })
}

</script>

<style scoped>
.addr-manage-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addr-manage-header{
  width: 90%;
  margin: 0 auto 30px;
  padding: 20px 10px 10px;
  font-size: 20px;
  font-weight: bold;
  color: #343a40;
  font-family:'Times New Roman', Times, serif, Georgia,"Microsoft YaHei",sans-serif;
  text-align: left;
  border-bottom: 1px solid #eeeeee;
}
.addr-manage-body{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addr-manage-toolbar{
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addr-list-table{
  width: 88%;
  margin-top: 30px;
}
</style>