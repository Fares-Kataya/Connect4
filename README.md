# Connect4  
  
A modern social networking platform that helps you connect with the people who matter most.  
  
## Overview  
  
Connect4 is a full-stack web application  built with React, Redux Toolkit, React Router, and Prisma/Express on the backend. it allows users to create accounts, share posts and articles, and connect with others. The platform features a clean, intuitive interface with support for different content types and privacy controls.  

## Features  
  
- **Authentication:** JWT-based Register/Login flow with persisted Redux state. 
- **Content Creation:** Create and publish both short-form posts and long-form articles
- **Authorized Content:** Authorized Altering and deletetion of your own posts  
- **Media Support**: Image upload support using ImgBB    
- **CRUD Operations:** Create, read, update, and delete posts/articles via a RESTful Express API backed by Prisma ORM.
- **Time-ago Display:** Human-friendly timestamps (e.g. “9 minutes ago”).
- **Optimistic UI Updates:** Deletions immediately removed from client state.
- **Responsive, Themed UI:** Light/dark modes,Infinite scroll of posts with loading skeletons, TailwindCSS components.

## Tech Stack  
  
### Frontend  
- React.js with Vite for fast development and building  
- Redux Toolkit for state management  
- React Router for navigation
- TailwindCSS along with DaisyUI plugin for Styling  
- Modern UI with responsive design  
  
### Backend  
- Node.js server  
- PostgreSQL database with Prisma ORM  
- RESTful API architecture  
  
## Project Structure
```/
├─ client/                 # React app
│  ├─ src/
│  │  ├─ components/       # Reusable UI (Navbar, PostCard, etc.)
│  │  ├─ pages/            # Route components (Home, Login, AddPost, etc.)
│  │  ├─ Slices/           # Redux Toolkit slices (authSlice)
│  │  ├─ utils/            # Helpers (timeAgo)
│  │  └─ App.jsx           # Router + layout
│  └─ tailwind.config.js
├─ server/                 # Express + Prisma backend
│  ├─ controllers/         # authController, postController
│  ├─ routes/              # authRoutes, postRoutes
│  ├─ middlewares/         # auth, validate
│  ├─ utils/               # Joi schemas
│  ├─ db/
│  │  ├─ prisma.js         # Prisma client
│  │  └─ mongo.js          # Mongoose setup
│  └─ index.js             # App entrypoint
└─ README.md
```
## Future Enhancements (In Development) 
- **Real-time Chat & Notifications:** Socket.io integration for live messaging and push notifications.
- **Comments & Reactions:** Nested comments and emoji reactions on posts (to be implemented using MongoDB and the Mongoose ODM).
- **Profiles & Follow System:** Follow/unfollow users, profile pages with bio and activity feed (to be implemented using MongoDB and the Mongoose ODM).
- **Media Galleries:** Multiple image uploads per post and image carousel.
- **Mobile Responsiveness & PWA:** Enhance UX on mobile, offline support via service workers.
- **Post & Article Creation:** More Rich post/Article editor with image/video attachments, previews, scheduling, drafts, and privacy controls.
- **Privacy Controls**: Control who can see your content

## Getting Started  
  
### Prerequisites  
  
- Node.js (v14 or higher)  
- npm (v6 or higher)  
- PostgreSQL database  
  
### Installation  
  
1. Clone the repository:
```
git clone https://github.com/Fares-Kataya/Connect4.git
cd Connect4
```
2. Install dependencies:
```
npm install
cd Client && npm install
cd ../Server && npm install
```
3. Set up environment variables:  
- Create `.env` files in both Client and Server directories  
- Configure database connection in Server/.env  

4. Start the development servers:
```npm run dev```
This will start both the client and server in development mode.  

## Development  

The project uses a concurrent development setup where both client and server run simultaneously:  

- Client development server: `npm run dev:client`  
- Server development server: `npm run dev:server`  
- Both together: `npm run dev`

[Demo Video Link ](https://drive.google.com/file/d/11FQ9nFR82Yi3SstXpkqD16CpyyiNyuCN/view)
