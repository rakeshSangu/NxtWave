import styled from 'styled-components'

export const GameItemImage = styled.img`
    height: 200px;
    border-radius: 5px;
    width: 100%;
    @media(min-width: 576px){
        height: 250px;
    }
`
export const GameItemTitlePara = styled.p`
    color: ${props => (props.isDarkMode ? 'white' : '#313131')};
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const GameItemViewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 576px){
        flex-direction: row;
    }
`
export const ViewsCountPara = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #64748b; 
    margin: 0px;
    margin-right: 5px;
`
export const WatchingPara = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #64748b; 
    margin: 0px;
    margin-top: px;
`
