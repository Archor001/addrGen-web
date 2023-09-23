import service from "./basic";

const AddressURL = '/api/admin/address'
const RegenAddressURL = '/api/admin/regen/address'
const ISPURL = '/api/admin/isp'

export const ResultTypeSuccess = 1
export const ResultTypeFail = 2

// 地址生成
export function applyAddress(address){
  return service.post(AddressURL, address)
}

// 地址查询
export function queryAddress(queryAddress){
  return service.get(AddressURL, {
    params:{
      queryAddress
    }
  })
}

// 修改ISP
export function updateISP(isp){
  return service.post(ISPURL, {
    isp
  })
}

// 获取ISP地址前缀
export function getISP(){
  return service.get(ISPURL)
}

// 重新生成地址
export function regenerateAddress(isp){
  return service.post(RegenAddressURL, {
    isp
  })
}