import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TagListWrapper = styled.div`
  background-color: #fff;
  border-radius: .3rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: 1.5rem;
  overflow: hidden;
`

export const LinkTitle = styled(Link)`
  font-size: 1.5rem;
`

export const TagListContent = styled.div`
  margin: 0 0 .5rem;
  font-size: .8rem;
  height: 4.5rem;
  line-height: 1.5rem;
  color: #777;
  overflow: hidden;
`