import * as constants from './constants'
import { fromJS } from 'immutable'
import { getTagArtListApi } from '../../../api/common'

const changeTagArtListData = (result) => ({
	type: constants.CHANGE_TAG_ART_LIST,
	tagArtList: fromJS(result)
})

export const getTagArtListData = (tag) => {
  return (dispatch) => {
    getTagArtListApi(tag).then((res) => {
        const result = res.data
        dispatch(changeTagArtListData(result))
      })
  }
}
