<template>
  <div class="login">
    <div id="app">
      <el-container>
        <el-header>
          <div id="headl" class="one">IPv6真实源地址溯源系统</div>
          <div id="headr" class="two">
            <router-link :to="{ path: '/' }">地址管理</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link :to="{ path: '/nid' }">NID管理</router-link>
            <router-link :to="{ path: '/delete'}" style="margin-left: 35px;">删除用户</router-link>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import AppNid from './components/AppNid.vue'
import AppMain from './components/AppMain.vue'
import DeleteNid from './components/DeleteNid.vue';

export default {
  name: 'App',
  methods: {
  }
}
</script>

<style>
.login {
  background-image: url('./assets/image/2858.png');
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  overflow-y: auto;
}

#headl {
  text-align: left;
  padding: 23px;
  color: aliceblue;
  font-size: 20px;
  font-weight: boldery;
  /* background-color: aliceblue; */
}

.one,
.two {
  width: 50%;
  float: left;
  box-sizing: border-box;
}

#headr {
  padding: 25px;
  text-align: right;
  color: blanchedalmond;
  box-sizing: border-box;
  /* background-color: aliceblue; */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.el-main {
  position: absolute;
  top: 100px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto;
  /* 当内容过多时y轴出现滚动条 */
}

.el-header {
  position: absolute;
  height: 120px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(45, 58, 75, 0.5);
  /* padding-bottom: 10px; */
  /* background-color: black; */
}

.el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: blanchedalmond;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: normal;
}

/*设置点击前的样式 */
a {
  text-decoration: none;
  color: blanchedalmond;
}

/*设置点击后的样式 */
.router-link-active {
  text-decoration: none;
  color: blanchedalmond;
}
</style>
