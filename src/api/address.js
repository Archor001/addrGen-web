import service from "./basic";

const AddressURL = '/addrgeneration/address'
const QueryAddressURL = '/addrgeneration/query'

export const ResultTypeSuccess = 1
export const ResultTypeFail = 2

// 批量获取地址
export function getAddress(offset, limit, content) {
  return service.get(AddressURL+'es',{
    params: {
      offset,limit,content
    }
  })
}

// 地址生成
export function applyAddress(nid, password){
  return service.post(AddressURL, {
    nid: nid,
    password: password
  })
}

// 地址溯源
export function traceAddress(queryAddress){
  return service.get(AddressURL, {
    params:{
      queryAddress
    }
  })
}

// 地址查询
export function queryAddress(nid){
  return service.get(QueryAddressURL, {
    params:{
      nid
    }
  })
}

// 地址删除
export function deleteAddress(deleteAddress){
  return service.delete(AddressURL, {
    params: {
      deleteAddress
    }
  })
}