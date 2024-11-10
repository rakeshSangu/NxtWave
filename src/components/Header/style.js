import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#313131' : '#f9f9f9')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-left: 12px;
    padding-right: 12px;
    @media (min-width: 992px){
        padding-left:40px;
        padding-right: 40px;
    }
    @media (min-width: 768px){
        padding: 15px;
        padding-left:35px;
        padding-right: 35px;
    }

`
export const AppLogoImage = styled.img`
    height: 30px;
    cursor: pointer;
    @media (min-width: 768px){
        height: 40px;
    }
`
export const HeaderLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    @media(min-width: 768px){
        width: 25%;
    }
    @media (min-width: 992px){
        width: 20%;
    }
`

export const HeaderThemeButton = styled.button`
    background-color: transparent;
    border-style: none;
    cursor: pointer;
`

export const ProfileImage = styled.img`
    display: block;
    height: 0px;
    cursor: pointer;
    @media (min-width: 768px){
        height: 30px;
        display: block;
    }
`
export const DropDownButton = styled.button`
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    @media (min-width: 768px){
        display: none;
    }
`
export const MobileLogout = styled.button`
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    @media (min-width: 768px){
        display: none;
    }
`
export const LargeLogoutButton = styled.button`
    background-color: transparent;
    border-style: none;
    display: none;
    color:  #3b82f6;
    border: 3px solid  #3b82f6;
    padding: 6px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    font-weight: bold;
    background-color: transparent; 
    cursor: pointer;
    @media (min-width: 768px){
        display: block;
        
    }
`
export const MobileDropDownListContainer = styled.ul`
    list-style-type: none;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    @media(min-width: 768px){
        display: none;
    }
`
export const DropDownListItem = styled.li`
    background-color: transparent;
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 3px;
`
export const PopupContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => (props.isDarkMode ? '#313131' : '#f9f9f9')};
    padding: 15px;
`

export const PopUpParagraph = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: black; 
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
`
export const PopupButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`

export const PopupCancelButton = styled.button`
    background-color: transparent;
    border: 2px solid black;
    border-color: ${props => (props.isDarkMode ? 'white' : 'black')};
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
    font-size: 15px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 15px;
`
export const PopupConfirmButton = styled.button`
    background-color: #3b82f6;
    color: white;
    padding: 10px;
    border-style: none;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
`
export const MobileMenuPopupContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#313131' : '#f9f9f9')};
    display: flex;
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    flex-direction: column;
`

export const BannerCloseBtn = styled.button`
    background-color: transparent;
    border-style: none;
    align-self: flex-end;
    cursor: pointer;
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
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
    border-radius: 6px;
    background-color: ${props => (props.isActive ? '#909090' : 'transparent')};
    color: ${props => (props.isActive ? 'red' : '')};
    padding-left: 5px;
    padding-right: 5px;
    margin: 5px;
`
export const SideBarPara = styled.p`
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
`
