<template>
  <div class="login-page">
    <div class="login-box">
      <h3 class="title" style="margin-bottom: 30px">{{t('login')}}</h3>
      <div class="login-tip" v-if="loginTip.length > 0">{{ loginTip }}</div>
      <el-form :model="FormDatas" :rules="rules"
        status-icon
        ref="loginForm"
        label-position="left"
        label-width="80px">
          <el-form-item :label="t('label.username')" prop="username" >
            <el-input type="text"
                v-model="FormDatas.username"
                auto-complete="off"
                :placeholder="t('holder.username')"
            ></el-input>
          </el-form-item>
          <el-form-item :label="t('label.password')" prop="password">
            <el-input type="password"
                v-model="FormDatas.password"
                auto-complete="off"
                :placeholder="t('holder.password')"
            ></el-input>
          </el-form-item>
      </el-form>
      <el-button type="primary" class="login-button" @click="onSubmit()" @keyup.enter="onSubmit()">{{t('login')}}</el-button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { login } from '../api/user';
const store = useStore()
const router = useRouter()
const { t } = useI18n()
const loginForm = ref(null)
const loginTip = ref('')
const FormDatas = reactive({
  username: '',
  password: '',
})
const rules = {
  username: [{required: true, message: t('holder.username'), trigger: 'blur'}],
  password: [{required: true, message: t('holder.password'), trigger: 'blur'}]
}
function onSubmit() {
  loginForm.value.validate((valid) => {
    if (valid) {
      // 成功
      login(FormDatas.username, FormDatas.password).then(response => {
        //登录成功
        store.commit('setIdentity', 1)
        router.replace({path: '/'})
      }).catch(error => {
        if (error.msg && error.msg.length > 0)
          loginTip.value = error.msg
      })
    } else {
      return false;
    }
  })
}
</script>

<style scoped>
.login-page {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  background-image: url('../../public/Login.jpg');
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
}
.login-box {
  position: relative;
  top: 25%;
  margin: 0 auto;
  width: 400px;
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0 0 15px #868e96;
  background-position: center top;background-size: cover;
  z-index: 1;
  overflow: hidden;
}
.login-box::after{
  content: '';
  background-position: center top;background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.8);
  z-index: -1;
  filter: blur(5px);
  margin: -10px;
}
.login-page .login-button {
  width: 60%;
  margin: 30px 0;
}
.login-page .login-tip {
  width: 95%;
  margin: 0 auto 15px;
  padding: 10px 0;
  font-size: 15px;
  color: #9f3a38;
  background-color: #fff6f6;
  border: 1px solid #ebcbcc;
  border-radius: 8px;
}
</style>