/*
vuex 的actions模块
 */

import {reqHomePages,reqCategorys,reqBrand,reqBrandAll} from '../api'
import {
  RECEIVE_HOMEPAGES,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECEIVE_BRAND_ALL,
  RECEIVE_USER_INFO
} from './mutation-types'
export default {
  //异步获取首页数据
  async getHomePages({commit},db){
    const result = await reqHomePages()
    if(result.code===0){
      const homePages = result.data
      commit(RECEIVE_HOMEPAGES,{homePages})
      db&&db();
    }
  },
  //异步获取分类数据
  async getCategorys({commit},db){
    const result = await reqCategorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
      db&&db()
    }
  },
  //异步获取品牌数据
  async getBrand({commit},db){
    const result = await reqBrand()
    if(result.code===0){
      const brand = result.data
      commit(RECEIVE_BRAND,{brand})
      db&&db()
    }
  },
  //异步获取品牌数据
  async getBrandAll({commit},db){
    const result = await reqBrandAll()
    if(result.code===0){
      const brandall = result.data
      commit(RECEIVE_BRAND_ALL,{brandall})
      db&&db()
    }
  },
  //保存用户信息
  saveUserInfo({commit},user){
    commit(RECEIVE_USER_INFO,{user})
  }
}
