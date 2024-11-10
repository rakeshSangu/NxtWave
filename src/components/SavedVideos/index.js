import {AiFillFire} from 'react-icons/ai'

import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import YoutubeContext from '../../context/YoutubeContext'

import {
  HomeSideBarAndVideosContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewPara,
  VideosListContainer,
  HeadingAndVideosContainer,
  TrendingHeadingContainer,
  TopLogoContainer,
  HeadingElement,
  VideoListElement,
} from './style'

class SavedVideos extends Component {
  renderNoResultsView = isDarkMode => (
    <FailureViewContainer>
      <FailureViewImage
        alt="no saved videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      />
      <FailureViewHeading isDarkMode={isDarkMode}>
        No saved videos found
      </FailureViewHeading>
      <FailureViewPara>Save your videos by clicking a button</FailureViewPara>
    </FailureViewContainer>
  )
  render() {
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {savedVideosList, isDarkMode} = value
          const largeView = true
          return (
            <>
              <Header activeTab="SAVED" />
              <HomeSideBarAndVideosContainer
                data-testid="savedVideos"
                isDarkMode={isDarkMode}
              >
                <SideBar activeTab="SAVED" />
                <HeadingAndVideosContainer>
                  <TrendingHeadingContainer>
                    <TopLogoContainer>
                      <AiFillFire className="route-logo" />
                    </TopLogoContainer>
                    <HeadingElement>Saved Videos</HeadingElement>
                  </TrendingHeadingContainer>
                  <VideosListContainer>
                    {savedVideosList.length === 0
                      ? this.renderNoResultsView(isDarkMode)
                      : savedVideosList.map(each => (
                          <VideoListElement key={each.id}>
                            <VideoItem
                              largeView={largeView}
                              videoItemObj={each}
                            />
                          </VideoListElement>
                        ))}
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
export default SavedVideos
