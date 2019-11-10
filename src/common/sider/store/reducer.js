import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  accountList: [
    {
      type: 'github',
      url: 'https://github.com/DYZparker',
      content: '：github.com/DYZparker'
    },
    {
      type: 'qq',
      url: 'https://github.com/DYZparker',
      content: '：182345999'
    },
    {
      type: 'wechat',
      url: 'https://github.com/DYZparker',
      content: '：d13880777416'
    },
    {
      type: 'mail',
      url: 'https://github.com/DYZparker',
      content: '：182345999@qq.com'
    }
  ],
  tagList: [
      {
        title: 'html',
        color: '#0066FF',
        href: ''
      },
      {
        title: 'css',
        color: '#FF88C2',
        href: ''
      },
      {
        title: 'flex',
        color: '#C10066 ',
        href: ''
      },
      {
        title: 'javascript',
        color: '#EE7700 ',
        href: ''
      },
      {
        title: 'node',
        color: '#00AA00',
        href: ''
      },
      {
        title: 'vue',
        color: '#00AA88',
        href: ''
      },
      {
        title: 'react',
        color: '#444444',
        href: ''
      },
      {
        title: 'express',
        color: '#B94FFF',
        href: ''
      },
      {
        title: 'koa2',
        color: '#00DD77',
        href: ''
      },
      {
        title: 'egg',
        color: '#FF7744',
        href: ''
      },
      {
        title: 'next.js',
        color: '#666666',
        href: ''
      },
      {
        title: 'git',
        color: '#5555FF',
        href: ''
      },
      {
        title: 'mongodb',
        color: '#FFAA33',
        href: ''
      },
      {
        title: 'mysql',
        color: '#227700',
        href: ''
      },
      {
        title: 'nginx',
        color: '#9900FF ',
        href: ''
      },
      {
        title: '杂记',
        color: '#227700 ',
        href: ''
      },
      {
        title: '踩坑',
        color: '#A20055  ',
        href: ''
      },
      {
        title: '其他',
        color: '#0000AA  ',
        href: ''
      },
    ]
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