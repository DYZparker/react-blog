import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Icon, List } from 'antd'
import { TagListWrapper } from './style'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
		id: '301',
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class TagList extends PureComponent {

	render() {
		return (
			<TagListWrapper>
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: page => {
							console.log(page);
						},
						pageSize: 5,
					}}
					dataSource={listData}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[
								<IconText type="calendar" text="2019-11-12" key="list-vertical-calendar" />,
								<IconText type="tags" text="react" key="list-vertical-tags" />
							]}
							extra={
								<img
									width={272}
									alt="logo"
									src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
								/>
							}
						>
							<List.Item.Meta
								title={<Link to={'/detail/' + item.id} style={{ fontSize: 30 }}>{item.title}</Link>}
							/>
							{item.content}
						</List.Item>
					)}
				/>
			</TagListWrapper>
		)
	}
}

export default TagList