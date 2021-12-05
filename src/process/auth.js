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
    "user-modify-playback-state" 
];

// generating response object from URL hash
const getHashObjFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
};

// login URL - the URL that we access on or end
const loginUrl = `${authEndPoint}?
                            client_id=${clientID}&
                            redirect_uri=${redirectUri}&
                            scope=${scopes.join("%20")}&
                            response_type=token&
                            show_dialog=true`;

export {getHashObjFromUrl, loginUrl};