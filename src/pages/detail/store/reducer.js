import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  article: {
    date: '',
    tags: [],
    img: '',
    title: '',
    content: ''
  }
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL_DATA:
            return state.set('article', action.article);
        // case constants.CHANGE_SHOW:
        //     return state.set('list', action.list);
        default:
            return state;
    }
}