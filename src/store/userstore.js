import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'
export const useUserStore = defineStore('currentUser', () => {
  //声明数据
  const currentUserInfo = ref({})
  //声明操作数据的方法
  //异步方法
  const setUserInfo = (userInfo) =>{
    currentUserInfo.value = userInfo
  }

  //声明getters相关
  return {
    currentUserInfo,
    setUserInfo
  }
})