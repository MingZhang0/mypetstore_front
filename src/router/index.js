//用于创建整个应用的路由器
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
//引入组件
import UserLogin from "../components/UserLogin.vue"
import UserRegister from "../components/UserRegister.vue"
import GoodsManage from "../components/GoodsManage.vue"
import OrderManage from "../components/OrderManage.vue"
import UserManage from "../components/UserManage.vue"
import MainPage from "../components/MainPage.vue"
import ModifyUser from "../components/UserList.vue"
import AddGood from "../components/AddGood.vue"
import AddOrder from "../components/AddOrder.vue"
const routes = [
  {
    path:'/',
    redirect:'/userlogin'
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component:MainPage,
    children:[
      {
        path: 'goodsManage',
        name: 'goodsManage',
        component: GoodsManage
      },
      {
        path: 'orderManage',
        name: 'orderManage',
        component: OrderManage
      },
      {
        path: 'userManage',
        name: 'userManage',
        component: UserManage
      },
      {
        path: 'modifyUser',
        name: 'modifyUser',
        component: ModifyUser
      },
      {
        path: 'addOrder',
        name: 'addOrder',
        component: AddOrder
      },
      {
        path: 'addGood',
        name: 'addGood',
        component: AddGood
      },
    ]
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    component: UserLogin
  },
  {
    path: '/userregister',
    name: 'userregister',
    component: UserRegister
  },
]


// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;


