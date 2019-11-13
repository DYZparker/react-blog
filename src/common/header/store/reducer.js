import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  menuList: []
// menuList:[
//   {
//       "title": "网站首页",
//       "icon": "home",
//       "path": "/"
//   },
//   {
//       "title": "学习笔记",
//       "icon": "book",
//       "path": "/tagList",
//       "children": [
//           {
//               "title": "html",
//               "icon": "tags",
//               "path": "/tagList/html"
//           },
//           {
//               "title": "javascript",
//               "icon": "tags",
//               "path": "/tagList/javascript"
//           },
//           {
//               "title": "node",
//               "icon": "tags",
//               "path": "/tagList/node"
//           },
//           {
//               "title": "vue",
//               "icon": "tags",
//               "path": "/tagList/vue"
//           },
//           {
//               "title": "react",
//               "icon": "tags",
//               "path": "/tagList/react"
//           },
//           {
//               "title": "other",
//               "icon": "tags",
//               "path": "/tagList/other"
//           }
//       ]
//   },
//   {
//       "title": "写文章",
//       "icon": "edit",
//       "path": "/write"
//   },
//   {
//       "title": "关于我",
//       "icon": "idcard",
//       "path": "/aboutme"
//   }
// ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HEADER_DATA:
            return state.set('menuList', action.menuList)
        default:
            return state;
    }
}