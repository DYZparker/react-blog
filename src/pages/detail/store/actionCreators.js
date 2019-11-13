import * as constants from './constants'
import { fromJS } from 'immutable'
import { getDetailApi } from '../../../api/article'

const changeDetailData = (result) => ({
	type: constants.CHANGE_DETAIL_DATA,
	article: fromJS(result)
})

export const getDetailData = (id) => {
  return (dispatch) => {
    getDetailApi(id).then((res) => {
      const result = res.data
      dispatch(changeDetailData(result))
    })
  }
}
