# MovieLand v2 - React Movie Discovery App

This repository contains the source code for **MovieLand v2**, an improved and modernized movie discovery application built with **React.js**, **Appwrite**, and **Tailwind CSS**. This version enhances the browsing experience with a dynamic Trending Movies Algorithm powered by Appwrite.

![Image](https://github.com/user-attachments/assets/be118c64-ca58-419a-8bfa-253c8ab3b5eb)

## Features
- **Trending Movies Algorithm**: Discover trending movies dynamically using Appwrite.
- **Real-Time Search**: Search for movies instantly by typing their titles.
- **Modern UI/UX**: Styled with Tailwind CSS for a sleek and responsive design.
- **Optimized Performance**: Efficient API calls and improved state management.
- **Error Handling**: Gracefully handles API errors for a smooth user experience.

## Tech Stack
- **React.js** - Frontend framework for building the UI.
- **Appwrite** - Backend-as-a-service for database and API management.
- **Tailwind CSS** - Utility-first CSS framework for styling.

  [![My Skills](https://skillicons.dev/icons?i=react,tailwind,appwrite)](https://skillicons.dev)

## Components Overview
1. **App.js**:
   - Manages state and handles API interactions.
   - Displays trending movies and search results dynamically.

2. **MovieCard.jsx**:
   - Reusable component displaying movie details like title, poster, and rating.

3. **TrendingMovies.js**:
   - Fetches and displays trending movies from Appwrite.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movieland-v2.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movieland-v2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Appwrite:
   - Set up an Appwrite project and database.
   - Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:
  ```bash
  VITE_IMDB_API_KEY=
  VITE_APPWRITE_PROJECT_ID=
  VITE_APPWRITE_DATABASE_ID=
  VITE_APPWRITE_COLLECTION_ID=
  ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Replace the placeholder values with your actual `TheMovieDatabase API` and `Appwrite` credentials. You can obtain these credentials by signing up on the `TheMovieDatabase` and creating a new project on the `Appwrite`

Running the Project
 ```bash
npm run dev
 ```
Open `http://localhost:5173` in your browser to view the project.

## Future Enhancements
- Implementing genre-based filtering.
- Adding user authentication for personalized movie recommendations.
- Enhancing animations and UI elements for better interactivity.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Enjoy discovering movies with **MovieLand v2**! 🚀

