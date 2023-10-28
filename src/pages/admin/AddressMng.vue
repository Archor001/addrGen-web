<template>
  <div class="addr-manage-container">
    <span class="addr-manage-header">{{ t('label.addressManage') }}</span>
    <div class="addr-manage-body">
      <!-- 地址操作 -->
      <div class="addr-manage-toolbar">
        <div style="display:flex; align-items: center;" v-if="!!ISPPrefix && ISPPrefix.length > 0">
          <span>{{ t('label.ISPPrefix') + "：" }}</span>
          <el-tag style="margin-left: 5px;" class="ISP-tag" type="primary" size="large">{{ ISPPrefix + "::/" + ISPLength}}</el-tag>
          <el-button style="margin-left: 15px;" plain round :icon="EditOne" @click="handleEditISP()">{{ t('button.editISP') }}</el-button>
        </div>
        <div style="display:flex; align-items: center;" v-else>
          <el-button round :icon="EditOne" @click="handleEditISP()" type="success">{{ t('button.createISP') }}</el-button>
          <el-popover placement="right" width="400" trigger="hover" :content="t('tip.needISPToGenerateAddress')">
            <template #reference>
              <el-button link :icon="InfoFilled" style="margin-left: 8px;"></el-button>
            </template>
          </el-popover>
        </div>
        <el-button type="primary" text @click="flushAddress()" :icon="Refresh"></el-button>
        <el-input v-model="userFilterContent" @keyup.enter="flushAddress()" :placeholder="t('holder.userFilter')" style="width: 30%;">
          <template #append>
            <el-button @click="flushAddress()"><el-icon><Search /></el-icon></el-button>
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
        <el-table-column align="center" :label="t('label.userStatus')" prop="status">
          <template #default="scope">
            <el-tag :type="formatStatusTag(scope.row.status)">{{ formatStatus(scope.row.status) }}</el-tag>
          </template>
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
        <el-table-column align="center" :label="t('label.addrStatus')">
          <template #default="scope">
            <el-tag :type="formatStatusTag(scope.row.addrStatus)">{{ formatStatus(scope.row.addrStatus) }}</el-tag>
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
    <el-dialog v-model="editISPVisible" :title="!ISPPrefix? t('label.createISP') : t('label.editISP')" draggable width="700">
      <isp-manage :isp="ISPPrefix" :length="ISPLength" :edit="!!ISPPrefix && ISPPrefix.length > 0" @success="confirmSubmit()"></isp-manage>
    </el-dialog>
  </div>
</template>

<script setup>
import { InfoFilled } from '@element-plus/icons-vue'
import { Search, Refresh, EditOne } from '@icon-park/vue-next';
import { ref, onMounted, nextTick } from 'vue';
import { getUser, deleteUser } from '../../api/user';
import { getISP } from '../../api/address';
import { formatStamp, formatStatus, formatStatusTag } from '../../utils';
import IspManage from '../../components/address/IspManage.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

onMounted(() => {
  nextTick(() => initAddressMng())
})

const userFilterContent = ref('')
const ISPPrefix = ref('')
const ISPLength = ref(0)

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const userList = ref([])

// 初始化地址管理页面
function initAddressMng(){
  flushISPandAddress()
}

// 获取ISP
function flushISPandAddress(){
  const ispLoadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.ISP-tag'
  })
  const addrLoadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.addr-list-table'
  })
  getISP().then(response => {
    ISPPrefix.value = response.data.isp
    ISPLength.value = response.data.length
    return getUser((currentPage.value - 1) * pageSize.value, pageSize.value, userFilterContent.value)
  }).then(resp => {
    ispLoadingInstance.close()
    userList.value = resp.data.users
    total.value = resp.data.count
  }).catch(res => {
    ElMessage.error(res.data.msg)
  }).finally(() => {
    ispLoadingInstance.close()
    addrLoadingInstance.close()
  })
}

// 批量获取地址
function flushAddress(){
  const loadingInstance = ElLoading.service({
    fullscreen: false,
    target: '.addr-list-table'
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

// 修改ISP地址前缀
const editISPVisible = ref(false)
function handleEditISP(){
  editISPVisible.value = true
}

// 修改ISP地址前缀成功
function confirmSubmit(){
  editISPVisible.value = false
  initAddressMng()
}

// 删除用户
function handleDeleteUser(user){
  ElMessageBox.confirm(t('ask.deleteUser'),'Tip',{
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel')
  }).then(() => {
    deleteUser(user.phoneNumber).then(response => {
      ElMessage.success(t('tip.deleteSuccess'))
      flushAddress()
    }).catch(res => {
      ElMessage.error(res.data.msg)
    })
  })
}

// 分页
function handleCurrentChange(val){
  currentPage.value = val
  flushAddress()
}

function handleSizeChange(val){
  pageSize.value = val
  flushAddress()
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