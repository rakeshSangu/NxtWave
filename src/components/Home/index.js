import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoMdClose} from 'react-icons/io'
import {IoMdSearch} from 'react-icons/io'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import YoutubeContext from '../../context/YoutubeContext'

import {
  HomeSideBarAndVideosContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerCloseBtn,
  BannerLogoImage,
  BannerSectionPara,
  BannerButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideosListContainer,
  VideoListElement,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewPara,
  RetryButton,
} from './style'

const apiStatusObj = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    userInput: '',
    searchInput: '',
    videosList: [],
    getVidsApiStatus: apiStatusObj.initial,
  }

  componentDidMount = () => {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({
      getVidsApiStatus: apiStatusObj.pending,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      this.onSuccessApiRequest(data)
    } else {
      this.setState({
        getVidsApiStatus: apiStatusObj.failure,
      })
    }
  }

  onSuccessApiRequest = data => {
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
      videosList: modifiedVideosList,
      getVidsApiStatus: apiStatusObj.success,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  closeBanner = () => {
    this.setState(prevState => ({
      showBanner: !prevState.showBanner,
    }))
  }

  onClickSearch = () => {
    const {userInput} = this.state
    this.setState(
      {
        searchInput: userInput,
      },
      this.getVideosData,
    )
  }

  onClickRetry = () => {
    this.getVideosData()
  }

  renderBannerSection = () => {
    return (
      <BannerContainer data-testid="banner">
        <BannerCloseBtn data-testid="close" onClick={this.closeBanner}>
          <IoMdClose className="banner-close-icon" />
        </BannerCloseBtn>
        <BannerLogoImage
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <BannerSectionPara>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerSectionPara>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerContainer>
    )
  }

  renderVideos = isDarkMode => {
    const {largeView} = false
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoResultsView(isDarkMode)
    }
    return videosList.map(each => (
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

  renderHomePageView = isDarkMode => {
    const {getVidsApiStatus} = this.state

    switch (getVidsApiStatus) {
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
    const {showBanner} = this.state
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header activeTab="HOME" />
              <HomeSideBarAndVideosContainer
                data-testid="home"
                isDarkMode={isDarkMode}
              >
                <SideBar activeTab="HOME" />
                <HomeVideosContainer>
                  {showBanner && this.renderBannerSection()}
                  <SearchContainer>
                    <SearchInput
                      onChange={this.onChangeSearchInput}
                      type="search"
                      placeholder="Search"
                      isDarkMode={isDarkMode}
                    />
                    <SearchButton
                      isDarkMode={isDarkMode}
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <IoMdSearch className="home-search-icon" />
                    </SearchButton>
                  </SearchContainer>
                  <HomeVideosListContainer>
                    {this.renderHomePageView(isDarkMode)}
                  </HomeVideosListContainer>
                </HomeVideosContainer>
              </HomeSideBarAndVideosContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default Home
