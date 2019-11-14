import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagArtList: [],
  pages: {
    current: 1,
    total: 1,
    pageSize: 5
  }
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_TAG_ART_LIST:
      return state.merge({
          tagArtList: action.tagArtList,
          pages: action.pages
      });
    case constants.CHANGE_TAG_ART_LIST:
      return state.set('tagArtList', action.tagArtList);
    case constants.CHANGE_PAGE_DATA:
      return state.setIn(['pages', 'current'], action.page);
    default:
      return state;
  }
}