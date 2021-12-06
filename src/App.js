import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashObjFromUrl } from './process/auth';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateContextValue } from './components/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null); 

  // type of StateContext value === return type of useReducer()
  const [{}, dispatch] = useStateContextValue();

  // code to run below code whenever App component is rendered
  useEffect(()=> {
    const hashObj = getHashObjFromUrl();
    window.location.hash = '';    // to hide token details from user
    const access_token = hashObj.access_token;

    if(access_token){
      setToken(access_token);
      spotify.setAccessToken(access_token);

      spotify.getMe().then(user=> {
        console.log(' This is me! \n', user);
      })
    }
  },[]);

  return (
    <div className="app">
      {
        token
          ?<Player />
          :<Login />
      }
    </div>
  ); 
}

export default App;