import * as constants from './constants'
import { fromJS } from 'immutable'
import { getHomeDataApi } from '../../../api/home'

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: fromJS(result.topicList),
	tabList: fromJS(result.tabList),
	artList: fromJS(result.artList)
})

export const getHomeData = () => {
  return (dispatch) => {
      getHomeDataApi().then((res) => {
        const result = res.data
        dispatch(changeHomeData(result))
      })
  }
}

// export const changeShow = (list) => ({
//   type: constants.CHANGE_SHOW,
//   list: fromJS(list)
// })
