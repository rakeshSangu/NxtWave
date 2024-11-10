import YoutubeContext from '../../context/YoutubeContext'

import {
  GameItemImage,
  GameItemTitlePara,
  GameItemViewsContainer,
  ViewsCountPara,
  WatchingPara,
} from './style'

const GameItem = props => {
  const {gameItemDetails} = props
  const {title, thumbnailUrl, viewCount} = gameItemDetails
  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <>
            <GameItemImage alt="video thumbnail" src={thumbnailUrl} />
            <GameItemTitlePara isDarkMode={isDarkMode}>
              {title}
            </GameItemTitlePara>
            <GameItemViewsContainer>
              <ViewsCountPara>{viewCount} Watching</ViewsCountPara>
              <WatchingPara>Worldwide</WatchingPara>
            </GameItemViewsContainer>
          </>
        )
      }}
    </YoutubeContext.Consumer>
  )
}
export default GameItem
