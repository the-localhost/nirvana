import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashObjFromUrl } from './process/auth';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateContextValue } from './components/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  // type of StateContext value === return type of useReducer()
  const [{ token }, dispatch] = useStateContextValue();

  // code to run below code whenever App component is rendered
  useEffect(()=> {
    const hashObj = getHashObjFromUrl();
    window.location.hash = '';    // to hide token details from user
    const access_token = hashObj.access_token;

    if(access_token){
      dispatch({
        type: 'SET_TOKEN',
        token: access_token
      })
      spotify.setAccessToken(access_token);

      spotify.getMe().then(user=> {
        dispatch({
          type: 'SET_USER',
          user
        });
      })
    }
  },[dispatch]);

  return (
    <div className="app">
      {
        token
          ?<Player spotify={spotify} />
          :<Login />
      }
    </div>
  ); 
}

export default App;