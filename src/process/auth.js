// login auth endpoint
const authEndPoint = "https://accounts.spotify.com/authorize";

// redirected to default reactjs homepage
const redirectUri = "http://localhost:3000/";

// from app on Spotify developer
const clientID = "3d949f5c5a5147768014d0c74a73138c";

// scopes (features) we need (we can add more)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "app-remote-control"
];
