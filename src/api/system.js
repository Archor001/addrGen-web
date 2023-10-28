import service from "./basic";

const SystemURL = '/api/admin/system'

// 获取系统配置
export function getConfig(){
  return service.get(SystemURL)
}

// 设置同步时间
export function setSyncAddrGap(syncGap){
  return service.post(SystemURL,{
    syncGap
  })
}