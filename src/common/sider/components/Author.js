import React, { PureComponent } from 'react'
import { Icon, Avatar, Divider } from 'antd'
import { 
	AutorWrapper,
	AutorContent,
	AutorAccount
} from '../style'
import autorImg from '../../../statics/image/ssw.jpg'

class Author extends PureComponent {
	constructor() {
		super()
		this.state = {
			"title": "Web前端学习，Vue、React框架实践，个人服务器端数据库连接，博客项目实战",
			"list": [
				{
					"_id": "5dcb633bf2292b2170ea02f0",
					"type": "github",
					"url": "https://github.com/DYZparker",
					"content": "：github.com/DYZparker"
				},
				{
					"_id": "5dcb633bf2292b2170ea02ef",
					"type": "qq",
					"url": "https://github.com/DYZparker",
					"content": "：182345999"
				},
				{
					"_id": "5dcb633bf2292b2170ea02ee",
					"type": "wechat",
					"url": "https://github.com/DYZparker",
					"content": "：d13880777416"
				},
				{
					"_id": "5dcb633bf2292b2170ea02ed",
					"type": "mail",
					"url": "https://github.com/DYZparker",
					"content": "：182345999@qq.com"
				}
			]
		}
	}

	render() {
		const { title, list } = this.state
		return (
			<AutorWrapper>
			{console.log('autor')}
				<Avatar size={100} icon="user" src={autorImg} />
				<AutorContent>
					<p>{title}</p>
					<Divider>联系方式</Divider>
					{list.map((item) => {
						return(<AutorAccount key={item.type}><a href={item.url}><Icon type={item.type} /></a><span>{item.content}</span></AutorAccount>)
					})}
				</AutorContent>
			</AutorWrapper>
		)
	}
}

export default Author