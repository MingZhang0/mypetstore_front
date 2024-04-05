<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <TopBanner />
      </el-header>

      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏导航 -->
          <el-row class="tac">
            <el-col :span="20">
              <h1 class="mb-2">宠物商店</h1>
              <el-menu
                default-active="2-goodsManage"
                class="el-menu-vertical-demo"
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                :unique-opened="true"
              >
              <!-- 用户 -->
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><Avatar /></el-icon>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-userManage">
                      <!-- 在页面中写router-link的to路径时需要加上父路径 -->
                      <router-link to="/mainPage/userManage" @click="getUserList()">
                        个人信息
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                  <!-- <el-menu-item-group title="Group Two">
                    <el-menu-item index="addUser">
                      <router-link to="/mainPage/addUser">
                        新增用户
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group> -->
                </el-sub-menu>
                <!-- 商品 -->
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><GoodsFilled /></el-icon>
                    <span>商品管理</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="2-goodsManage">
                      <router-link to="/mainPage/goodsManage">
                        商品列表
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="addGood">
                      <router-link to="/mainPage/addGood">
                        新增商品
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <!-- 订单 -->
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><List /></el-icon>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="orderManage">
                      <router-link to="/mainPage/orderManage">
                        订单列表
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="addOrder">
                      <router-link to="/mainPage/addOrder">
                        新增订单
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <!-- 指定组件呈现位置 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import axios from 'axios'
import TopBanner from "../components/TopBanner.vue";
import {
  List,
  GoodsFilled,
  Location,
  Avatar
} from '@element-plus/icons-vue'
import { onMounted } from 'vue'
//  用户信息
const userInfo = {

}
// 生命周期钩子 onMounted 在组件挂载后执行  
onMounted(() => {
  getUserInfo()
})  
// 获取用户信息方法定义  
function getUserInfo() {  
  // 设置请求服务器的地址  
  const serverURL = 'http://localhost:8099/users'  
  axios.get(serverURL)  
    .then((result) => {  
      console.log(result)  
      // 假设服务器返回的是一个用户数组，我们可以将其赋值给userList  
      userList.value = result.data  
    })  
    .catch((error) => {  
      console.error('Error fetching user list:', error)  
    })  
}  
</script>

<style>
.router-link-active {
  text-decoration: none;
  color: green;
}
a {
  text-decoration: none;
  color: black;
}
</style>
