import styled from 'styled-components'

export const HomeSideBarAndVideosContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
    display: flex;
    justify-content: space-between;
    height: 90vh;
`
export const VideoListElement = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media(min-width: 576px){
        flex-direction: row;
        margin-bottom: 15px;
    }
    @media(min-width: 768px){
        margin-bottom: 30px;
        
    }
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
    color: ${props => (props.isDarkMode ? 'white' : '#181818')};
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

export const VideosListContainer = styled.ul`
    list-style-type: none;
    width: 100%;
    padding-left: 0px;
    display: flex;
    height: 75vh;
    flex-direction: column;
    @media(min-width: 768px){
        padding-top: 10px;
        padding-left: 25px;
    }
`
export const TrendingHeadingContainer = styled.div`
    width: 100%;
    background-color: #ebebeb;
    display: flex;
    align-items: center;
    padding: 15px;
    padding-left: 20px;
    margin-bottom: 15px;
`

export const TopLogoContainer = styled.div`
    background-color:  #d7dfe9;
    border-radius: 200px;
    color: red;
    padding: 15px;
`
export const HeadingElement = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
`
export const HeadingAndVideosContainer = styled.div`
    overflow: auto;
    width: 100%;
    @media(min-width: 768px){
        width: 100%;
    }
`
