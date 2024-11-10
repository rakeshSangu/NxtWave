import styled from 'styled-components'

export const HomeSideBarAndVideosContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
    display: flex;
    justify-content: space-between;
    height: 90vh;
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

export const VideosListContainer = styled.ul`
    list-style-type: none;
    width: 100%;
    padding-left: 0px;
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px){
        padding-top: 10px;
        padding-left: 25px;
    }
`

export const HeadingAndVideosContainer = styled.div`
    overflow: auto;
    width: 100%;
    @media(min-width: 768px){
        width: 100%;
    }
`
