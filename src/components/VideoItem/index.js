import {BsDot} from 'react-icons/bs'

import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemThumbNailImage,
  VideoItemDetailsContainer,
  VideoItemChannelImage,
  NameViewsDateContainer,
  VideoItemTitlePara,
  VideoItemChannelNamePara,
  ViewsDateContainer,
  VideoItemViews,
  VideoItemDate,
  VideoItemMobileName,
} from './style'

import YoutubeContext from '../../context/YoutubeContext'

const VideoItem = props => {
  const {videoItemObj, largeView} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoItemObj
  const {name, profileImageUrl} = channel
  const formatedDistance = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })
  const yearIndex = formatedDistance.indexOf(' ') + 1
  const distanceDate = formatedDistance.slice(yearIndex)

  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <Link
            to={`videos/${id}`}
            className={largeView ? 'large-video-link' : 'video-link'}
          >
            <VideoItemThumbNailImage
              alt="video thumbnail"
              largeView={largeView}
              src={thumbnailUrl}
            />
            <VideoItemDetailsContainer>
              <VideoItemChannelImage
                largeView={largeView}
                src={profileImageUrl}
                alt="channel logo"
              />
              <NameViewsDateContainer>
                <VideoItemTitlePara
                  isDarkMode={isDarkMode}
                  largeView={largeView}
                >
                  {title}
                </VideoItemTitlePara>
                <VideoItemChannelNamePara>{name}</VideoItemChannelNamePara>
                <ViewsDateContainer>
                  <VideoItemMobileName>{name}</VideoItemMobileName>
                  <BsDot className="video-item-dot large-view-dot" />
                  <VideoItemViews>{viewCount} Views</VideoItemViews>
                  <BsDot className="video-item-dot" />
                  <VideoItemDate>{distanceDate}</VideoItemDate>
                </ViewsDateContainer>
              </NameViewsDateContainer>
            </VideoItemDetailsContainer>
          </Link>
        )
      }}
    </YoutubeContext.Consumer>
  )
}
export default VideoItem
