import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  menuList: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HEADER_DATA:
            return state.set('menuList', action.menuList)
        default:
            return state;
    }
}