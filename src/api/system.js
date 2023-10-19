import service from "./basic";

const SystemURL = '/addrgeneration/system'

// 获取系统配置
export function getConfig(){
  return service.get(SystemURL)
}

// 修改系统配置
export function updateConfig(config){
  return service.post(SystemURL, config)
}