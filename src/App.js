import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import YoutubeContext from './context/YoutubeContext'

// Replace your code here
class App extends Component {
  state = {
    savedVideosList: [],
    isDarkMode: false,
  }

  saveVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  deleteSavedVideo = id => {
    const {savedVideosList} = this.state
    const filteredSaveList = savedVideosList.filter(each => each.id !== id)
    this.setState({
      savedVideosList: filteredSaveList,
    })
  }

  changeMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {savedVideosList, isDarkMode} = this.state
    return (
      <YoutubeContext.Provider
        value={{
          savedVideosList,
          isDarkMode,
          saveVideo: this.saveVideo,
          deleteSavedVideo: this.deleteSavedVideo,
          changeMode: this.changeMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </YoutubeContext.Provider>
    )
  }
}

export default App
