import * as constants from './constants'
import { fromJS } from 'immutable'
import { addArticleApi } from '../../../api/article'

// const changeHeaderData = (result) => ({
// 	type: constants.CHANGE_HEADER_DATA,
// 	menuList: fromJS(result)
// })

export const addArticleData = (data) => {
  return (dispatch) => {
    addArticleApi(data).then((res) => {
      const result = res.data
      console.log(res)
    //   dispatch(changeHeaderData(result))
    })
  }
//   addArticleApi()
}
