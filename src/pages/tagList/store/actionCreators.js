import * as constants from './constants'
import { fromJS } from 'immutable'
import { getArticleListApi } from '../../../api/article'

const changeTagArtListData = (result, page) => ({
  type: constants.CHANGE_TAG_ART_LIST,
	articleList: fromJS(result.articleList),
  total: fromJS(result.total),
  page: fromJS(page)
})

export const getTagArtListData = (payload) => {
  return (dispatch) => {
    getArticleListApi(payload).then((res) => {
        const result = res.data.data
        dispatch(changeTagArtListData(result, payload.page*1))
      })
  }
}