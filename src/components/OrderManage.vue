<template>
  <div>
    <h3>订单管理</h3>
    <el-table
    :data="orderList"
    style="width: 100%"
    height="auto">
    <el-table-column
      fixed
      prop="orderid"
      label="订单编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="userid"
      label="下单用户"
      width="120">
    </el-table-column>
    <el-table-column
      prop="orderdate"
      label="下单日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ordertime"
      label="下单时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shipfromadd"
      label="发货地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shipfromzip"
      label="发货地址邮编"
      width="120">
    </el-table-column>
    <el-table-column
      prop="courier"
      label="派送快递"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shiptoadd"
      label="送达地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="real_name"
      label="买家姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="creditcard"
      label="买家银行卡号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="totalprice"
      label="总价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="/"
      label="商品操作"
      width="120">
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-table-column>
  </el-table>
  </div>
</template>

<script setup>
  import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
const orderList = [
  {
    orderid:'aaa',
    userid:'xxx',
    orderdate:'xxx',
    ordertime:'xxx',
    shipfromadd:'xxxx',
    shipfromzip:'331213',
    courier:'中国邮政',
    shiptoadd:'aaaaa',
    real_name:'xxxx',
    creditcard:'xxxxx',
    totalprice:'122222'
  }
]
</script>

<style>

</style>