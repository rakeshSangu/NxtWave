# 🎥 Video Streaming App

A feature-rich video streaming application that allows users to search, explore, and interact with videos across various categories like Trending, Gaming, and more. With JWT authentication for secure login, theme switching for personalized experiences, and comprehensive error handling, this app ensures a seamless user experience.

---

## 🛠 Tech Stack
- **React**: For creating the dynamic and interactive user interface.
- **JavaScript (ES6+)**: The backbone of logic implementation.
- **JWT Authentication**: Secures user login and session management.
- **JWT REST APIs**: Fetches video data, trending content, and gaming videos.
- **CSS**: Styles the app and implements theme switching (Light/Dark mode).
- **React-Player**: Provides seamless video playback.

---

## ✨ Key Features
1. **Login with Authentication**: Users can log in with valid credentials, with custom error messages for invalid attempts.
2. **Search Functionality**: Search for videos dynamically from the homepage with real-time results.
3. **Category Routes (Home, Trending, Gaming, Saved Videos)**: Smooth navigation and error handling for displaying videos by category.
4. **Video Details & Interactions**: View video details with Like, Dislike, and Save options. State management ensures buttons toggle correctly.
5. **Theme Toggle**: Switch between light and dark modes for a personalized experience.
6. **Error Handling & Loader States**: Provides retry options for network errors and loaders for improved user experience.
7. **Logout Popup**: Includes a confirmation popup to prevent accidental logouts.

---

## 💻 Routes Overview
- **Home Route**: Fetches and displays videos with a search bar and dynamic content loading.
- **Trending & Gaming Routes**: Showcases videos from their respective categories with loading and error handling.
- **Video Item Details Route**: Plays videos using React Player, allowing users to like, dislike, or save videos.
- **Saved Videos Route**: Allows users to revisit saved videos with dynamic UI updates for additions/removals.
- **Not Found Route**: Handles random paths gracefully with a custom "404" view.

---

## 🚀 Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-streaming-app.git
