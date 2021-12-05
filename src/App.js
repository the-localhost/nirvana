import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getHashObjFromUrl } from './process/auth';

function App() {
  const [token, setToken] = useState(null); 

  // code to run below code whenever App component is rendered
  useEffect(()=> {
    const hashObj = getHashObjFromUrl();
    window.location.hash = "";    // to hide token details from user
    const access_token = hashObj.access_token;
    if(access_token){
      setToken(access_token);
    }
  },[]);

  return (
    <div className="app">
      <Login />
    </div>
  ); 
}

export default App;