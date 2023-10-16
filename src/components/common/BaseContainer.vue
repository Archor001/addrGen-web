<template>
  <el-container style="width: 100%;">
    <el-header class="main-header">
      <!--左侧-->
      <div class="menubar" style="left: 0;">
        <slot name="left">
          <div style="display: flex; align-items: center;">
            <System theme="outline" size="20" fill="#dff9fb" style="margin-top:3px;"/>
            <span text class="main-title" style="margin-left: 10px;">{{t('label.systemTitle')}}</span>
          </div>
        </slot>
      </div>

      <!--中部-->
      <div class="menubar menubar-center" style="margin-left: -150px;">
        <slot name="center"></slot>
      </div>
      
      <!--右侧-->
      <div class="menubar menubar-right" style="right: 0;">
        <el-dropdown @command="handleSelectLang">
            <i class="el-icon translate-icon el-tooltip__trigger">
              <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path>
              </svg>
            </i>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        <slot name="right">
          <div class="menu-button">
            <el-button @click="handleLogin" v-if="isUser" text>{{ t('title.switchToAdmin') }}</el-button>
            <el-button @click="handleLogout" v-else text>{{ t('logout') }}</el-button>
          </div>
        </slot>
      </div>
    </el-header>

    <el-divider class="main-header-divider" />

    <el-main class="main-body">
      <slot></slot>
    </el-main>

    <el-dialog v-model="loginVisible" width="25%" :title="t('login')" draggable>
      <el-form :model="loginForm" :rules="loginRules" ref="loginRef" status-icon label-width="auto">
        <el-form-item :label="t('label.username')" prop="username">
          <el-input type="text"
              v-model="loginForm.username"
              auto-complete="off"
              :placeholder="t('holder.username')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="t('label.password')" prop="password">
          <el-input type="password"
              v-model="loginForm.password"
              auto-complete="off"
              :placeholder="t('holder.password')"
              @keyup.enter="confirmLogin()"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login-button" @click="confirmLogin()" :loading="waitLogin">{{t('login')}}</el-button>
    </el-dialog>

  </el-container>
</template>

<script setup>
import { System } from '@icon-park/vue-next';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { ref, computed, reactive } from 'vue';
import { login, UserIdentityAdmin, UserIdentityUser } from '../../api/user';
const { t } = useI18n()
const router = useRouter();
const store = useStore();

function handleSelectLang(lang) {
  store.commit('changeLocale', lang)
}

const isUser = computed(() => {
  return store.state.identity != UserIdentityAdmin
})

// 登录，弹窗
const loginVisible = ref(false)
const loginForm = ref({})
const loginRef = ref(null)
function handleLogin(){
  loginVisible.value = true
}

const waitLogin = ref(false)
function confirmLogin(){
  if(waitLogin.value)
    return
  loginRef.value.validate((valid)=>{
    if(valid){
      waitLogin.value = true
      login(loginForm.value.username, loginForm.value.password).then(response => {
        store.commit('setIdentity', UserIdentityAdmin)
        router.replace({path: '/'})
        ElMessage.success(t('tip.loginSuccess'))
      }).catch(res => {
        ElMessage.error(res.data.msg)
      }).finally(()=>{
        waitLogin.value = false
      })
    } else {
      return false;
    }
  })
}

// 注销
function handleLogout() {
  store.commit('setIdentity', UserIdentityUser)
  router.replace({path: '/'});
}

const loginRules = reactive({
  username: [{ required: true, message: t('holder.plsInputUsername'), trigger: 'blur' }],
  password: [{ required: true, message: t('holder.plsInputPassword'), trigger: 'blur' }],
})

</script>

<style scoped>
.main-header {
  position: sticky;
  top: 0;
  background-color: #1f2d3d;
  color: white;
  z-index: 50;
  align-self: center;
  width: 100%;
  padding: 0 5vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-header-divider {
  margin: 0;
  position: sticky;
  top: 60px;
  z-index: 50;
}
.main-header .menubar-center {
  align-self: stretch;
  display: flex;
  align-items: stretch;
}
.main-header .user-name {
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}
.main-body{
  width: 90%;
  text-align: center;
  margin: 0 auto;
}
.menubar-right{
  display: flex;
  align-items: center;
}
.translate-icon {
  cursor: pointer;
  font-size: 20px;
  position: relative;
  top: 1px;
  color: #bfcbd9;
}
.menu-button .el-button{
  margin-left: 10px;
  font-size: 18px;
  color: #bfcbd9;
}
.menu-button :deep(.el-button){
  padding: 8px 8px;
}
.menu-button :deep(.el-button.is-text:hover){
  background-color: #001528;
}
.login-button{
  width: 30%;
  margin-top: 10px;
}
.main-title{
  font-size: 20px;
  font-weight: bold;
  color: #dff9fb;
}
</style>