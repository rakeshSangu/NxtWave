import styled from 'styled-components'

export const SideBarFullContainer = styled.div`
    display: none;
    background-color: ${props => (props.isDarkMode ? '#313131' : '#f9f9f9')};
    margin-right: px;
    height: 90vh;
    @media(min-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
        padding-left: 25px;
        padding-right: 25px;
    }
`

export const SideBarListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 0px;

`
export const SideBarListItem = styled.li`
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: ${props => (props.isActive ? '#909090' : 'transparent')};
    color: ${props => (props.isActive ? 'red' : '')};
    border-radius: 5px;
`
export const SideBarPara = styled.p`
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
`
export const SideBarContactUsContainer = styled.div`
    padding-bottom: 10px;
`
export const ContactUsHeading = styled.p`
    color: ${props => (props.isDarkMode ? '#ebebeb' : '#1e293b')};
    font-size: 20px;
    font-weight: bold;
`
export const ContactUsImageContainer = styled.div`
    display: flex;
    align-item: center;
`
export const SideAppImage = styled.img`
    height: 30px;
    margin-right: 10px;
`
export const ContactUsPara = styled.p`
    color: ${props => (props.isDarkMode ? '#f4f4f4' : 'black')};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
`
