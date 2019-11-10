import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  current: 'home',
  headTags: ['html', 'javascript', 'node', 'vue', 'react', 'other']
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_CURRENT:
            return state.set('current', action.key)
        default:
            return state;
    }
}