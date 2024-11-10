import {FaMoon} from 'react-icons/fa'

import {IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {IoIosHome} from 'react-icons/io'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddFill} from 'react-icons/ri'
import {AiFillFire} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoSunnyOutline} from 'react-icons/io5'

import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import YoutubeContext from '../../context/YoutubeContext'

import {
  HeaderContainer,
  AppLogoImage,
  HeaderLinksContainer,
  HeaderThemeButton,
  ProfileImage,
  DropDownButton,
  MobileLogout,
  LargeLogoutButton,
  PopupContainer,
  PopUpParagraph,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupConfirmButton,
  MobileMenuPopupContainer,
  BannerCloseBtn,
  SideBarListContainer,
  SideBarListItem,
  SideBarPara,
} from './style'

class Header extends Component {
  logOut = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderLogoutPopup = (isDarkMode, close) => {
    return (
      <PopupContainer isDarkMode={isDarkMode}>
        <PopUpParagraph isDarkMode={isDarkMode}>
          Are you sure, you want to logout
        </PopUpParagraph>
        <PopupButtonsContainer>
          <PopupCancelButton isDarkMode={isDarkMode} onClick={() => close()}>
            Cancel
          </PopupCancelButton>
          <PopupConfirmButton onClick={this.logOut}>Confirm</PopupConfirmButton>
        </PopupButtonsContainer>
      </PopupContainer>
    )
  }

  render() {
    const {activeTab} = this.props
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkMode, changeMode} = value
          const onClickChangeMode = () => {
            changeMode()
          }
          return (
            <>
              <HeaderContainer isDarkMode={isDarkMode}>
                <Link to="/">
                  <AppLogoImage
                    alt="website logo"
                    src={
                      isDarkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                  />
                </Link>
                <HeaderLinksContainer>
                  <HeaderThemeButton
                    data-testid="theme"
                    onClick={onClickChangeMode}
                  >
                    {isDarkMode && (
                      <IoSunnyOutline className="header-links-dark" />
                    )}
                    {!isDarkMode && <FaMoon className="header-links" />}
                  </HeaderThemeButton>
                  <ProfileImage
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                  <Popup
                    modal
                    trigger={
                      <DropDownButton>
                        <IoMenu
                          className={
                            isDarkMode ? 'header-links-dark' : 'header-links'
                          }
                        />
                      </DropDownButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <MobileMenuPopupContainer isDarkMode={isDarkMode}>
                        <BannerCloseBtn
                          isDarkMode={isDarkMode}
                          onClick={() => close()}
                        >
                          <IoMdClose className="banner-close-icon" />
                        </BannerCloseBtn>
                        <SideBarListContainer>
                          <Link
                            className={
                              isDarkMode
                                ? 'light-link-item white-text'
                                : 'light-link-item'
                            }
                            to="/"
                          >
                            <SideBarListItem isActive={activeTab === 'HOME'}>
                              <IoIosHome className="sidebar-icon" />
                              <SideBarPara isDarkMode={isDarkMode}>
                                Home
                              </SideBarPara>
                            </SideBarListItem>
                          </Link>
                          <Link
                            className={
                              isDarkMode
                                ? 'light-link-item white-text'
                                : 'light-link-item'
                            }
                            to="/trending"
                          >
                            <SideBarListItem
                              isActive={activeTab === 'TRENDING'}
                            >
                              <AiFillFire className="sidebar-icon" />
                              <SideBarPara isDarkMode={isDarkMode}>
                                Trending
                              </SideBarPara>
                            </SideBarListItem>
                          </Link>
                          <Link
                            className={
                              isDarkMode
                                ? 'light-link-item white-text'
                                : 'light-link-item'
                            }
                            to="/gaming"
                          >
                            <SideBarListItem isActive={activeTab === 'GAMING'}>
                              <IoLogoGameControllerB className="sidebar-icon" />
                              <SideBarPara isDarkMode={isDarkMode}>
                                Gaming
                              </SideBarPara>
                            </SideBarListItem>
                          </Link>
                          <Link
                            className={
                              isDarkMode
                                ? 'light-link-item white-text'
                                : 'light-link-item'
                            }
                            to="/saved-videos"
                          >
                            <SideBarListItem isActive={activeTab === 'SAVED'}>
                              <RiMenuAddFill className="sidebar-icon" />
                              <SideBarPara isDarkMode={isDarkMode}>
                                Saved videos
                              </SideBarPara>
                            </SideBarListItem>
                          </Link>
                        </SideBarListContainer>
                      </MobileMenuPopupContainer>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <MobileLogout>
                        <FiLogOut
                          className={
                            isDarkMode ? 'header-links-dark' : 'header-links'
                          }
                        />
                      </MobileLogout>
                    }
                    className="popup-content"
                  >
                    {close => this.renderLogoutPopup(isDarkMode, close)}
                  </Popup>

                  <Popup
                    modal
                    trigger={<LargeLogoutButton>Logout</LargeLogoutButton>}
                    className="popup-content"
                  >
                    {close => this.renderLogoutPopup(isDarkMode, close)}
                  </Popup>
                </HeaderLinksContainer>
              </HeaderContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default withRouter(Header)
