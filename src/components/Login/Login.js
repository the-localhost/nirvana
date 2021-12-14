 import React from 'react';
 import './Login.css';
 import { loginUrl } from '../../process/auth';
 
//  before the user has logged in
 function Login() {
     return (
         <div className="login ">
             {/* Nirvana Logo */}
             <img 
                src="https://i.imgur.com/21vBfhg.jpeg" 
                alt="Logo" 
             />
             {/* Spotify Login Button*/}
             <a href={loginUrl}>Login with Spotify</a>
         </div>
     )
 }
 
 export default Login
 