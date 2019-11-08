import React, { PureComponent } from 'react'
import { Icon, Avatar, Divider } from 'antd'
import { 
	AutorWrapper,
	AutorContent,
	AutorAccount
} from '../style'
import autorPic from '../../../statics/image/ssw.jpg'

class Author extends PureComponent {

	render() {
		return (
			<AutorWrapper>
					<Avatar className="autor-avatar" size={100} icon="user" src={autorPic} />
					<AutorContent>
							<p>Web前端学习，Vue、React框架实践，个人服务器端数据库连接，博客项目实战</p>
							<Divider>联系方式</Divider>
							<AutorAccount><a href="http://www.baidu.com"><Icon type="github" /></a><span>：http://www.baidu.com</span></AutorAccount>
							<AutorAccount><a href="http://www.baidu.com"><Icon type="qq" /></a><span>：182345999</span></AutorAccount>
							<AutorAccount><a href="http://www.baidu.com"><Icon type="wechat" /></a><span>：d13880777416</span></AutorAccount>
							<AutorAccount><a href="http://www.baidu.com"><Icon type="mail" /></a><span>：182345999@qq.com</span></AutorAccount>
					</AutorContent>
			</AutorWrapper>
		)
	}
}

export default Author