import request from '../utils/request'

export function loginApi(user) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      user
    }
  })
}

export function registerApi(user) {
  return request({
    url: '/user/add',
    method: 'post',
    data: {
      user
    }
  })
}

export function checkUserApi() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}