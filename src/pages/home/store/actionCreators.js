import * as constants from './constants';
import { fromJS } from 'immutable';
// import axios from 'axios';

// const changeList = (data) => ({
//     type: constants.CHANGE_LIST,
//     data: fromJS(data),
//     totalPage: Math.ceil(data.length /10)
// })

export const changeToggle = (toggle) => ({
    type: constants.CHANGE_TOGGLE,
    toggle
});

export const changeShow = (list) => ({
    type: constants.CHANGE_SHOW,
    list: fromJS(list)
});
