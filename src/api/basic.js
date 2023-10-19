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
export const CodeNeedLogin = 10001          // 需要登录
export const CodeWrongPasswd = 10002        // 密码错误
export const CodeRegisterFail = 10003       // 用户注册失败
export const CodeDeleteUserFail = 10004     // 删除用户失败
export const CodeInvalidPhone = 10005       // 无效手机号码
export const CodeInvalidRole = 10006        // 无效角色
export const CodeInvalidEmail = 10007       // 无效邮箱
export const CodeEditUserFail = 10008       // 修改用户失败
export const CodeNIDNotExist = 10009        // NID不存在
export const CodeFrequentAddress = 10010    // 请勿频繁生成地址
export const CodeGenerateAddressFail = 10011       // 地址生成失败
export const CodeTraceAddressFail = 10012   // 地址溯源失败
export const CodeGetKeyFail = 10013         // 获取密钥出错
export const CodeDecryptFail = 10014        // 解密出错
export const CodeQueryAddressFail = 10015          // 地址查询失败
export const CodeDeleteAddressFail = 10016  // 地址删除失败
export const CodeFlushUserFail = 10017      // 批量获取用户失败
export const CodeNIDApplied = 10018         // 此NID已生成地址
export const CodeBatchGetAddressFail = 10019      //  批量获取地址失败
export const CodeNIDNoAddress = 10020       // 此NID未创建任何地址

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
    case CodeWrongPasswd:
      return i18n.global.t('error.wrongPasswd')
    case CodeRegisterFail:
      return i18n.global.t('error.registerFail')
    case CodeDeleteUserFail:
      return i18n.global.t('error.deleteUserFail')
    case CodeInvalidPhone:
      return i18n.global.t('error.invalidPhone')
    case CodeInvalidRole:
      return i18n.global.t('error.invalidRole')
    case CodeInvalidEmail:
      return i18n.global.t('error.invalidEmail')
    case CodeEditUserFail:
      return i18n.global.t('error.editUserFail')
    case CodeNIDNotExist:
      return i18n.global.t('error.NIDNotExist')
    case CodeFrequentAddress:
      return i18n.global.t('error.frequentAddress')
    case CodeGenerateAddressFail:
      return i18n.global.t('error.generateAddressFail')
    case CodeTraceAddressFail:
      return i18n.global.t('error.traceAddressFail')
    case CodeGetKeyFail:
      return i18n.global.t('error.getKeyFail')
    case CodeDecryptFail:
      return i18n.global.t('error.decryptFail')
    case CodeQueryAddressFail:
      return i18n.global.t('error.queryAddressFail')
    case CodeDeleteAddressFail:
      return i18n.global.t('error.deleteAddressFail')
    case CodeFlushUserFail:
      return i18n.global.t('error.flushUserFail')
    case CodeNIDApplied:
      return i18n.global.t('error.NIDApplied')
    case CodeBatchGetAddressFail:
      return i18n.global.t('error.batchGetAddressFail')
    case CodeNIDNoAddress:
      return i18n.global.t('error.NIDNoAddress')
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