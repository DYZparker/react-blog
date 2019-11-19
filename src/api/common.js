import request from '../utils/request'

export function getSiderApi() {
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

export function changeTagArtListApi(page, tag) {
  return request({
    url: '/common/page',
    method: 'post',
    data: {
      page,
      tag
    }
  })
}