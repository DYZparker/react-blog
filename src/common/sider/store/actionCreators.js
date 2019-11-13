import * as constants from './constants'
import { fromJS } from 'immutable'
import { getSiderApi } from '../../../api/common'

const changeSiderrData = (result) => ({
	type: constants.CHANGE_SIDER_DATA,
	account: fromJS(result.account),
	tagList: fromJS(result.tagList)
})

export const getSiderData = () => {
  return (dispatch) => {
    getSiderApi().then((res) => {
      const result = res.data
      dispatch(changeSiderrData(result))
    })
  }
}