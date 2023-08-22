import service from "./basic";

export const UserIdentityAdmin = 1
export const UserIdentityTeacher = 2
export const UserIdentityStudent = 3

const LoginURL = '/api/login'
const LogoutURL = '/api/logout'
const ChangePasswordURL = '/api/passwd'
const UserManageURL = '/api/admin/user'

export function login(username, password) {
  return service.post(LoginURL, {
    username: username,
    password: password,
  });
}

export function logout() {
  return service.post(LogoutURL);
}

export function changePassword(oldPassword, newPassword) {
  return service.post(ChangePasswordURL, {oldPassword, newPassword})
}

export function addUser(user) {
  return service.put(UserManageURL, {
    Username: user.username,
    Nickname: user.nickname,
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

export function getUser(offset, limit, identities = []) {
  return service.get(UserManageURL,{
    params: {
      offset,limit,identities
    }
  })
}