import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagOptions: ['html', 'css', 'flex', 'javascript', 'node', 'vue', 'react', 'express', 'koa2', 'egg', 'next.js', 'git', 'mongodb', 'mysql', 'nginx', '杂记', '踩坑', '其他',]
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