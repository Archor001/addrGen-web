import service from "./basic";

const AddressURL = '/api/user/address'

// 地址生成
export function applyAddress(address){
  return service.post(AddressURL, address)
}

// 地址查询
export function queryAddress(queryAddress, prefix){
  return service.get(AddressURL, {
    params:{
      queryAddress, prefix
    }
  })
}