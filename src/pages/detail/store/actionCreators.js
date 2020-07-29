import * as constants from './constants'
import { fromJS } from 'immutable'
import { getArticleApi } from '../../../api/article'

const changeDetailData = (result) => ({
	type: constants.CHANGE_DETAIL_DATA,
	article: fromJS(result)
})

export const getDetailData = (id) => {
  return (dispatch) => {
    getArticleApi(id).then((res) => {
      const result = res.data
      dispatch(changeDetailData(result))
    })
  }
}
