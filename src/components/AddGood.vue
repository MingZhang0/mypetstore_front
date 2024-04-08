<template>
  <el-form
    style="max-width: 600px"
    ref="formData"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    status-icon
  >
  <!-- 踩坑：在同时使用ref和:model时二者的属性值不能同名否则会会无法输入 -->
    <el-form-item label="商品名称" prop="itemid">
      <el-input v-model="ruleForm.itemid" />
    </el-form-item>
    <el-form-item label="商品大类" prop="categoryid">
      <el-select v-model="ruleForm.categoryid" placeholder="商品大类">
        <el-option label="BIRDS" value="Birds" />
        <el-option label="CATS" value="Cats" />
        <el-option label="DOGS" value="Dogs" />
        <el-option label="FISH" value="Fish" />
        <el-option label="REPTILES" value="Reptiles" />
      </el-select>
    </el-form-item>
    <el-form-item label="商品类别" prop="productid">
      <el-input v-model="ruleForm.productid" />
    </el-form-item>
    <el-form-item label="商品图片" prop="img">
      <el-input v-model="ruleForm.img" />
    </el-form-item>
    <el-form-item label="商品售价" prop="listprice">
      <el-input v-model="ruleForm.listprice" />
    </el-form-item>
    <el-form-item label="商品进价" prop="unitcost">
      <el-input v-model="ruleForm.unitcost" />
    </el-form-item>
    <el-form-item label="商品供应商" prop="supplier">
      <el-input v-model="ruleForm.supplier" />
    </el-form-item>
    <el-form-item label="商品状态" prop="status">
      <el-radio-group v-model="ruleForm.status">
        <el-radio value="P">P</el-radio>
        <el-radio value="S">S</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="商品数量" prop="quantity">
      <el-select-v2
        v-model="ruleForm.quantity"
        placeholder="商品数量"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="商品描述" prop="attr1">
      <el-input v-model="ruleForm.attr1" />
    </el-form-item>
    <el-form-item label="类别描述" prop="descn">
      <el-input v-model="ruleForm.descn" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">
        Create
      </el-button>
      <el-button @click="resetForm()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue"
import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
const formData = ref(null)
const ruleForm = reactive({
  itemid:'',
  productid:'',
  categoryid:'',
  img:'',
  listprice:'',
  unitcost:'',
  supplier:'',
  status:'',
  attr1:'',
  quantity:'',
  descn:'',
})
const rules = reactive({
  itemid: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
    { min: 3, max: 10, message: '商品名称长度应为3-10', trigger: 'blur' },
  ],
  productid: [
    {
      required: true,
      message: '请选择商品大类',
      trigger: 'change',
    },
  ],
  categoryid: [
    {
      required: true,
      message: '请输入商品类别',
      trigger: 'blur',
    },
  ],
  listprice: [
    {
      type: 'string',
      required: true,
      message: '请输入商品售价',
      trigger: 'blur',
    },
    {
      min: 0, message: '商品售价不能小于0', trigger: 'blur'
    }
  ],
  unitcost: [
    {
      type: 'string',
      required: true,
      message: '请输入商品进价',
      trigger: 'blur',
    },
    {
      min: 0, message: '商品售价不能小于0', trigger: 'blur'
    }
  ],
  supplier: [
    {
      type: 'string',
      required: true,
      message: '请输入商品供应商',
      trigger: 'blur',
    },
  ],
  status:[
    {
      required: true,
      message: '请选择商品状态',
      trigger: 'change',
    }
  ],
  attr1: [
    {
      required: true,
      message: '请输入商品描述',
      trigger: 'blur',
    },
  ],
  quantity:[
    {
      required: true,
      message: '请选择商品数量',
      trigger: 'change',
    }
  ],
  descn: [
    { required: true, message: '请输入详细描述', trigger: 'blur' },
  ],
})
const options = Array.from({ length: 100 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

const serverURL = 'http://localhost:8080/newitem'
const token = localStorage.getItem("token")
// 发送表单数据
const submitForm = async function(){
  axios({
   method:'post',
   url: serverURL,
   headers:{
    'Authorization': `${localStorage.getItem("token")}`, // 使用Bearer token的方式
    'Content-Type': 'application/json'  
   },
   data:JSON.stringify(ruleForm)
  }).then((result) => {
    console.log(result);
    //新增商品成功
    if(result.data.status === 0){
      //利用ElementUI信息提示组件返回登录信息
      ElMessage({
                message: result.data.message,
                type: "success",
              });
      resetForm()
    }else{
      //新增商品失败
      ElMessage.error(result.data.message);
    }
  }).catch(function(error){
    console.log(error);
  })
}

const resetForm = function(){
  if (formData.value) {  
    formData.value.resetFields(); // 使用表单的 resetFields 方法清空表单  
  } 
}

</script>

<style>

</style>