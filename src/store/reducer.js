import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as siderReducer } from '../common/sider/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as tagListReducer } from '../pages/tagList/store'
import { reducer as writeReducer } from '../pages/write/store'

const reducer = combineReducers({
  header: headerReducer,
  sider: siderReducer,
  home: homeReducer,
  detail: detailReducer,
  tagList: tagListReducer,
  write: writeReducer
})

export default reducer