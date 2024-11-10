import styled from 'styled-components'

export const HomeSideBarAndVideosContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
    display: flex;
    padding-left: px;
    padding-right: px;
    @media (min-width: 768px){
        padding-left: px;
        padding-right: px;
    }
`
export const HomeVideosContainer = styled.div`
    width: 100%;
    height: 90vh;
    overflow: auto;
    background-color: transparent;
    
`

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size: cover;
    padding: 10px;
    @media (min-width: 992px){
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;

    }
`
export const BannerCloseBtn = styled.button`
    background-color: transparent;
    border-style: none;
    align-self: flex-end;
    cursor: pointer;
`
export const BannerLogoImage = styled.img`
    height: 25px;
`
export const BannerSectionPara = styled.p`
    color: black;
    font-weight: 500;
    font-size: 18px;
`
export const BannerButton = styled.button`
    background-color: transparent;
    border: 2px solid black;
    font-weight: bold;
    color: black;
    cursor: pointer;
    padding: 6px;
`
export const SearchContainer = styled.div`
    display: flex;
    border: 2px solid #e2e8f0;
    width: 95%;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    @media(min-width: 768px){
        width: 40%;
        margin: 25px;

    }
`
export const SearchInput = styled.input`
    background-color: transparent;
    border-style: none;
    color: black;
    font-size: 18px;
    padding: 8px;
    font-weight: 500;
    flex-grow: 1;
    outline: none;
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const SearchButton = styled.button`
    background-color: transparent;
    width: 45px;
    cursor: pointer;
    border-style: none;
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const HomeVideosListContainer = styled.ul`
    background-color: transparent;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 50vh;
    padding-left: 0px;
    @media(min-width: 576px){
        padding-left: 15px;
    }
    @media(min-width: 768px){
        padding-left: 25px;
    }
`
export const VideoListElement = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media(min-width: 576px){
        width: 45%;
        margin-right: 15px;
        margin-bottom: 15px;
    }
    @media(min-width: 768px){
        width: 30%;
        margin-right: 30px;
        margin-bottom: 40px;
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
    color: #181818;
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
