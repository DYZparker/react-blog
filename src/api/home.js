import request from '../utils/request'

export function getHomeDataApi() {
  return request({
    url: '/homedata',
    method: 'get',
  })
}