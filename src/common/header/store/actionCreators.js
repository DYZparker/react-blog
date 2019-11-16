import * as constants from './constants'
import { fromJS } from 'immutable'
// import { getHeaderApi } from '../../../api/common'

// const changeHeaderData = (result) => ({
// 	type: constants.CHANGE_HEADER_DATA,
// 	menuList: fromJS(result)
// })

// export const getHeaderData = () => {
//   return (dispatch) => {
//     getHeaderApi().then((res) => {
//       const result = res.data
//       dispatch(changeHeaderData(result))
//     })
//   }
// }

export const changeLoginVisible = (visible) => ({
  type: constants.CHANGE_LOGIN_VISIBLE,
  loginVisible: fromJS(visible)
})

export const changeLogoutVisible = (visible) => ({
  type: constants.CHANGE_LOGOUT_VISIBLE,
  logoutVisible: fromJS(visible)
})

export const changeRegister = (show) => ({
  type: constants.CHANGE_REGISTER,
  show
})

export const changeLogin = (login) => ({
  type: constants.CHANGE_LOGIN,
  login
})

export const changeLoginWord = () => ({
  type: constants.CHANGE_LOGIN_WORD,
})

export const changeLogoutWord = () => ({
  type: constants.CHANGE_LOGOUT_WORD,
})