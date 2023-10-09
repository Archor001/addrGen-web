import service from "./basic";

const AddressURL = '/addrgeneration/address'
const QueryAddressURL = '/addrgeneration/query'

export const ResultTypeSuccess = 1
export const ResultTypeFail = 2

// 地址生成
export function applyAddress(address){
  return service.post(AddressURL, address)
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