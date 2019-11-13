import request from '../utils/request'

export function getDetailApi(id) {
  return request({
    url: '/article',
    method: 'post',
    data: {
      id
    }
  })
}