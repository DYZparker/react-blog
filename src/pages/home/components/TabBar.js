import React, { PureComponent } from 'react'
import { Tabs, Card, List } from 'antd'
import {
  TabBarWrapper,
  WrapperTabPane,
  WrapperCard,
  WrapperMeta
} from '../style'

const subList = [
    {
        id: 1,
        title: 'html',
        url: 'http://122.51.57.99:7777/image/html.png',
        description: 'www.w3school.com.cn',
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
        url: 'http://122.51.57.99:7777/image/js.png',
        description: 'www.javascript.com',
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
        url: 'http://122.51.57.99:7777/image/node.png',
        description: 'www.nodejs.org',
        child: [
            {
              id: 3-1,
              title: 'node',
              description: '是一个基于Chrome V8引擎的JavaScript运行环境,使用了一个事件驱动、非阻塞式 I/O 的模型'
            },
            {
              id: 3-2,
              title: 'express',
              description: '是一个简洁而灵活的 node.js Web应用框架'
            },
            {
              id: 3-3,
              title: 'koa2',
              description: '是express的升级版'
            },
            {
              id: 3-4,
              title: 'egg',
              description: '在koa2的基础上集成，添加规范'
            }
        ]
    },
    {
        id: 4,
        title: 'vue',
        url: 'http://122.51.57.99:7777/image/vue.png',
        description: 'www.cn.vuejs.org',
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
        url: 'http://122.51.57.99:7777/image/react.png',
        description: 'www.reactjs.org',
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
        url: 'http://122.51.57.99:7777/image/web.png',
        description: 'www.w3school.com.cn',
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
]

function callback(key) {
	console.log(key);
}

class TabBar extends PureComponent {

	render() {
		return (
			<TabBarWrapper>
				<Tabs className="subject-tabs" defaultActiveKey="1" onChange={callback} >
					{subList.map((item) => {
						return (
							<WrapperTabPane tab={item.title} key={item.id}>
								<WrapperCard>
                  <Card
                    hoverable
                    style={{ width: 160 }}
                    cover={<img alt={item.title} src={item.url} />}
                  >
                    <WrapperMeta className="subject-tabs-card-meta" title={item.title} description={item.description} />
                  </Card>
                </WrapperCard>
								<List
									itemLayout="horizontal"
									dataSource={item.child}
									renderItem={item => (
									<List.Item>
										<List.Item.Meta
										title={<a href={"/notes?id="+item.id} style={{ fontSize: 20 }}>{item.title}</a>}
										description={item.description}
										/>
									</List.Item>
									)}
								/>
							</WrapperTabPane>
						)
					})}
				</Tabs>
			</TabBarWrapper>
		)
	}
}

export default TabBar