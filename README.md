# 🎧 Wubble QuickTune Mini AI Music Preview Generator

An AI-inspired music preview generator web app that allows users to choose a **mood** and **genre**, then generates a royalty-free music preview with playback, download, like, and recent history features.

## 🌐 Live Demo

> (https://wubble-beta.vercel.app/)

## 📁 Project Structure

### 🔙 Backend: `wubble-backend/`

A lightweight Node.js server that:
- Serves a set of pre-defined royalty-free tracks
- Filters and returns a track based on user-selected mood & genre

#### Folder Structure

```
wubble-backend/
├── controllers/
│   └── trackController.js    # Logic for generating & returning tracks
├── data/
│   └── sampleTracks.js       # Hardcoded track metadata
├── routes/
│   └── trackRoutes.js        # API routing
├── server.js                 # Main Express server entry
├── package.json              # Backend dependencies
```

#### API Endpoints

| Method | Endpoint         | Description                        |
|--------|------------------|------------------------------------|
| POST   | `/api/generate`  | Returns a randomly selected track  |
| GET    | `/api/tracks`    | Returns all predefined tracks      |

### 💻 Frontend: `wubble/`

A React single-page app (SPA) with the following features:
- Mood & Genre selection
- Music playback with audio player
- Download button
- Like/Unlike tracks (stored in-memory)
- Recent track history
- Toast notifications

#### Folder Structure

```
wubble/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── MoodSelector.js
│   │   ├── GenreSelector.js
│   │   ├── TrackPlayer.js
│   │   ├── RecentTracks.js
│   │   └── Toast.js
│   ├── App.js               # Main React component
│   ├── index.js             # ReactDOM entry point
│   └── App.css              # All global styles
├── public/
│   └── index.html
├── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Git

### 🛠 Setup Instructions

#### 1. Setup Backend

```bash
git clone https://github.com/Kunalkudande/Wubble-Backend.git
cd wubble-backend
npm install
node server.js
```

This starts the backend server on `http://localhost:5000`.

#### 2. Setup Frontend

```bash
git clone https://github.com/Kunalkudande/Wubble.git
cd wubble-frontend
npm install
npm run dev
```

This runs the frontend on `http://localhost:3000`.

Make sure the backend is running in parallel to avoid CORS/network issues.

## 🔧 Technologies Used

### Backend:
- Node.js
- Express.js
- CORS

### Frontend:
- React
- Audio APIs
- Toast notifications

## 🎵 Sample Track Sources

All music previews are from [**Bensound**](https://www.bensound.com/royalty-free-music), which provides free tracks for personal or demo projects.

## ✨ Features

- 🎨 Mood & Genre selector
- 🔀 Random AI-inspired music generation
- ▶️ Playback + ⏸ Pause controls
- ❤ Like/favorite toggle
- 🕒 Recent track history
- 📥 Download functionality
- 🔔 Toast notifications
- 💅 Clean, animated UI with CSS transitions
