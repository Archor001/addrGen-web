import service from "./basic";

export const UserIdentityAdmin = 1
export const UserIdentityUser = 2

const LoginURL = '/api/login'
const UserURL = '/api/admin/user'

// 用户注册NID
export function registerNID(user){
  return service.put(UserURL, {
    userID: user.userID,
    password: user.password,
    phoneNumber: user.phoneNumber,
    username: user.username,
  })
}

export function login(username, password) {
  return service.post(LoginURL, {
    username,
    password
  });
}

// 修改用户
export function editUser(user) {
  return service.post(UserURL, {
    phoneNumber: user.phoneNumber,
    userID: user.userID,
    password: user.password,
    username: user.username,
  })
}

// 删除用户
export function deleteUser(phoneNumber){
  return service.delete(UserURL,{
    params:{
      phoneNumber
    }
  })
}

// 批量获取用户
export function getUser(offset, limit, content) {
  return service.get(UserURL,{
    params: {
      offset,limit,content
    }
  })
}