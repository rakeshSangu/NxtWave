import {IoIosHome} from 'react-icons/io'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddFill} from 'react-icons/ri'
import {AiFillFire} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import YoutubeContext from '../../context/YoutubeContext'

import {
  SideBarFullContainer,
  SideBarListContainer,
  SideBarListItem,
  SideBarPara,
  SideBarContactUsContainer,
  ContactUsHeading,
  ContactUsImageContainer,
  SideAppImage,
  ContactUsPara,
} from './style'

const SideBar = props => (
  <YoutubeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {activeTab} = props
      return (
        <SideBarFullContainer isDarkMode={isDarkMode}>
          <SideBarListContainer>
            <Link
              className={
                isDarkMode ? 'light-link-item white-text' : 'light-link-item'
              }
              to="/"
            >
              <SideBarListItem isActive={activeTab === 'HOME'}>
                <IoIosHome className="sidebar-icon" />
                <SideBarPara isDarkMode={isDarkMode}>Home</SideBarPara>
              </SideBarListItem>
            </Link>
            <Link
              className={
                isDarkMode ? 'light-link-item white-text' : 'light-link-item'
              }
              to="/trending"
            >
              <SideBarListItem isActive={activeTab === 'TRENDING'}>
                <AiFillFire className="sidebar-icon" />
                <SideBarPara isDarkMode={isDarkMode}>Trending</SideBarPara>
              </SideBarListItem>
            </Link>
            <Link
              className={
                isDarkMode ? 'light-link-item white-text' : 'light-link-item'
              }
              to="/gaming"
            >
              <SideBarListItem isActive={activeTab === 'GAMING'}>
                <IoLogoGameControllerB className="sidebar-icon" />
                <SideBarPara isDarkMode={isDarkMode}>Gaming</SideBarPara>
              </SideBarListItem>
            </Link>
            <Link
              className={
                isDarkMode ? 'light-link-item white-text' : 'light-link-item'
              }
              to="/saved-videos"
            >
              <SideBarListItem isActive={activeTab === 'SAVED'}>
                <RiMenuAddFill className="sidebar-icon" />
                <SideBarPara isDarkMode={isDarkMode}>Saved Videos</SideBarPara>
              </SideBarListItem>
            </Link>
          </SideBarListContainer>
          <SideBarContactUsContainer>
            <ContactUsHeading isDarkMode={isDarkMode}>
              CONTACT US
            </ContactUsHeading>
            <ContactUsImageContainer>
              <a
                href="https://www.facebook.com/nxtwave.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <SideAppImage
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
              </a>
              <a
                href="https://x.com/nxtwave_tech?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <SideAppImage
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rakeshsangu/"
                target="_blank"
                rel="noreferrer"
              >
                <SideAppImage
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </a>
            </ContactUsImageContainer>
            <ContactUsPara isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsPara>
          </SideBarContactUsContainer>
        </SideBarFullContainer>
      )
    }}
  </YoutubeContext.Consumer>
)

export default SideBar
