import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getHashObjFromUrl } from './process/auth';

function App() {

  // code to run below code whenever App component is rendered
  useEffect(()=> {
    const hashObj = getHashObjFromUrl();
    window.location.hash = "";    // to hide token details from user
    const token = hashObj.access_token;
    console.log('MY TOKEN', token);
  },[]);

  return (
    <div className="app">
      <Login />
    </div>
  ); 
}

export default App;