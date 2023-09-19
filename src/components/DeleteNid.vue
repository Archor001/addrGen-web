<template>
  <div class="delete-container">
    <el-input v-model="userContent" placeholder="请输入用户的Nid或者userID" style="width: 30%">
      <template #append>
        <el-button type="primary" @click="handleDeleteUser">删除</el-button>
      </template>
    </el-input>
    <span v-if="!!result && result.length > 0" class="result-title" style="width: 40%;">{{ result }}</span>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'DeleteNid',
  data(){
    return {
      userContent: '',
      result: ''
    }
  },
  methods:{
    handleDeleteUser(){
      this.$http.post("http://10.12.190.31:2233/addressGeneration/delete", {
        userContent: this.userContent
      }).then(response => {
        this.result = response.data.message
      })
    }
  }
}

</script>

<style scoped>
.delete-container{
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.result-title{
  color: antiquewhite;
  font-size: 18px;
}
</style>