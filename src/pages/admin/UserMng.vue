<template>
  <div class="user-management-page">
    <el-row justify="space-between">
      <el-col :span="6" style="text-align: left">
        <el-button type="primary" plain round @click="addUserVisible = true">{{ t('button.register') + t('label.user') }}</el-button>
      </el-col>
      <el-col :span="12">
        <el-input v-model="userFilterContent" @keyup.enter="handleGetUser()" :placeholder="t('holder.userFilter')">
          <template #append>
            <el-button @click="handleGetUser()"><el-icon><Search /></el-icon></el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>

    <el-row justify="center" style="margin-top: 32px">
      <el-table :data="userList" class="user-list-table" style="width: 100%" table-layout="auto">
        <el-table-column align="center" :label="t('label.username')" prop="username" width="150">
        </el-table-column>
        <el-table-column align="center" :label="t('label.name')" prop="name" width="150">
        </el-table-column>
        <el-table-column align="center" :label="t('label.NID')" prop="nid" width="150">
        </el-table-column>
        <el-table-column align="center" :label="t('label.phoneNumber')" prop="phoneNumber" width="150">
        </el-table-column>
        <el-table-column align="center" :label="t('label.address')" width="280">
          <template #default="scope">
            <el-tag v-if="!!scope.row.address && scope.row.address.length > 0" type="primary">{{ scope.row.address }}</el-tag>
            <el-tag v-else type="info">{{ t('label.notApplyYet') }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.registerTime')" width="150">
          <template #default="scope">
            <el-tag v-if="!!scope.row.registerTime" type="primary">{{ formatStamp(scope.row.registerTime) }}</el-tag>
            <el-tag v-else type="info">{{ t('label.notApplyYet') }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.role')" width="120">
          <template #default="scope">
            <el-tag type="primary">{{ formatRole(scope.row.role) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" :label="t('label.emailAddress')" prop="emailAddress" width="200">
        </el-table-column>
        <el-table-column align="center" :label="t('label.option')" fixed="right" width="250">
          <template #default="scope">
            <el-button type="primary" plain @click="handleEditUser(scope.row)" size="small">{{ t('button.edit') }}</el-button>
            <el-button type="danger" plain @click="handleDeleteUser(scope.row)" size="small">{{ t('button.deleteUser') }}</el-button>
            <el-button type="danger" plain @click="handleDeleteAddress(scope.row)" size="small">{{ t('button.deleteAddress') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="margin-top:32px;" justify="center">
          <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" hide-on-single-page
            :page-sizes="[10, 15, 20, 25, 30]" background layout="total, sizes, prev, pager, next, jumper"
            :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-row>
    </el-row>

    <el-dialog v-model="addUserVisible" draggable>
      <user-register @register="confirmAddUser">
        <template #cancel>
          <el-button type="danger" @click="addUserVisible = false">{{ t('cancel') }}</el-button>
        </template>
      </user-register>
    </el-dialog>

    <edit-user-dialog v-model="editUserVisible" :user="user" @success="confirmEdit()"></edit-user-dialog>

  </div>
</template>

<script setup>
import { Search } from '@icon-park/vue-next';
import { ref, onMounted, nextTick } from 'vue';
import { getUser, deleteUser } from '../../api/user'
import { deleteAddress } from '../../api/address'
import { formatStamp, formatRole } from '../../utils/index'
import UserRegister from '../../components/user/UserRegister.vue';
import EditUserDialog from '../../components/user/EditUserDialog.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

onMounted(()=>{
  nextTick(()=>handleGetUser())
})

const currentPage = ref(1)
const pageSize = ref(12)
const total = ref(0)
const userList = ref([])

// 新增用户
const addUserVisible = ref(false)

// 新增用户成功
function confirmAddUser(info){
  addUserVisible.value = false
  handleGetUser()
}

// 批量获取用户
const userFilterContent = ref('')
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

// 修改用户
const editUserVisible = ref(false)
const user = ref({})
function handleEditUser(user){
  editUserVisible.value = true
  user.value = user
}

function confirmEdit(){
  editUserVisible.value = false
  handleGetUser()
}

// 删除用户
function handleDeleteUser(user){
  ElMessageBox.confirm(t('ask.deleteUser'),'Tip',{
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel')
  }).then(() => {
    deleteUser(user.nid).then(response => {
      ElMessage.success(t('tip.deleteSuccess'))
      handleGetUser()
    }).catch(res => {
      ElMessage.error(res.data.msg)
    })
  })
}

// 删除地址
function handleDeleteAddress(user){
  ElMessageBox.confirm(t('ask.deleteAddress'),'Tip',{
    confirmButtonText: t('confirm'),
    cancelButtonText: t('cancel')
  }).then(() => {
    deleteAddress(user.address).then(response => {
      ElMessage.success(t('tip.deleteSuccess'))
      handleGetUser()
    }).catch(res => {
      ElMessage.error(res.data.msg)
    })
  })
}

// 分页
function handleCurrentChange(val){
  currentPage.value = val
  handleGetUser()
}

function handleSizeChange(val){
  pageSize.value = val
  handleGetUser()
}

</script>

<style scoped>
.user-management-page {
  padding: 16px 32px;
  position: relative;
  height: 100%;
  background-size: 100% 100%;
}
.scoping-animation {
  transition: width .3s, opacity .3s;
}
</style>