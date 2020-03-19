import * as constants from './constants'
import { fromJS } from 'immutable'
import { getCommonInfoApi } from '../../../api/common'
import { getArticleListApi } from '../../../api/article'

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: fromJS(result.topicList),
	// tabList: fromJS(result.tabList),
  articleList: fromJS(result.articleList),
  pages: fromJS(result.pages)
})

const changePageData = (page) => ({
  type: constants.CHANGE_PAGE_DATA,
  page: fromJS(page)
})

const changeArtListData = (result) => ({
  type: constants.CHANGE_ART_LIST_DATA,
  articleList: fromJS(result.articleList)
})

export const getHomeData = () => {
  return (dispatch) => {
    getCommonInfoApi().then((res) => {
      const result = res.data
      dispatch(changeHomeData(result))
    })
  }
}

export const changePage = (payload) => {
  return (dispatch) => {
    getArticleListApi(payload).then((res) => {
      const result = res.data.data
      dispatch(changePageData(payload.page))
      dispatch(changeArtListData(result))
    })
  }
}
