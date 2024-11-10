import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import YoutubeContext from '../../context/YoutubeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeSideBarAndVideosContainer,
  VideoDetailsContainer,
  VideoPlayerContainer,
  DetailsContainer,
  TitleHeading,
  ViewsAndLikeSaveContainer,
  ViewsAndDateContaier,
  DetailsPara,
  LikeSaveContainer,
  IconsButton,
  IconLabel,
  SaveIconLabel,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelNameContainer,
  ChannelPara,
  ChannelSubscribers,
  VideoDescription,
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

class VideoItemDetails extends Component {
  state = {
    getVideoDetailsApiStatus: apiStatusObj.initial,
    videoDetails: {},
    isLiked: 'initial',
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  onSuccessApiRequest = data => {
    const videoDetailsObj = data.video_details
    const updatedVideoDetailsObj = {
      id: videoDetailsObj.id,
      title: videoDetailsObj.title,
      thumbnailUrl: videoDetailsObj.thumbnail_url,
      videoUrl: videoDetailsObj.video_url,
      channel: {
        name: videoDetailsObj.channel.name,
        profileImageUrl: videoDetailsObj.channel.profile_image_url,
        subscriberCount: videoDetailsObj.channel.subscriber_count,
      },
      viewCount: videoDetailsObj.view_count,
      publishedAt: videoDetailsObj.published_at,
      description: videoDetailsObj.description,
    }

    this.setState({
      videoDetails: updatedVideoDetailsObj,
      getVideoDetailsApiStatus: apiStatusObj.success,
    })
  }

  getVideoItemDetails = async () => {
    this.setState({
      getVideoDetailsApiStatus: apiStatusObj.pending,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
        getVideoDetailsApiStatus: apiStatusObj.failure,
      })
    }
  }

  onClickLike = () => {
    this.setState({
      isLiked: true,
    })
  }

  onClickDisLike = () => {
    this.setState({
      isLiked: false,
    })
  }

  renderVideoView = () => {
    const {videoDetails, isLiked} = this.state
    const {
      id,
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const formatedDistance = formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
    })
    const yearIndex = formatedDistance.indexOf(' ') + 1
    const distanceDate = formatedDistance.slice(yearIndex)
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {saveVideo, savedVideosList, deleteSavedVideo, isDarkMode} =
            value
          let isSaved = false
          savedVideosList.forEach(each => {
            if (each.id === id) {
              isSaved = true
            }
          })
          const onClickSaveButton = () => {
            if (isSaved === false) {
              saveVideo(videoDetails)
            } else {
              deleteSavedVideo(id)
            }
          }

          return (
            <>
              <VideoPlayerContainer>
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="100%"
                  url={videoUrl}
                />
              </VideoPlayerContainer>
              <DetailsContainer>
                <TitleHeading isDarkMode={isDarkMode}>{title}</TitleHeading>
                <ViewsAndLikeSaveContainer>
                  <ViewsAndDateContaier>
                    <DetailsPara>{viewCount} views</DetailsPara>
                    <BsDot className="video-item-dot" />
                    <DetailsPara>{distanceDate}</DetailsPara>
                  </ViewsAndDateContaier>
                  <LikeSaveContainer>
                    <IconsButton onClick={this.onClickLike}>
                      <BiLike
                        className={
                          isLiked === true
                            ? 'video-details-icon active-icon'
                            : 'video-details-icon'
                        }
                      />
                      <IconLabel
                        isLiked={isLiked === 'initial' ? false : isLiked}
                      >
                        Like
                      </IconLabel>
                    </IconsButton>
                    <IconsButton onClick={this.onClickDisLike}>
                      <BiDislike
                        className={
                          isLiked === false
                            ? 'video-details-icon active-icon'
                            : 'video-details-icon'
                        }
                      />
                      <IconLabel
                        isLiked={isLiked === 'initial' ? false : !isLiked}
                      >
                        Dislike
                      </IconLabel>
                    </IconsButton>
                    <IconsButton onClick={onClickSaveButton}>
                      <RiMenuAddFill
                        className={
                          isSaved === true
                            ? 'video-details-icon active-icon'
                            : 'video-details-icon'
                        }
                      />
                      <SaveIconLabel isSaved={isSaved}>
                        {isSaved ? 'Saved' : 'Save'}
                      </SaveIconLabel>
                    </IconsButton>
                  </LikeSaveContainer>
                </ViewsAndLikeSaveContainer>
                <hr className="hr-element" />
                <ChannelDetailsContainer>
                  <ChannelLogo alt="channel logo" src={profileImageUrl} />
                  <ChannelNameContainer>
                    <ChannelPara isDarkMode={isDarkMode}>{name}</ChannelPara>
                    <ChannelSubscribers>
                      {subscriberCount} subscribers
                    </ChannelSubscribers>
                  </ChannelNameContainer>
                </ChannelDetailsContainer>
                <VideoDescription>{description}</VideoDescription>
              </DetailsContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
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

  renderLoadingView = () => {
    return (
      <div className="loader-container loader-section" data-testid="loader">
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    )
  }

  renderVideoDetailsView = isDarkMode => {
    const {getVideoDetailsApiStatus} = this.state
    switch (getVideoDetailsApiStatus) {
      case apiStatusObj.pending:
        return this.renderLoadingView()
      case apiStatusObj.success:
        return this.renderVideoView()
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
              <Header activeTab="" />
              <HomeSideBarAndVideosContainer
                data-testid="videoItemDetails"
                isDarkMode={isDarkMode}
              >
                <SideBar activeTab="" />
                <VideoDetailsContainer>
                  {this.renderVideoDetailsView(isDarkMode)}
                </VideoDetailsContainer>
              </HomeSideBarAndVideosContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default VideoItemDetails
