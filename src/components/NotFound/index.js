import {Component} from 'react'

import YoutubeContext from '../../context/YoutubeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeSideBarAndVideosContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewPara,
  VideosListContainer,
  HeadingAndVideosContainer,
} from './style'

class NotFound extends Component {
  renderFailureView = isDarkMode => (
    <FailureViewContainer>
      <FailureViewImage
        alt="not found"
        src={
          isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        }
      />
      <FailureViewHeading isDarkMode={isDarkMode}>
        Page Not Found
      </FailureViewHeading>
      <FailureViewPara>
        we are sorry, the page you requested could not be found.
      </FailureViewPara>
    </FailureViewContainer>
  )

  render() {
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header activeTab="" />
              <HomeSideBarAndVideosContainer isDarkMode={isDarkMode}>
                <SideBar activeTab="" />
                <HeadingAndVideosContainer>
                  <VideosListContainer>
                    {this.renderFailureView(isDarkMode)}
                  </VideosListContainer>
                </HeadingAndVideosContainer>
              </HomeSideBarAndVideosContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default NotFound
