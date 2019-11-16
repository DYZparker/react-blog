import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 3.3rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
`

export const HeaderTitle = styled.div`
  display: inline-block;
  height: 3.3rem;
  img {
    height: 100%;
  }
`

export const LoginTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0;
`
