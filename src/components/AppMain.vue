<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="nid">
        <el-input v-model="formInline.nid" placeholder="请输入nid"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formInline.password" placeholder="请输入密码" show-password>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">生成地址</el-button>
      </el-form-item>
    </el-form>
    <div class="tablestyle2">
      <el-table :data="tableData" :header-cell-style="{ 'text-align': 'center' }" v-show="tableBool">
        <el-table-column prop="message" label="ipv6地址" width="300" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="block"></div>

    <el-form :inline="true" :model="formInline2" class="demo-form-inline">
      <el-form-item width="100%" class="form2">
        <el-input v-model="formInline2.input" placeholder="请输入ipv6地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit2()">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tablestyle">
      <el-table :data="tableData2" :header-cell-style="{ 'text-align': 'center' }" v-show="tableBool2">
        <el-table-column prop="status" label="状态" width="80" align="center">
        </el-table-column>
        <el-table-column prop="message" label="信息" width="160" align="center">
        </el-table-column>
        <el-table-column prop="userID" label="用户ID" width="160" align="center">
        </el-table-column>
        <el-table-column prop="phoneNumber" label="手机号码" width="160" align="center">
        </el-table-column>
        <el-table-column prop="registerTime" label="注册时间" width="160" align="center">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" width="160" align="center">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>



<script>
const axios = require("axios");
export default {
  name: 'AppMain',
  data() {
    return {
      formInline: {
        nid: '',
        password: ''
      },
      formInline2: {
        input: ''
      },
      tableBool: false,
      tableBool2: false,
      tableData: [],
      tableData2: []
    }
  },
  methods: {
    onSubmit() {
      this.$http.post("http://10.12.190.31:2233/addressGeneration/creatPortWithRealIPv6Addr", {
        /*  this.$http.post("http://10.12.180.45:2233/addressGeneration/getIPv6Addr", { */
        nid: this.formInline.nid,
        password: this.formInline.password
      }).then(res => {
        this.tableData[0] = res.data
        this.tableData = JSON.parse(JSON.stringify(this.tableData))
        /* console.log(this.tableData[0].message) */
        this.tableBool = true
      })
      // const test = [{
      //   info: '123',
      //   message: '456',
      //   phoneNumber: 12812378,
      //   registerTime: '124dfd0',
      //   status: 1,
      //   userID: 'M202071468',
      //   userName: '张博文'
      // }]
      // console.log(this.tableData)
      // console.log(test)
      // const tmp = {
      //   info: '123',
      //   message: '456',
      //   phoneNumber: 12812378,
      //   registerTime: '124dfd0',
      //   status: 1,
      //   userID: 'M202071468',
      //   userName: '张博文'
      // }
      // let ttmp = JSON.parse(JSON.stringify(tmp))
      // console.log(ttmp)
    },
    onSubmit2() {
      this.$http.post("http://10.12.190.31:2233/addressGeneration/query", {

        queryAddress: this.formInline2.input
      }).then(res => {
        this.tableData2[0] = res.data
        this.tableData2 = JSON.parse(JSON.stringify(this.tableData2))
        // console.log(this.tableData2)
        this.tableBool2 = true
      })
    },
    tableHeaderColor({ row, column, rowIndex, colunmIndex }) {
      if (rowIndex == 0) {
        return 'color:#FFFFFF;font-weight:bold;text-align:center;'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  top: 0;
  /* 距离右边0像素 */
  padding: 100px;
  overflow-y: auto;
  /* 当内容过多时y轴出现滚动条 */
  /* background-color: brown; */
}

.form2 .el-input {
  width: 500px;
}

.tablestyle {
  width: 100%;
  margin: auto;
  margin-top: 80px;
  width: 891px;
  opacity: 0.75;
  color: black;
  font-weight: 600px;
  text-align: center;
}

.tablestyle2 {
  width: 100%;
  margin: auto;
  margin-top: 80px;
  width: 300px;
  opacity: 0.75;
  color: black;
  font-weight: 600px;
  text-align: center;
}

.block {
  height: 120px;
}
</style>
