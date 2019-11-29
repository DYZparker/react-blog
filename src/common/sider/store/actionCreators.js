import * as constants from './constants'
import { fromJS } from 'immutable'
import { getSideInfoApi } from '../../../api/common'

const changeSideData = (result) => ({
	type: constants.CHANGE_SIDE_DATA,
	tagList: fromJS(result.tagList)
})

export const getSideInfoData = () => {
  return (dispatch) => {
    getSideInfoApi().then((res) => {
      const result = res.data
      dispatch(changeSideData(result))
    })
  }
}