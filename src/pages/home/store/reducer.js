import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  tabList: [
    {
      title: 'node.js',
      img: 'http://122.51.57.99:7777/image/node.png',
      url: 'www.node.com',
      child: [
        {
          id: 1,
          title: 'node',
          description: 'js运行环境'
        },
        {
          id: 2,
          title: 'express',
          description: 'express运行环境'
        },
        {
          id: 3,
          title: 'koa2',
          description: 'koa2运行环境'
        },
        {
          id: 4,
          title: 'egg',
          description: 'egg运行环境'
        }
      ]
    },
    {
      title: 'vue',
      img: 'http://122.51.57.99:7777/image/vue.png',
      url: 'www.vue.com',
      child: [
        {
          id: 5,
          title: 'vue',
          description: 'vue运行环境'
        },
        {
          id: 6,
          title: 'vue-router',
          description: 'vue-router运行环境'
        },
        {
          id: 7,
          title: 'vuex',
          description: 'vuex运行环境'
        }
      ]
    }
  ],
  articleList: [],
  pages: {
    current: 1,
    total: 1,
    pageSize: 5
  }
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        // tabList: action.tabList,
        articleList: action.articleList,
        pages: action.pages
      });
    case constants.CHANGE_PAGE_DATA:
      return state.setIn(['pages', 'current'], action.page);
    case constants.CHANGE_ART_LIST_DATA:
      return state.set('articleList', action.articleList);
    default:
      return state;
  }
}