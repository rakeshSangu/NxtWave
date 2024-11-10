
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoLogoGameControllerB} from 'react-icons/io'

import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import GameItem from '../GameItem'

import YoutubeContext from '../../context/YoutubeContext'

import {
  SideBarAndVideosContainer,
  GamingVideosListContainer,
  GameListItem,
  HeadingAndVideosContainer,
  TrendingHeadingContainer,
  TopLogoContainer,
  HeadingElement,
  FailureViewContainer,
  FailureViewHeading,
  FailureViewImage,
  FailureViewPara,
  RetryButton,
} from './style'

const apiStatusObj = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Gaming extends Component {
  state = {
    getGamesApiStatus: apiStatusObj.initial,
    gamesList: [],
  }

  componentDidMount() {
    this.getGamingItems()
  }

  onSuccessGetGamesApi = data => {
    const {videos} = data
    const gamesList = videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))
    this.setState({
      getGamesApiStatus: apiStatusObj.success,
      gamesList,
    })
  }

  getGamingItems = async () => {
    this.setState({getGamesApiStatus: apiStatusObj.pending})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      this.onSuccessGetGamesApi(data)
    } else {
      this.setState({
        getGamesApiStatus: apiStatusObj.failure,
      })
    }
  }

  renderGameItems = () => {
    const {gamesList} = this.state
    return gamesList.map(each => {
      const onClickVideoItem = () => {
        const {history} = this.props
        history.push(`videos/${each.id}`)
      }
      return (
        <GameListItem onClick={onClickVideoItem} key={each.id}>
          <GameItem gameItemDetails={each} />
        </GameListItem>
      )
    })
  }

  renderLoadingView = () => {
    return (
      <div className="loader-container loader-section" data-testid="loader">
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    )
  }

  onClickRetry = () => {
    this.getGamingItems()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureViewImage
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewPara>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </FailureViewPara>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderBottomSectionView = () => {
    const {getGamesApiStatus} = this.state
    switch (getGamesApiStatus) {
      case apiStatusObj.success:
        return this.renderGameItems()
      case apiStatusObj.pending:
        return this.renderLoadingView()
      case apiStatusObj.failure:
        return this.renderFailureView()
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
              <Header activeTab="GAMING" />
              <SideBarAndVideosContainer>
                <SideBar activeTab="GAMING" />
                <HeadingAndVideosContainer
                  data-testid="gaming"
                  isDarkMode={isDarkMode}
                >
                  <TrendingHeadingContainer>
                    <TopLogoContainer>
                      <IoLogoGameControllerB className="route-logo" />
                    </TopLogoContainer>
                    <HeadingElement>Gaming</HeadingElement>
                  </TrendingHeadingContainer>
                  <GamingVideosListContainer>
                    {this.renderBottomSectionView()}
                  </GamingVideosListContainer>
                </HeadingAndVideosContainer>
              </SideBarAndVideosContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default Gaming
