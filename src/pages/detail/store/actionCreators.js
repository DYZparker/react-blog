import * as constants from './constants'
import { fromJS } from 'immutable'
import { getArticleApi, getCommentListApi } from '../../../api/article'

const changeDetailData = (result) => ({
	type: constants.CHANGE_DETAIL_DATA,
	article: fromJS(result)
})

// const changeCommentsData = (result) => ({
// 	type: constants.CHANGE_COMMENTS,
// 	comments: fromJS(result)
// })

export const getDetailData = (id) => {
  return (dispatch) => {
    getArticleApi(id).then((res) => {
      const result = res.data
      dispatch(changeDetailData(result))
    })
  }
}

export const setCommentsData = (id, data) => {
  return (dispatch) => {
    getCommentListApi(id, data).then((res) => {
      const result = res.data
      console.log(result)
      // dispatch(changeCommentsData(result))
    })
  }
}
