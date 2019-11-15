import * as constants from './constants'
import { fromJS } from 'immutable'
import { getTagArtListApi, changeTagArtListApi } from '../../../api/common'

const initTagArtListData = (result) => ({
	type: constants.INIT_TAG_ART_LIST,
	tagArtList: fromJS(result.tagArtList),
  pages: fromJS(result.pages)
})

const changeTagArtListData = (result) => ({
  type: constants.CHANGE_TAG_ART_LIST,
	tagArtList: fromJS(result)
})

const changePageData = (page) => ({
  type: constants.CHANGE_PAGE_DATA,
  page: fromJS(page)
})

export const getTagArtListData = (tag) => {
  return (dispatch) => {
    getTagArtListApi(tag).then((res) => {
        const result = res.data
        dispatch(initTagArtListData(result))
      })
  }
}

export const changePage = (page, tag) => {
  return (dispatch) => {
    changeTagArtListApi(page, tag).then((res) => {
      const result = res.data
      dispatch(changePageData(page))
      dispatch(changeTagArtListData(result))
    })
  }
}
