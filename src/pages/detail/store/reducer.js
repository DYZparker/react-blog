import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  article: {
    // _id: '',
    date: '',
    tags: [],
    img: '',
    title: '',
    content: ''
  },
  comments: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL_DATA:
            return state.set('article', action.article);
        case constants.CHANGE_COMMENTS:
            return state.set('comments', action.comment);
        default:
            return state;
    }
}