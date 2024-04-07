import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'
export const useOrderStore = defineStore('currentOrderList', () => {
  //声明数据
  const currentOrderList = ref([])
  //声明操作数据的方法
  //异步方法
  const serverURLUpdate = 'http://192.168.79.82:8080/orderlist'
  const getOrderList = async () => {
    await axios({
      method:'get',
      url:serverURLUpdate,
      headers:{
        'Authorization': `${localStorage.getItem("token")}`, // 使用Bearer token的方式
        'Content-Type': 'application/json'
      },
    }).then((result) => {
      console.log(result);
      //请求订单列表成功
      if(result.data.status === 0){
        console.log("请求成功");
        currentOrderList.value = result.data.data
      }else{
        //请求订单列表失败
        console.log("请求失败");
    }
  }).catch(function(error){
  console.log(error);
  })
  }
  //声明getters相关
  return {
    currentOrderList,
    getOrderList
  }
})