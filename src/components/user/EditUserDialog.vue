<template>
  <el-dialog :modelValue="modelValue" @update:modelValue="updateVisible" draggable :title="t('label.editUser')">
    <el-form :model="userForm" :rules="editRules" ref="editUserRef" label-width="120px" style="margin-right:25px">
      <el-form-item :label="t('label.phoneNumber')" prop="phoneNumber">
        <el-input v-model="userForm.phoneNumber" disabled></el-input>
      </el-form-item>
      <el-form-item :label="t('label.username')" prop="username">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item :label="t('label.password')" prop="password">
        <el-input v-model="userForm.password" type="password" :show-password="true" :placeholder="t('holder.plsInputPassword')"></el-input>
      </el-form-item>
    </el-form>
    <div style="text-align: center">
      <el-button type="danger" @click="updateVisible(false)">{{t("cancel")}}</el-button>
      <el-button type="primary" :loading="waitConfirm" @click="confirmUser">{{t("confirm")}}</el-button>
    </div>
  </el-dialog>
</template>

<script setup>
import { toRefs, ref, onMounted, watch } from 'vue';
import { editUser } from '../../api/user'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const props = defineProps({
  modelValue: Boolean,
  user:{
    type: Object,
    default:{
      userID: '',
      username: '',
      password: '',
      nid: '',
      phoneNumber: '',
    }
  }
})

const { user } = toRefs(props)

const userForm = ref({})
const editUserRef = ref(null)

onMounted(() => {
  userForm.value = JSON.parse(JSON.stringify(user.value))
})

watch(user, () => {
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
      userForm.value.userID = userForm.value.phoneNumber
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
  password: [{required: true, message: t('holder.plsInputPassword'), trigger: 'blur'}],
  username: [{required: true, message: t('holder.plsInputUsername'), trigger: 'blur'}]
}

</script>

<style scoped>
</style>