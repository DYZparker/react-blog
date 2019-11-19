import * as constants from './constants'
import { fromJS } from 'immutable'

export const changeLoginData = (user) => ({
	type: constants.CHANGE_LOGIN_DATA,
  admin: fromJS(user.admin),
  username: fromJS(user.username)
})

export const removeLoginData = () => ({
	type: constants.REMOVE_LOGIN_DATA
})

// const changeRegisterData = (result) => ({
// 	type: constants.CHANGE_REGISTER_DATA,
//   register: fromJS(result)
// })

// export const checkUserInfo = () => {
//   return (dispatch) => {
//     loginApi(user).then((res) => {
//       const result = res.data || res
//       if(res.status === 204)
//       console.log(result)
//       dispatch(changeLoginData(result))
//     })
//   }
// }

// export const registerData = (user) => {
//   return (dispatch) => {
//     registerApi(user).then((res) => {
//       const result = res.data
//       dispatch(changeRegisterData(result))
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