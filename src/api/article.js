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

export function addArticleApi(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data: {
      data
    }
  })
}