import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: [],
  pages: {
    current: 1,
    total: 1,
    pageSize: 5
  }
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_TAG_ART_LIST:
      return state.set('articleList', action.articleList);
    case constants.CHANGE_TOTAL_DATA:
      return state.setIn(['pages', 'total'], action.total);
    case constants.CHANGE_TAG_ART_LIST:
      return state.set('articleList', action.articleList);
    case constants.CHANGE_PAGE_DATA:
      return state.setIn(['pages', 'current'], action.page);
    default:
      return state;
  }
}