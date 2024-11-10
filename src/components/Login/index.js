import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import YoutubeContext from '../../context/YoutubeContext'

import {
  LoginBackgroundContainer,
  LoginBox,
  LoginImage,
  LoginInputContainer,
  LabelElement,
  LoginInputElement,
  ShowPasswordInputContainer,
  CheckBoxInput,
  ShowPasswordLabel,
  LoginButton,
  LoginErrorMessagePara,
} from './style'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMessage: '',
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const inputDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(inputDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      const jwttoken = data.jwt_token
      Cookies.set('jwt_token', jwttoken, {expires: 2})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        errorMessage: data.error_msg,
      })
    }
  }

  render() {
    const {showPassword, username, password, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginBackgroundContainer isDarkMode={isDarkMode}>
              <LoginBox isDarkMode={isDarkMode} onSubmit={this.onSubmitLogin}>
                <LoginImage
                  alt="website logo"
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <LoginInputContainer>
                  <LabelElement isDarkMode={isDarkMode} htmlFor="username">
                    USERNAME
                  </LabelElement>
                  <LoginInputElement
                    id="username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    isDarkMode={isDarkMode}
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LabelElement isDarkMode={isDarkMode} htmlFor="password">
                    PASSWORD
                  </LabelElement>
                  <LoginInputElement
                    id="password"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.onChangePassword}
                    isDarkMode={isDarkMode}
                  />
                </LoginInputContainer>
                <ShowPasswordInputContainer>
                  <CheckBoxInput
                    onChange={this.onClickShowPassword}
                    checked={showPassword}
                    id="show-password"
                    type="checkbox"
                  />
                  <ShowPasswordLabel
                    isDarkMode={isDarkMode}
                    htmlFor="show-password"
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordInputContainer>
                <LoginButton type="submit">Login</LoginButton>
                <LoginErrorMessagePara>
                  {errorMessage !== '' && `*${errorMessage}`}
                </LoginErrorMessagePara>
              </LoginBox>
            </LoginBackgroundContainer>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default Login
