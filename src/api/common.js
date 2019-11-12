import request from '../utils/request'

export function getHeaderApi(tag) {
  return request({
    url: '/common/menulist',
    method: 'get'
  })
}

export function getSiderApi(tag) {
  return request({
    url: '/common/sider',
    method: 'get'
  })
}

export function getTagArtListApi(tag) {
  return request({
    url: '/common/tagartlist',
    method: 'post',
    data: {
      tag
    }
  })
}