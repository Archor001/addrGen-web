import service from "./basic";

export const UserIdentityAdmin = 1
export const UserIdentityUser = 2

const LoginURL = '/api/login'
const UserApplyURL = '/api/user/nid'
const UserManageURL = '/api/admin/user'

// 用户注册NID
export function registerNID(user){
  return service.put(UserApplyURL, user)
}

export function login(username, password) {
  return service.post(LoginURL, {
    username: username,
    password: password,
  });
}

export function addUser(user) {
  return service.put(UserManageURL, {
    Username: user.username,
    Password: user.password,
    Identity: user.identity
  })
}

export function editUser(user) {
  return service.post(UserManageURL, {
    ID: user.id,
    Username: user.username,
    Nickname: user.nickname,
    Password: user.password,
    Identity: user.identity
  })
}

export function deleteUser(id) {
  return service.delete(UserManageURL, {
    params: {
      ID: id
    }
  })
}

export function getUser(offset, limit, content) {
  return service.get(UserManageURL,{
    params: {
      offset,limit,content
    }
  })
}