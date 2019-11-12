import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  tabList: [],
  artList: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        tabList: action.tabList,
        artList: action.artList
      });
    // case constants.CHANGE_SHOW:
    //   return state.set('list', action.list);
    default:
      return state;
  }
}