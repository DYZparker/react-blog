import request from '../utils/request'

export function getCommonInfoApi() {
  return request({
    url: '/common/info',
    method: 'get'
  })
}

export function getSideInfoApi() {
  return request({
    url: '/side/info',
    method: 'get'
  })
}