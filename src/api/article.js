import request from '../utils/request'

export function getArticleListApi(payload) {
  return request({
    url: '/article/list',
    method: 'post',
    data: {
      payload
    }
  })
}

export function getArticleApi(id) {
  return request({
    url: '/article/id',
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
