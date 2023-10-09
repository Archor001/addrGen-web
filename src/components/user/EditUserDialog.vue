<template>
  <el-dialog :modelValue="modelValue" @update:modelValue="updateVisible" draggable :title="t('label.editUser')">
    <el-form :model="userForm" :rules="editRules" ref="editUserRef" label-width="120px" style="margin-right:25px">
      <el-form-item :label="t('label.username')" prop="username">
        <el-input :modelValue="userForm.username" disabled></el-input>
      </el-form-item>
      <el-form-item :label="t('label.NID')" prop="nid">
        <el-input v-model="userForm.nid" disabled></el-input>
      </el-form-item>
      <el-form-item :label="t('label.name')" prop="name">
        <el-input v-model="userForm.name"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.NID')" prop="password">
        <el-input v-model="userForm.password"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.name')" prop="phoneNumber">
        <el-input v-model="userForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.name')" prop="emailAddress">
        <el-input v-model="userForm.emailAddress"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.name')" prop="role">
        <el-select v-model="userForm.role">
          <el-option :label="t('label.systemManager')" :value="1"></el-option>
          <el-option :label="t('label.VDCManager')" :value="2"></el-option>
          <el-option :label="t('label.projectManager')" :value="3"></el-option>
          <el-option :label="t('label.normalUser')" :value="4"></el-option>
          <el-option :label="t('label.otherUser')" :value="5"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div style="text-align: center">
      <el-button type="danger" @click="updateVisible(false)">{{t("cancel")}}</el-button>
      <el-button type="primary" :loading="waitConfirm" @click="confirmUser">{{t("confirm")}}</el-button>
    </div>
  </el-dialog>
</template>

<script setup>
import { toRefs, ref, onMounted } from 'vue';
import { editUser } from '../../api/user'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const props = defineProps({
  modelValue: Boolean,
  user:{
    type: Object,
    default:{
      username: '',
      name: '',
      nid: '',
      phoneNumber: '',
      emailAddress: '',
      role: 0,
    }
  }
})

const { user } = toRefs(props)

const userForm = ref({})
const editUserRef = ref(null)

onMounted(() => {
  userForm.value = JSON.parse(JSON.stringify(user.value))
})

const emit = defineEmits(["update:modelValue", "success"]);

function updateVisible(val){
  emit("update:modelValue",val)
}

// 提交
const waitConfirm = ref(false)
function confirmUser(){
  editUserRef.value.validate(valid => {
    if(valid){
      waitConfirm.value = true
      editUser(userForm.value).then(response => {
        ElMessage.success(t('tip.editSuccess'))
        emit('success')
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(()=>{
        waitConfirm.value = false
      })
    }
  })
}

const editRules = {
  name: [{required: true, message: t('holder.plsInputName'), trigger: 'blur'}],
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'blur'}],
  emailAddress: [{required: true, message: t('holder.plsInputEmailAddress'), trigger: 'blur'}],
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'blur'}],
  role: [{required: true, message: t('holder.plsInputRole'), trigger: 'blur'}],
  nid: [{required: true, message: t('holder.plsInputNid'), trigger: 'blur'}],
}

</script>

<style scoped>
</style>