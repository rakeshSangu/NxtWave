import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import {Component} from 'react'

import YoutubeContext from '../../context/YoutubeContext'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  HomeSideBarAndVideosContainer,
  VideoListElement,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewPara,
  RetryButton,
  VideosListContainer,
  HeadingAndVideosContainer,
  TrendingHeadingContainer,
  TopLogoContainer,
  HeadingElement,
} from './style'

const apiStatusObj = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Trending extends Component {
  state = {
    trendingVidsApiStatus: apiStatusObj.initial,
    trendingVideosList: [],
  }

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  onSuccessTrendingApiRequest = data => {
    const {videos} = data
    const modifiedVideosList = videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
      publishedAt: each.published_at,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
    }))
    this.setState({
      trendingVideosList: modifiedVideosList,
      trendingVidsApiStatus: apiStatusObj.success,
    })
  }

  getTrendingVideos = async () => {
    this.setState({
      trendingVidsApiStatus: apiStatusObj.pending,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      this.onSuccessTrendingApiRequest(data)
    } else {
      this.setState({
        trendingVidsApiStatus: apiStatusObj.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderNoResultsView = isDarkMode => (
    <FailureViewContainer>
      <FailureViewImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailureViewHeading isDarkMode={isDarkMode}>
        No Search results found
      </FailureViewHeading>
      <FailureViewPara>
        Try different key words or remove search filter
      </FailureViewPara>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderVideos = isDarkMode => {
    const largeView = true
    const {trendingVideosList} = this.state
    if (trendingVideosList.length === 0) {
      return this.renderNoResultsView(isDarkMode)
    }
    return trendingVideosList.map(each => (
      <VideoListElement key={each.id}>
        <VideoItem largeView={largeView} videoItemObj={each} />
      </VideoListElement>
    ))
  }

  renderLoadingView = () => {
    return (
      <div className="loader-container loader-section" data-testid="loader">
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    )
  }

  renderFailureView = isDarkMode => (
    <FailureViewContainer>
      <FailureViewImage
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <FailureViewHeading isDarkMode={isDarkMode}>
        Oops! Something Went Wrong
      </FailureViewHeading>
      <FailureViewPara>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </FailureViewPara>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderTrendingPageView = isDarkMode => {
    const {trendingVidsApiStatus} = this.state
    switch (trendingVidsApiStatus) {
      case apiStatusObj.success:
        return this.renderVideos(isDarkMode)
      case apiStatusObj.pending:
        return this.renderLoadingView()
      case apiStatusObj.failure:
        return this.renderFailureView(isDarkMode)
      default:
        return ''
    }
  }

  render() {
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header activeTab="TRENDING" />
              <HomeSideBarAndVideosContainer
                data-testid="trending"
                isDarkMode={isDarkMode}
              >
                <SideBar activeTab="TRENDING" />
                <HeadingAndVideosContainer>
                  <TrendingHeadingContainer>
                    <TopLogoContainer>
                      <AiFillFire className="route-logo" />
                    </TopLogoContainer>
                    <HeadingElement>Trending</HeadingElement>
                  </TrendingHeadingContainer>
                  <VideosListContainer>
                    {this.renderTrendingPageView(isDarkMode)}
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
export default Trending
