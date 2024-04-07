<template>
  <el-form
    style="max-width: 600px"
    ref="orderFormData"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    status-icon
  >
    <el-form-item label="订单编号" prop="orderid">
      <el-input v-model="ruleForm.orderid" />
    </el-form-item>

    <el-form-item label="下单用户" prop="userid">
      <el-input v-model="ruleForm.userid" />
    </el-form-item>

    <el-form-item label="下单日期" required>
      <el-col :span="11">
        <el-form-item prop="orderdate">
          <el-date-picker
            v-model="ruleForm.orderdate"
            type="date"
            label="选择下单日期"
            placeholder="选择下单日期"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="ordertime">
          <el-time-picker
            v-model="ruleForm.ordertime"
            label="选择下单时间"
            placeholder="选择下单时间"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="发货地址" prop="shipfromadd">
      <el-input v-model="ruleForm.shipfromadd" />
    </el-form-item>

    <el-form-item label="发货地址邮编" prop="shipfromzip">
      <el-input v-model="ruleForm.shipfromzip" />
    </el-form-item>

    <el-form-item label="派送快递" prop="courier">
      <el-select v-model="ruleForm.courier" placeholder="派送快递">
        <el-option label="中国邮政" value="中国邮政" />
        <el-option label="顺丰快递" value="顺丰快递" />
        <el-option label="韵达快递" value="韵达快递" />
        <el-option label="极兔快递" value="极兔快递" />
        <el-option label="中通快递" value="中通快递" />
        <el-option label="申通快递" value="申通快递" />
      </el-select>
    </el-form-item>

    <el-form-item label="送达地址" prop="shiptoadd">
      <el-input v-model="ruleForm.shiptoadd" />
    </el-form-item>

    <el-form-item label="送达地址邮编" prop="shiptozip">
      <el-input v-model="ruleForm.shiptozip" />
    </el-form-item>

    <el-form-item label="买家姓" prop="reallastname">
      <el-input v-model="ruleForm.reallastname" />
    </el-form-item>

    <el-form-item label="买家名" prop="realfirstname">
      <el-input v-model="ruleForm.realfirstname" />
    </el-form-item>

    <el-form-item label="买家银行卡号" prop="creditcard">
      <el-input v-model="ruleForm.creditcard" />
    </el-form-item>

    <el-form-item label="总价" prop="totalprice">
      <el-input v-model="ruleForm.totalprice" />
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="submitForm()">
        Create
      </el-button>
      <el-button @click="resetForm(orderFormData)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue"
import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
const orderFormData = ref(null)
const ruleForm = reactive(
  {
  orderid:'',
  userid:'',
  orderdate:'',
  ordertime:'',
  shipfromadd:'',
  shipfromzip:'',
  courier:'',
  shiptoadd:'',
  shiptozip:'',
  realfirstname:'',
  reallastname:'',
  creditcard:'',
  totalprice:'',
}
)
const rules = reactive({
  orderid: [
    { required: true, message: '请输入订单编号', trigger: 'blur' },
  ],
  userid: [
    {
      required: true,
      message: '请输入下单用户',
      trigger: 'blur',
    },
  ],
  orderdate: [
    {
      required: true,
      message: '请输入下单日期',
      trigger: 'change',
    },
  ],
  ordertime: [
    {
      required: true,
      message: '请输入下单时间',
      trigger: 'change',
    },
  ],
  shipfromadd: [
    {
      required: true,
      message: '请输入发货地址',
      trigger: 'blur',
    }
  ],
  shipfromzip: [
    {
      type: 'string',
      required: true,
      message: '请输入发货地址邮编',
      trigger: 'blur',
    },
  ],
  courier:[
    {
      required: true,
      message: '请选择派送快递',
      trigger: 'change',
    }
  ],
  shiptoadd: [
    {
      required: true,
      message: '请输入送达地址',
      trigger: 'blur',
    },
  ],
  shiptozip:[
    {
      required: true,
      message: '请选择送达地址邮编',
      trigger: 'change',
    }
  ],
  real_name: [
    { required: true, message: '请输入下单用户姓名', trigger: 'blur' },
  ],
  creditcard: [
    { required: true, message: '请输入下单用户银行卡号', trigger: 'blur' },
  ],
  totalprice: [
    { required: true, message: '请输入总价', trigger: 'blur' },
  ],
})

const serverURL = 'http://192.168.79.82:8080/neworder'
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
   data:JSON.stringify(this.ruleForm)
  }).then((result) => {
    console.log(result);
    //新增订单成功
    if(result.data.status === 0){
      //利用ElementUI信息提示组件返回登录信息
      ElMessage({
                message: result.data.message,
                type: "success",
              });
    }else{
      //新增订单失败
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