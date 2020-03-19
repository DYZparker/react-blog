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

export function getCommentListApi(id, data) {
  return request({
    url: '/article/comment/list',
    method: 'post',
    data: {
      id,
      data
    }
  })
}

export function addCommentApi(id, data) {
  return request({
    url: '/article/comment/add',
    method: 'post',
    data: {
      id,
      data
    }
  })
}

