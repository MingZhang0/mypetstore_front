<template>
    <h3>商品管理</h3>
    <el-table
    :data="tableData"
    style="width: 100%"
    height="auto">
    <el-table-column
      fixed
      prop="itemid"
      label="商品名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="productid"
      label="商品类别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="categoryid"
      label="商品大类"
      width="120">
    </el-table-column>
    <el-table-column
      prop="img"
      label="商品图片"
      width="120">
      <el-image
      style="width: 100px; height: 100px"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :initial-index="1"
      :preview-teleported="true"
      fit="cover"
      :src="tableData.img"
      :preview-src-list="tableData.previewImgList"
      @load="show()"
      @error="error()"    
    />
    </el-table-column>
    <el-table-column
      prop="listprice"
      label="商品售价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="unitcost"
      label="商品进价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="supplier"
      label="商品供应商"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="商品状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="attr1"
      label="商品描述"
      width="120">
    </el-table-column>
    <el-table-column
      prop="quantity"
      label="商品数量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="descn"
      label="商品信息"
      width="120">
    </el-table-column>
    <el-table-column
      prop="/"
      label="商品操作"
      width="120">
      <el-button type="primary" :icon="Edit" circle  @click="dialogVisible = true"/>
      <el-button type="danger" :icon="Delete" circle @click="dialogVisible = true"/>
    </el-table-column>
  </el-table>

  <el-dialog
    v-model="dialogVisible"
    title="修改商品信息"
    width="500"
    :before-close="handleClose"
  >
    <ModifyGood />
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import AddGood from './AddGood.vue';
import ModifyGood from './ModifyGood.vue';
  const tableData = [
      {
        itemid:'EST-1',
        productid:'FI-SW-01',
        categoryid:'FISH',
        img:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        previewImgList:['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'],
        listprice:'16.50',
        unitcost:'10.00',
        supplier:'11',
        status:'P',
        attr1:'Large',
        quantity:'11',
        descn:'Great companion for up to 75 years'
      }
  ]

  const selectData = {
        categoryid:'FISH',
        img:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        previewImgList:['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'],
        listprice:'16.50',
        unitcost:'10.00',
        supplier:'11',
        status:'P',
        attr1:'Large',
        quantity:'11',
        descn:'Great companion for up to 75 years'
  }


  const show = function(){
    console.log("图片加载成功");
  }
  const error = function(){
    tableData.img = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    tableData.previewImgList = ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg']
  }

  const dialogVisible = ref(false)
</script>

<style>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}

</style>