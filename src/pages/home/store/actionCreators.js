import * as constants from './constants'
import { fromJS } from 'immutable'
import { getHomeDataApi, getArtListApi } from '../../../api/home'

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: fromJS(result.topicList),
	tabList: fromJS(result.tabList),
  artList: fromJS(result.artList),
  pages: fromJS(result.pages)
})

const changePageData = (page) => ({
  type: constants.CHANGE_PAGE_DATA,
  page: fromJS(page)
})

const changeArtListData = (result) => ({
  type: constants.CHANGE_ART_LIST_DATA,
  artList: fromJS(result)
})

export const getHomeData = () => {
  return (dispatch) => {
    getHomeDataApi().then((res) => {
      const result = res.data
      dispatch(changeHomeData(result))
    })
  }
}

export const changePage = (page) => {
  return (dispatch) => {
    getArtListApi(page).then((res) => {
      const result = res.data
      dispatch(changePageData(page))
      dispatch(changeArtListData(result))
    })
  }
}
