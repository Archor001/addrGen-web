<template>
    <div class="main">
      <el-form :model="form" label-width="80px" class="formOut">
        <el-form-item label="学号">
          <el-input v-model="form.userID" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phoneNumber" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">用户注册</el-button>
        </el-form-item>
      </el-form>
  
      <div class="tablestyle">
        <el-table :data="tableData2" :header-cell-style="{ 'text-align': 'center' }" v-show="tableBool">
          <el-table-column prop="nid" label="NID" width="160" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="160" align="center">
          </el-table-column>
          <el-table-column prop="userID" label="学号" width="160" align="center">
          </el-table-column>
        </el-table>
      </div>
  
    </div>
  </template>
  
  <script>
  const axios = require("axios");
  export default {
    name: 'AppNid',
    data() {
      return {
        form: {
          userID: '',
          password: '',
          phoneNumber: '',
          name: ''
        },
        message: '',
        tableBool: false,
        tableData: [],
        tableData2: []
      }
    },
    methods: {
      onSubmit: function () {
        this.$http.post("http://10.12.190.31:2233/addressGeneration/register", {
          userID: this.form.userID,
          password: this.form.password,
          phoneNumber: this.form.phoneNumber,
          name: this.form.name
        }).then(res => {
          this.tableData[0] = res.data
          this.tableData = JSON.parse(JSON.stringify(this.tableData))
          this.tableData2[0] = this.tableData[0].info
          this.message = this.tableData[0].message
          alert(this.message)
          this.tableData2 = JSON.parse(JSON.stringify(this.tableData2))
          /* console.log(this.tableData2) */
          this.tableBool = true
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
    top: 80px;
    left: 0px; 
    bottom: 0px;
    right: 0px;
    /* 距离右边0像素 */
    padding: 0;
    padding-top: 80px;
    overflow-y: auto;
    /* 当内容过多时y轴出现滚动条 */
  }
  
  .el-input {
    width: 300px;
  }
  
  .tablestyle {
    width: 100%;
    margin: auto;
    margin-top: 80px;
    width: 481px;
    opacity: 0.75;
    color: black;
    font-weight: 600px;
    text-align: center;
  }
  
  .formOut {
    text-align: center;
    padding: 0;
    width: 500px;
    /* background-color: aliceblue; */
    margin-left: 32%;
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
  </style>
  