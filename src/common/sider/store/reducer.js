import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagList: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_SIDE_DATA:
      return state.set('tagList', action.tagList);
    default:
      return state;
  }
}