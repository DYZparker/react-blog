import request from '../utils/request'

export function loginApi(user) {
  return request({
    url: '/users/login',
    method: 'post',
    data: {
      user
    }
  })
}

export function registerApi(user) {
  return request({
    url: '/users/register',
    method: 'post',
    data: {
      user
    }
  })
}

export function checkUserApi() {
  return request({
    url: '/users/info',
    method: 'get'
  })
}