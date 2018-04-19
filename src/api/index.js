/*
请求函数模块
 */
import ajax from './ajax'
//const Abc = 'http://localhost:3000'
const Abc = '/api'


export const reqHomePages = () => ajax('/homePages');//首页数据
export const reqCategorys = () => ajax('/categorys');//分类数据
export const reqBrand = () => ajax('/brand');//品牌分类
export const reqBrandAll = () => ajax('/brandall');//全部品牌分类


// [1、用户名密码登陆](#4用户名密码登陆)<br/>
export const loginPwd = ({name,pwd}) => ajax(Abc+'/login_pwd',{name,pwd},'POST');
// [2、发送短信验证码](#5发送短信验证码)<br/>
export const sendCode = (phone) => ajax(Abc+'/sendcode',{phone})
// [3、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const loginSms = ({phone,captcha,dynamicPwd}) => ajax(Abc+'/login_sms',{phone,captcha,dynamicPwd},'POST');
