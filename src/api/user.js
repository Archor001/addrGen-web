import service from "./basic";

export const UserIdentityAdmin = 1
export const UserIdentityUser = 2

const LoginURL = '/addrgeneration/login'
const UserURL = '/addrgeneration/user'
const SuspendUserURL = '/addrgeneration/user/suspend'

// 用户注册NID
export function registerNID(user){
  return service.put(UserURL, {
    name: user.name,
    password: user.password,
    phoneNumber: user.phoneNumber,
    role: user.role,
    username: user.username,
    emailAddress: user.emailAddress
  })
}

export function login(username, password) {
  return service.post(LoginURL, {
    username: username,
    password: password
  });
}

// 修改用户
export function editUser(user) {
  return service.post(UserURL, {
    nid: user.nid,
    name: user.name,
    password: user.password,
    phoneNumber: user.phoneNumber,
    role: user.role,
    emailAddress: user.emailAddress
  })
}

// 停用用户
export function suspendUser(nid){
  return service.post(SuspendUserURL, {
    nid
  })
}

// 批量获取用户
export function getUser(offset, limit, content) {
  return service.get(UserURL+'s',{
    params: {
      offset,limit,content
    }
  })
}