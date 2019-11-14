import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  tabList: [],
  artList: [],
  pages: {
    current: 1,
    total: 1,
    pageSize: 5
  }
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        tabList: action.tabList,
        artList: action.artList,
        pages: action.pages
      });
    case constants.CHANGE_PAGE_DATA:
      return state.setIn(['pages', 'current'], action.page);
    case constants.CHANGE_ART_LIST_DATA:
      return state.set('artList', action.artList);
    default:
      return state;
  }
}