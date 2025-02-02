# Playify <img src="https://playifyapp.netlify.app/assets/playify_logo-D8VAvbfV.png" alt="Playify Logo" width="20" />

Playify is a sleek and intuitive web application that allows users to search for songs, create playlists, and save them to their Spotify account. Built with **React (Vite)** and integrated with the **Spotify API**, Playify offers a seamless music discovery and playlist management experience.

🚀 **[Live Demo](https://playifyapp.netlify.app/)**\

---

## ✨ Features

- 🔑 **User Authentication** – Secure login using Spotify credentials.
- 🔍 **Search Tracks** – Find songs instantly using the Spotify API.
- 📂 **Create Playlists** – Curate your favorite songs into custom playlists.
- 💾 **Save Playlists** – Save your created playlists directly to your Spotify account.
- ▶️ **Listen to Playlists** – Play your saved playlists within the app.

---

## 🛠️ Technologies Used

- **Front-End:** React (Vite), CSS Modules, Vanilla CSS
- **Authentication:** Spotify OAuth 2.0
- **API Integration:** Spotify Web API
- **Deployment:** Netlify

---

## 📖 Usage

1. Open the app in your browser.
2. Click the **Login** button to authenticate with your Spotify account.
3. Use the **search bar** to find your favorite tracks.
4. Click the **+** icon to add songs to your playlist.
5. Click **Save Playlist** to store it in your Spotify account.
6. Head to the **Player** tab to listen to your saved playlists.

---

## 📂 Project Structure

### Important Files & Directories

📦 Playify
├── 📂 src
│   ├── 📂 api                    # Spotify API integration
│   │   ├── 📜 savePlaylist.js    # Saves user playlists to Spotify
│   │   ├── 📜 searchTracks.js    # Fetches tracks from the Spotify API
│   │   ├── 📜 userLogin.js       # Handles Spotify authentication with OAuth 2.0 + PKCE
│   ├── 📂 assets                 # Static assets like images and logos
│   ├── 📂 features               # Feature-based components structured in containers and UI elements
│   │   ├── 📂 NavBar             # Navigation bar component
│   │   ├── 📂 Playlist           # Playlist creation and management
│   │   ├── 📂 PlaylistEmbed      # Embedded playlist player
│   │   ├── 📂 SearchBar          # Search input for finding tracks
│   │   ├── 📂 SearchResults      # Search results component
│   ├── 📂 shared                 # Reusable UI components
│   ├── 📂 utils                  # Utility/helper functions
│   │   ├── 📜 msToMinSec.js      # Converts milliseconds to minutes and seconds
│   │   ├── 📜 notifications.js   # Manages app notifications
│   ├── 📜 App.jsx                # Main application component
│   ├── 📜 index.css              # Global styles
│   ├── 📜 main.jsx               # Entry point of the application
│   └── ...
└── 📜 README.md        # Project documentation

---

## 🌟 Why Playify?

- **Real-World API Integration** – Showcases hands-on experience with a major third-party API.
- **Authentication Handling** – Implements OAuth 2.0 with Authorization Code Flow and PKCE securely.
- **State Management** – Utilizes React hooks for efficient state handling.
- **Modern Web Technologies** – Built with Vite for fast development and performance.
- **Responsive Design** – Styled with CSS Modules for modular and maintainable styles.

---

## 🚀 Future Enhancements

- 🎚️ Implement volume control and additional playback features.
- 📌 Allow users to edit and reorder playlist tracks.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License** – feel free to modify and use it!

---

Thank you for checking out Playify! 🎶 Happy streaming!
