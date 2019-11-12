import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagArtList: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_TAG_ART_LIST:
            return state.set('tagArtList', action.tagArtList);
        default:
            return state;
    }
}