<template>
    <el-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <el-button type="primary">修改个人信息</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          用户名
        </div>
      </template>
      {{userInfo.username}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Message />
          </el-icon>
          邮箱
        </div>
      </template>
      {{userInfo.email}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          地址
        </div>
      </template>
      {{userInfo.address}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Lock />
          </el-icon>
          密码
        </div>
      </template>
      {{userInfo.password}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Iphone />
          </el-icon>
          电话号码
        </div>
      </template>
      {{ userInfo.phone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <ChatDotRound />
          </el-icon>
          真实姓名
        </div>
      </template>
     {{ userInfo.real_name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Bell />
          </el-icon>
          用户状态
        </div>
      </template>
      {{ userInfo.status }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import {
  User,
  Message,
  Location,
  Lock,
  Iphone,
  ChatDotRound,
  Bell
} from '@element-plus/icons-vue'

const userInfo = {
  username:'xx',
  password:'xx',
  email:'xx',
  real_name:'xx',
  phone:'xx',
  address:'xx',
  status:'xx'
}
</script>

<style>

</style>