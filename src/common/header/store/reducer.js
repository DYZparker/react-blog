import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginVisible: false,
  logoutVisible: false,
  showRegister: false,
  token: '',
  admin: '',
  username: '',
  login: false,
  menuList: [
    {
      "title": "首页",
      "icon": "home",
      "path": "/",
    },
    {
      "title": "笔记",
      "icon": "book",
      "path": "/tagList",
      "children": [
        {
            "title": "html",
            "icon": "tags",
            "path": "/tagList/html"
        },
        {
            "title": "javascript",
            "icon": "tags",
            "path": "/tagList/javascript"
        },
        {
            "title": "node",
            "icon": "tags",
            "path": "/tagList/node"
        },
        {
            "title": "vue",
            "icon": "tags",
            "path": "/tagList/vue"
        },
        {
            "title": "react",
            "icon": "tags",
            "path": "/tagList/react"
        },
        {
            "title": "other",
            "icon": "tags",
            "path": "/tagList/other"
        }
      ],
    },
    {
        "title": "写文章",
        "icon": "edit",
        "path": "/write"
    },
    {
        "title": "关于我",
        "icon": "solution",
        "path": "/aboutme"
    },
    {
        "title": "管理",
        "icon": "setting",
        "path": "/setting"
    },
    {
        "title": "登录",
        "icon": "login",
        "path": "/login"
    }
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HEADER_DATA:
      return state.set('menuList', action.menuList);
    case constants.CHANGE_LOGIN_VISIBLE:
      return state.set('loginVisible', action.loginVisible);
    case constants.CHANGE_LOGOUT_VISIBLE:
      return state.set('logoutVisible', action.logoutVisible);
    case constants.CHANGE_REGISTER:
      return state.set('showRegister', action.show);
    case constants.CHANGE_LOGIN:
      return state.set('login', action.login);
    case constants.CHANGE_LOGIN_WORD:
      return state.setIn(['menuList', -1, 'title'], '退出');
    case constants.CHANGE_LOGOUT_WORD:
      return state.setIn(['menuList', -1, 'title'], '登录');
    case constants.CHANGE_LOGIN_DATA:
      return state.merge({
        admin: action.admin,
        username: action.username
      });
    case constants.REMOVE_LOGIN_DATA:
      return state.merge({
        admin: '',
        username: ''
      });
    default:
      return state;
  }
}