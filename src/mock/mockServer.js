import Mock from 'mockjs'
import data from './data.json'


Mock.mock('/homePages',{code:0,data:data.homePages});//首页数据
Mock.mock('/categorys',{code:0,data:data.categorys});//分类数据
Mock.mock('/brand',{code:0,data:data.brand});//品牌分类
Mock.mock('/brandall',{code:0,data:data.brandAll});//全部品牌分类


//不需要向外暴露
