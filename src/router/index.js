import Vue from 'vue'
import VueRouter from 'vue-router'

// import home from '../pages/home/home.vue'
//import classify from '../pages/classify/classify.vue'
//import shopCart from '../pages/shopCart/shopCart.vue'
//import myPet from '../pages/myPet/myPet.vue'
//import classSort from '../pages/classify/classSort/classSort.vue'
//import brand from '../pages/classify/brand/brand.vue'
//import brandlist from '../pages/classify/brand/brandlist/brandlist.vue'
//路由懒加载
const home =() => import('../pages/home/home.vue')
const classify =() => import('../pages/classify/classify.vue')
const shopCart =() => import('../pages/shopCart/shopCart.vue')
const myPet =() => import('../pages/myPet/myPet.vue')
const classSort =() => import('../pages/classify/classSort/classSort.vue')
const brand =() => import('../pages/classify/brand/brand.vue')
const brandlist =() => import('../pages/classify/brand/brandlist/brandlist.vue')


Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/classify',
      component:classify,
      meta:{
        showFooter:true
      },
      children:[
        {
          path:'/classify/classsort',
          component:classSort,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/classify/brand',
          component:brand,
          meta:{
            showFooter:true
          }
        },
        {
          path:'',
          redirect:'/classify/classsort'
        }
      ]
    },
    {
      path:'/shopcart',
      component:shopCart
    },
    {
      path:'/mypet',
      component:myPet
    },
    {
      path:'/classify/brand/list',
      component:brandlist
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]

})
