import styled from 'styled-components'

export const RouterListWrapper = styled.div`
  /* .fade-enter, .fade-appear {
    opacity: 0;
  }

  .fade-enter-active, .fade-appear-active { 
    opacity: 1;
    transition: opacity .5s ease-in;
  }

  .fade-enter-done {
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity .5s ease-in;
  } */

  /* .fade-exit-done {
    opacity: 0;
  } */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 5s ease-in;
  }
  /* .fade-enter-done {
    opacity: 1;
  } */
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 5s ease-in;
  }
  /* .fade-exit-done {
    opacity: 0;
  } */

`
