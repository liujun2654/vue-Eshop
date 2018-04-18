/*
请求函数模块
 */
import ajax from './ajax'



export const reqHomePages = () => ajax('/homePages');//首页数据
export const reqCategorys = () => ajax('/categorys');//分类数据
export const reqBrand = () => ajax('/brand');//品牌分类


