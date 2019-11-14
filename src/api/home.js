import request from '../utils/request'

export function getHomeDataApi() {
  return request({
    url: '/homedata',
    method: 'get'
  })
}

export function getArtListApi(page) {
  return request({
    url: '/homedata/artlist',
    method: 'post',
    data: {
      page
    }
  })
}