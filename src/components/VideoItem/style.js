import styled from 'styled-components'

export const VideoItemThumbNailImage = styled.img`
    height: ${props => (props.largeView === true ? '220px' : '180px')};
    width: 100%;
    @media (min-width: 576px){
        width: ${props => (props.largeView === true ? '40%' : '100%')};
        margin-right: ${props => (props.largeView === true ? '15px' : '0px')};
    }
`
export const VideoItemDetailsContainer = styled.div`
    display: flex;
    align-item: center;
    padding-top: 6px;
    @media (min-width: 576px){
        width: ${props => (props.largeView === true ? '60%' : '100%')};
        
    }
`
export const VideoItemChannelImage = styled.img`
    height: 40px;
    margin-top: 6px;
    border-radius: 100px;
    margin-right: 10px;
    padding-left: 5px;
    @media(min-width: 768px){
        height: 50px;
        display: ${props => (props.largeView === true ? 'none' : 'block')};
    }
`
export const NameViewsDateContainer = styled.div`
    display: flex;  
    flex-direction: column;
`
export const VideoItemTitlePara = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: ${props => (props.isDarkMode ? '#f1f1f1' : '#475569')};
    margin: 0px;
    @media(min-width: 576px){
        font-size: ${props => (props.largeView === true ? '22px' : '17px')};
        font-weight: 700;
    }
`
export const VideoItemChannelNamePara = styled.p`
    font-size: 18px;
    margin: 0px;
    font-weight: 500;
    margin-top: 5px;
    color: #7e858e;
    display: none;
    @media(min-width: 576px){
        display: block;
`
export const ViewsDateContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
`
export const VideoItemViews = styled.p`
    font-size: 15px;
    color:  #7e858e;
    margin: 0px;
    font-weight: 500;
    @media(min-width: 576px){
        font-size: 16px;
    }
`
export const VideoItemDate = styled.p`
    font-size: 15px;
    color:  #7e858e;
    margin: 0px;
    font-weight: 500;
    @media(min-width: 576px){
        font-size: 16px;
    }
`
export const VideoItemMobileName = styled.p`
    font-size: 15px;
    color:  #7e858e;
    margin: 0px;
    font-weight: 500;
    @media(min-width: 576px){
        display: none;
    }
`
