import * as constants from './constants'
import { fromJS } from 'immutable'

export const changeCurrent = (key) => ({
    type: constants.CHANGE_CURRENT,
    key: fromJS(key)
})
