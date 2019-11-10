import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  toggle: false,
  topicList: [
    {
      src: 'http://122.51.57.99:7777/image/1.png',
      alt: 'react hooks'
    },
    {
      src: 'http://122.51.57.99:7777/image/2.png',
      alt: 'redux'
    },
    {
      src: 'http://122.51.57.99:7777/image/3.png',
      alt: 'next.js'
    }
  ],
  tabList: [
      {
          id: 1,
          title: 'html',
          img: 'http://122.51.57.99:7777/image/html.png',
          url: 'www.w3school.com.cn',
          child: [
              {
                title: 'html',
                description: 'HTML为超文本标记语言，是由HTML命令组成的描述性文本'
              },
              {
                title: 'css',
                description: '层叠样式表是一种用来表现HTML或XML等文件样式的计算机语言'
              },
              {
                title: '定位&布局',
                description: 'position&display&flex'
              },
              {
                title: '变形&动画',
                description: 'transition&transform&animation'
              }
          ]
      },
      {
          id: 2,
          title: 'javascript',
          img: 'http://122.51.57.99:7777/image/js.png',
          url: 'www.javascript.com',
          child: [
              {
                title: 'javascript',
                description: 'JavaScript是一种用于客户端的直译式脚本语言'
              },
              {
                title: 'ES6',
                description: '描述了javascript的语法和基本对象'
              },
              {
                title: 'BOM',
                description: 'BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象'
              },
              {
                title: 'DOM',
                description: 'DOM即文档对象模型，是一种处理HTML和XML文件的标准API'
              }
          ]
      },
      {
          id: 3,
          title: 'node',
          img: 'http://122.51.57.99:7777/image/node.png',
          url: 'www.nodejs.org',
          child: [
              {
                id: 301,
                title: 'node',
                description: '是一个基于Chrome V8引擎的JavaScript运行环境,使用了一个事件驱动、非阻塞式 I/O 的模型'
              },
              {
                id: 302,
                title: 'express',
                description: '是一个简洁而灵活的 node.js Web应用框架'
              },
              {
                id: 303,
                title: 'koa2',
                description: '是express的升级版'
              },
              {
                id: 304,
                title: 'egg',
                description: '在koa2的基础上集成，添加规范'
              }
          ]
      },
      {
          id: 4,
          title: 'vue',
          img: 'http://122.51.57.99:7777/image/vue.png',
          url: 'www.cn.vuejs.org',
          child: [
              {
                title: 'vue',
                description: '是一套用于构建用户界面自底向上逐层应用的渐进式框架'
              },
              {
                title: 'vue router',
                description: 'Vue Router 是 Vue.js 官方的路由管理器'
              },
              {
                title: 'vuex',
                description: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式'
              }
          ]
      },
      {
          id: 5,
          title: 'react',
          img: 'http://122.51.57.99:7777/image/react.png',
          url: 'www.reactjs.org',
          child: [
              {
                title: 'react',
                description: '是用于构建用户界面的 JavaScript 库'
              },
              {
                title: 'hook',
                description: '可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性'
              },
              {
                title: 'next.js',
                description: 'Next.js 是一个轻量级的 React 服务端渲染应用框架'
              }
          ]
      },
      {
          id: 6,
          title: 'other',
          img: 'http://122.51.57.99:7777/image/web.png',
          url: 'www.w3school.com.cn',
          child: [
              {
                title: 'git',
                description: 'Git是一个开源的分布式版本控制系统'
              },
              {
                title: 'mongodb',
                description: 'MongoDB 是一个基于分布式文件存储的数据库'
              },
              {
                title: 'mysql',
                description: 'MySQL是一个关系型数据库管理系统'
              },
              {
                title: 'nginx',
                description: '是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务'
              }
          ]
      }
  ],
  artList: [
    {
      id: '301',
      date: '2019-11-10',
      tags: ['css', 'js'],
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      title: `不用我管`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },{
      id: '302',
      date: '2019-11-09',
      tags: ['html', 'vue'],
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      title: `努加我更好的`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },{
      id: '303',
      date: '2019-11-08',
      tags: ['rect', 'node'],
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      title: `俺不要的覆盖于`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }
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