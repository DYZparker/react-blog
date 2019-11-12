import * as constants from './constants'
import { fromJS } from 'immutable'
import { getHeaderApi } from '../../../api/common'

const changeHeaderData = (result) => ({
	type: constants.CHANGE_HEADER_DATA,
	menuList: fromJS(result)
})

export const getHeaderData = () => {
  return (dispatch) => {
    getHeaderApi().then((res) => {
      const result = res.data
      dispatch(changeHeaderData(result))
    })
  }
}