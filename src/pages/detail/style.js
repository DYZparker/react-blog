import styled from 'styled-components'

export const DetailWrapper = styled.div`
  background-color: #fff;
  border-radius: .3rem;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  padding: 1rem;
  overflow: hidden;
`

export const ArtTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`

export const ArtIcon = styled.div`
  color: #aaa;
  margin: 1rem 0;
  span {
    margin-right: 1.2rem;
  }
`

export const ArtContent = styled.div`
  pre{
    display: block;
    background-color:#f3f3f3;
    padding: .5rem !important;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: .3rem;
  }
  pre{
    background-color: #283646 !important;
  }
  pre >code{
    border:0px !important;
    background-color: #283646 !important;
    color:#FFF;
  }
  code {
    display: inline-block ;
    background-color:#f3f3f3;
    border:1px solid #fdb9cc;
    border-radius:3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color:#4f4f4f;
    margin: 0px 3px;
  }
`