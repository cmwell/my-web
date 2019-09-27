<template>
<div class="content" >
  <h1><b style="color: white">well_zh管理中心</b></h1>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" style="color: #fbfffd" >
      <el-input v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" style="color: black">
      <el-input  v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button  type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<style>
  @import "myhome.css";
</style>
<script>
import myhome from './myhome.js'
export default myhome
</script>
