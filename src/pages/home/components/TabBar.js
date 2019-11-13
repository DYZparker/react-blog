import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Card, List } from 'antd'
import { connect } from 'react-redux'
import { actionCreators as detailActionCreators} from '../../detail/store'
import {
  TabBarWrapper,
  WrapperTabPane,
  WrapperCard,
  WrapperMeta
} from '../style'

function callback(key) {
	console.log(key);
}

class TabBar extends PureComponent {
	render() {
    const { tabList, getDetailInfo } = this.props
		return (
			<TabBarWrapper>
      {console.log('tabbar')}
				<Tabs defaultActiveKey="1" onChange={callback} >
					{tabList.map((item) => {
						return (
							<WrapperTabPane tab={item.title} key={item.id}>
								<WrapperCard>
                  <Card
                    hoverable
                    style={{ width: 160 }}
                    cover={<img alt={item.title} src={item.img} />}
                    onClick={()=>console.log(this.props)}
                  >
                    <WrapperMeta title={item.title} description={item.url} />
                  </Card>
                </WrapperCard>
								<List
									itemLayout="horizontal"
									dataSource={item.child}
									renderItem={item => (
									<List.Item>
										<List.Item.Meta
										title={
											<Link to={"/detail/"+item.id} style={{ fontSize: 20 }} onClick={() => getDetailInfo(item.id)}>
												{item.title}
											</Link>
										}
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

const mapStateToProps = (state) => {
  return {
    tabList: state.getIn(['home', 'tabList']).toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
	getDetailInfo(id) {
		dispatch(detailActionCreators.getDetailData(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)