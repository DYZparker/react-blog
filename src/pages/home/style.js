import styled from 'styled-components'
import { Tabs, Card } from 'antd'

const { TabPane } = Tabs
const { Meta } = Card

export const TopicWrapper = styled.div`
  overflow: hidden;
  height: 16rem;
  border-radius: .3rem;
  box-sizing: border-box;
  img {
    width: 100%;
  }
`

export const TabBarWrapper = styled.div`
  background-color: #fff;
  margin-top: 1.7rem;
  height: 24rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: 1rem;
  overflow: hidden;
`

export const WrapperTabPane = styled(TabPane)`
  display: flex;
  justify-content: flex-start;
`

export const WrapperCard = styled.div`
  margin: 0 1.5rem;
`

export const WrapperMeta = styled(Meta)`
  text-align: center;
`

export const ListWrapper = styled.div`
  background-color: #fff;
  margin-top: 1.7rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: 1rem;
  overflow: hidden;
`