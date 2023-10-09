import service from "./basic";

export const UserIdentityAdmin = 1
export const UserIdentityUser = 2

const LoginURL = '/api/login'
const UserURL = '/api/admin/user'

// 用户注册NID
export function registerNID(user){
  return service.put(UserURL, user)
}

export function login(username, password) {
  return service.post(LoginURL, {
    username: username,
    password: password,
  });
}

// 修改用户
export function editUser(user) {
  return service.post(UserURL, {
    ID: user.id,
    Username: user.username,
    Nickname: user.nickname,
    Password: user.password,
    Identity: user.identity
  })
}

// 删除用户
export function deleteUser(nid) {
  return service.delete(UserURL, {
    params: {
      nid
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