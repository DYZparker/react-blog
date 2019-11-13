import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  account: {
    src: '',
    title: '',
    list: []
  },
  tagList: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_SIDER_DATA:
      return state.merge({
        account: action.account,
        tagList: action.tagList
      });
    // case constants.CHANGE_SHOW:
    //     return state.set('list', action.list);
    default:
      return state;
  }
}