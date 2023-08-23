import axios from 'axios';
import store from '../store/index';
import i18n from '../locales/i18n';
import router from '../router/index';

const service = axios.create({ // 生成一个axios实例
  timeout: 5000, // 请求超时时间
  headers: {
	'Content-Type': 'application/json',
  },
  transformRequest: data => JSON.stringify(data)
});

// 请求拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
    return Promise.reject(error);
});

// 错误码
export const CodeUnknown = 10000
export const CodeNeedLogin = 10001
export const CodeRegisterFail = 10002       // 用户注册失败
export const CodeGenerateFail = 10003       // 地址生成失败
export const CodeQueryFail = 10004          // 地址查询失败
export const CodeWrongPasswd = 10005
export const CodeNeedNID = 10006            // 缺少NID，需要注册
export const CodeGetKeyFail = 10007         // 获取密钥出错
export const CodeDecryptFail = 10008        // 解密出错
export const CodeEncryptFail = 10009        // 加密出错
export const CodeGetUserFail = 10010        // 获取用户失败

function getMsgByCode(code) {
  switch(code) {
    case 404:
      return i18n.global.t('error.server')
    case 500:
      return i18n.global.t('error.server')
    case CodeNeedLogin:
      ElMessageBox.alert(i18n.global.t('error.needLogin'), i18n.global.t('error.loginTimeout'), {
        confirmButtonText: i18n.global.t('confirm'),
        callback: action => {
          store.commit('setUsername')
          store.commit('setNickname')
          store.commit('setIdentity')
          router.replace({
            name: 'Login'
          })
        },
      })
      return i18n.global.t('error.needLogin')
    case CodeRegisterFail:
      return i18n.global.t('error.registerFail')
    case CodeGenerateFail:
      return i18n.global.t('error.generateAddressFail')
    case CodeQueryFail:
      return i18n.global.t('error.queryAddressFail')
    case CodeWrongPasswd:
      return i18n.global.t('error.wrongPasswd')
    case CodeNeedNID:
      return i18n.global.t('error.missingNID')
    case CodeGetKeyFail:
      return i18n.global.t('error.getKeyFail')
    case CodeDecryptFail:
      return i18n.global.t('error.decryptFail')
    case CodeEncryptFail:
      return i18n.global.t('error.encryptFail')
    case CodeGetUserFail:
      return i18n.global.t('error.getUserFail')
    default:
      return i18n.global.t('error.unknown')
  }
}

// 响应拦截器
service.interceptors.response.use(response => {
  // 响应码 2xx
  return response;
}, error => {
  let rsp;
  if (error.response) { // 有回包，但响应码不是2XX
    rsp = error.response
    if (typeof rsp.data != 'object') {
      rsp.data = {
        code: +rsp.status,
        msg: rsp.data
      }
    }
  } else if (error.request) { // 没有回包
    rsp = {
      request: error.request,
      data: {
        code: CodeUnknown,
      }
    }
  } else { // 设置Request时出错
    rsp = {
      data: {
        code: CodeUnknown,
      }
    }
  }
  // 错误处理
  rsp.data.msg = getMsgByCode(rsp.data.code)
  return Promise.reject(rsp);
});

export default service;