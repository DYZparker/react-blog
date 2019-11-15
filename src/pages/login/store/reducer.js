import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_TOGGLE:
            return state.set('toggle', action.toggle);
        case constants.CHANGE_SHOW:
            return state.set('list', action.list);
        default:
            return state;
    }
}