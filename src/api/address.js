import service from "./basic";

const AddressURL = '/api/user/address'

export const ResultTypeSuccess = 1
export const ResultTypeFail = 2

// 地址生成
export function applyAddress(address){
  return service.post(AddressURL, address)
}

// 地址查询
export function queryAddress(queryAddress, prefixLength){
  return service.get(AddressURL, {
    params:{
      queryAddress, prefixLength
    }
  })
}