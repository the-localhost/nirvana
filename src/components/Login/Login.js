 import React from 'react';
 import './Login.css';
 
 function Login() {
     return (
         <div className="login ">
             {/* Spotify Logo */}
             <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="Logo" 
             />
             {/* Spotify Login Button*/}
             <a>Login with Spotify</a>
         </div>
     )
 }
 
 export default Login
 