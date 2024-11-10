import styled from 'styled-components'

export const HomeSideBarAndVideosContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
    display: flex;
    justify-content: space-between;
    min-height: 90vh;
`

export const FailureViewContainer = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 30px;
`

export const FailureViewImage = styled.img`
    height: 20vh;
    @media(min-width: 992px){
        height: 30vh;
    }
`

export const FailureViewHeading = styled.h1`
    font-size: 24px;
    font-wight: bold;
    color: #181818;
    margin-bottom: 0px;
`
export const FailureViewPara = styled.p`
    color: #64748b;
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
    maargin-bottom: 5px;
`
export const RetryButton = styled.button`
    background-color: #4f46e5;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border-style: none;
    cursor: pointer;
    border-radius: 6px;
`

export const VideoDetailsContainer = styled.div`
    width: 100%;
    padding-top: 10px;
    @media(min-width: 768px){
        margin-top: 0px;
        height: 90vh;
        overflow: auto;
        margin-left: 50px;
        padding-top: 50px;
    }
`
export const VideoPlayerContainer = styled.div`
    width: 100%;
    min-height: 300px;
    max-height: 500px;
    height: 35vh;
    background-color: #0f0f0f;
    padding-top: 15px;
    padding-bottom: 15px;
    @media(min-width: 768px){
        height: 70vh;
        width: 95%;
        padding-top: 0px;
    }
`
export const DetailsContainer = styled.div`
    padding: 10px;
    background-color: transparent;
    @media(min-width: 768px){
        padding-left: 0px;
    }
    padding-bottom: 20px;
`
export const TitleHeading = styled.p`
    color: ${props => (props.isDarkMode ? 'white' : '#475569')};
    font-weight: bold;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    @media(min-width: 768px){
        font-size: 25px;
    }
`
export const ViewsAndLikeSaveContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 10px;
    @media(min-width: 768px){
        padding-top: 0px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 95%;
    }
`
export const ViewsAndDateContaier = styled.div`
    display: flex;
    align-items: center;
`
export const DetailsPara = styled.p`
    color: #94a3b8;
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    @media(min-width: 768px){
        font-size: 18px;
    }
`
export const LikeSaveContainer = styled.div`
    display: flex;  
    padding-top: 15px;  
    @media(min-wiidth: 768px){
        padding-top: 0px;
    }
`
export const IconsButton = styled.button`
    background-color: transparent;
    border-style: none;
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin-right: 15px;
    cursor: pointer;
`
export const IconLabel = styled.p`
    color: ${props => (props.isLiked === true ? '#2563eb' : '#64748b')};
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    margin-left: 5px;
`
export const SaveIconLabel = styled.p`
    color: ${props => (props.isSaved === true ? '#2563eb' : '#64748b')};
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    margin-left: 5px;
`

export const ChannelDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`
export const ChannelLogo = styled.img`
    border-radius: 100px;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    @media(min-width: 768px){
        height: 60px;
        width: 60px;
    }
`
export const ChannelNameContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ChannelPara = styled.p`
    color: ${props => (props.isDarkMode ? 'white' : '#475569')};
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
`
export const ChannelSubscribers = styled.p`
    color: #94a3b8;
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
    margin-top: 2px;
`
export const VideoDescription = styled.p`
    color: #7e858e;
    font-size: 17px;
    font-weight: 500;
`
