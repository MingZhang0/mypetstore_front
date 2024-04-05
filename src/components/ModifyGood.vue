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
  </el-form>
</template>

<script setup>
const selectedData = {
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
}

</script>

<style>

</style>