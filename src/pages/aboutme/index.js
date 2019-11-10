import React, { PureComponent } from 'react'
import { AboutMeWrapper } from './style'

class AboutMe extends PureComponent {
    render() {
        return (
          <AboutMeWrapper>
          {console.log('aboutme')}
            AboutMe
          </AboutMeWrapper>
        )
    }
}

export default AboutMe