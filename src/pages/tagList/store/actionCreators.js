import * as constants from './constants'
import { fromJS } from 'immutable'
import { getArticleListApi } from '../../../api/article'

// const initTagArtListData = (result) => ({
// 	type: constants.INIT_TAG_ART_LIST,
// 	articleList: fromJS(result.articleList),
//   total: fromJS(result.total)
// })

const changeTagArtListData = (result) => ({
  type: constants.CHANGE_TAG_ART_LIST,
	articleList: fromJS(result.articleList)
})

const changeTotalData = (result) => ({
  type: constants.CHANGE_TOTAL_DATA,
  total: fromJS(result.total)
})

const changePageData = (page) => ({
  type: constants.CHANGE_PAGE_DATA,
  page: fromJS(page)
})

export const getTagArtListData = (payload) => {
  return (dispatch) => {
    getArticleListApi(payload).then((res) => {
        const result = res.data.data
        dispatch(changeTagArtListData(result))
        dispatch(changeTotalData(result))
        dispatch(changePageData(payload.page*1))
      })
  }
}

// export const changePage = (page, tag) => {
//   return (dispatch) => {
//     changeTagArtListApi(page, tag).then((res) => {
//       const result = res.data
//       dispatch(changePageData(page))
//       dispatch(changeTagArtListData(result))
//     })
//   }
// }
