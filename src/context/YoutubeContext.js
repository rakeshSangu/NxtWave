import React from 'react'

const YoutubeContext = React.createContext({
  savedVideosList: [],
  isDarkMode: true,
  changeMode: ()=> {},
  saveVideo: () => {},
  deleteSavedVideo: () => {},
})

export default YoutubeContext
