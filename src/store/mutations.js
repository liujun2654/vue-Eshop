/*
状态管理对象
 */
import {
  RECEIVE_HOMEPAGES,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECEIVE_BRAND_ALL,
  RECEIVE_USER_INFO
} from './mutation-types'
export default {
  [RECEIVE_HOMEPAGES](state,{homePages}){
    state.homeMenus = homePages.menus;
    state.homeDatas = homePages.datas;
    state.homeActivity = homePages.activity
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_BRAND_ALL](state,{brandall}){
    state.brandall = brandall
  },
  [RECEIVE_USER_INFO](state,{user}){
    state.userInfo = user
  }
}
