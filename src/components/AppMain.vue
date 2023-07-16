<template>
  <div class="main">
    <!-- 地址生成表单 -->
    <div class="addr-generate">
      <span class="form-header">{{ "地址生成" }}</span>
      <el-form :model="genForm" label-width="auto">
        <el-form-item label="nid" prop="nid">
          <el-input v-model="genForm.nid" placeholder="请输入nid"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="genForm.password" placeholder="请输入密码" show-password>
          </el-input>
        </el-form-item>
        <el-form-item label="前缀" prop="prefix">
          <el-input v-model="genForm.prefix" placeholder="请输入标准格式的ISP地址前缀(选填，例如2001:0250)"></el-input>
        </el-form-item>
        <el-form-item label="后缀" prop="suffix">
          <el-input v-model="genForm.suffix" placeholder="请输入64位地址后缀(选填)"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="onSubmit()">{{ "生成地址" }}</el-button>
      </div>
    </div>

    <!-- 生成地址表格 -->
    <div>
      <div class="addrGen-table">
        <el-table :data="addrGenData" :header-cell-style="{ 'text-align': 'center' }" v-show="addrGenVisible">
          <el-table-column prop="message" label="ipv6地址" width="300" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="block"></div>
    </div>
    
    <!-- 地址溯源 -->
    <div class="addr-trace">
      <span class="form-header">{{ "地址溯源" }}</span>
      <el-form :model="traceForm" label-width="auto">
        <el-form-item width="100%" label="ipv6地址">
          <el-input v-model="traceForm.input" placeholder="请输入ipv6地址"></el-input>
        </el-form-item>
        <el-form-item width="100%" label="ISP前缀">
          <el-input v-model="traceForm.prefix" placeholder="请输入标准格式的ISP地址前缀(选填，例如2001:0250)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit2()">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="addrTrace-table">
        <el-table :data="addrTraceData" :header-cell-style="{ 'text-align': 'center' }" v-show="addrTraceVisible">
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

  </div>
</template>



<script>
const axios = require("axios");
export default {
  name: 'AppMain',
  data() {
    return {
      genForm: {
        nid: '',
        password: '',
        prefix: '',         // ISP地址前缀
        suffix: '',         // 5G专网中64位地址后缀
      },
      traceForm: {
        input: '',
        prefix: ''
      },
      addrGenVisible: false,
      addrTraceVisible: false,
      addrGenData: [],
      addrTraceData: []
    }
  },
  methods: {
    onSubmit() {
      this.$http.post("http://10.12.190.31:2233/addressGeneration/creatPortWithRealIPv6Addr", {
        /*  this.$http.post("http://10.12.180.45:2233/addressGeneration/getIPv6Addr", { */
        nid: this.genForm.nid,
        password: this.genForm.password,
        prefix: this.genForm.prefix,
        suffix: this.genForm.suffix
      }).then(res => {
        this.addrGenData[0] = res.data
        this.addrGenData = JSON.parse(JSON.stringify(this.addrGenData))
        /* console.log(this.addrGenData[0].message) */
        this.addrGenVisible = true
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
      // console.log(this.addrGenData)
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

        queryAddress: this.traceForm.input,
        prefix: this.traceForm.prefix
      }).then(res => {
        this.addrTraceData[0] = res.data
        this.addrTraceData = JSON.parse(JSON.stringify(this.addrTraceData))
        // console.log(this.addrTraceData)
        this.addrTraceVisible = true
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
  margin: 0 35%;
}

.addr-generate{
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.addr-trace{
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.form-header{
  font-size: 20px;
  font-weight: bold;
  color: #f8f9fa;
  font-family:'Times New Roman', Times, serif, Georgia,"Microsoft YaHei",sans-serif;
  margin-bottom: 30px;
  text-align: left;
}

.addrTrace-table {
  width: 100%;
  margin: auto;
  margin-top: 80px;
  width: 891px;
  opacity: 0.75;
  color: black;
  font-weight: 600px;
  text-align: center;
}

.addrGen-table {
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
