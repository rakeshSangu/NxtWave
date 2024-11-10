import styled from 'styled-components'

export const SideBarAndVideosContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 90vh;
`
export const GamingVideosListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(min-width: 768px){
        padding-top: 15px;
    }
`
export const GameListItem = styled.li`
    width: 40%;
    margin: 10px;
    cursor: pointer;
    @media(min-width: 576px){
        width: 22%;
        margin: 0px;
        margin-right: 25px;
        margin-bottom: 30px;
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
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
    width: 100%;
    @media(min-width: 768px){
        overflow: auto;
        height: 90vh;
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
