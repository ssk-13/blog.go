import React from 'react'
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {
    let navigate =useNavigate();


    const signINWithGoogle = ( )=> {
        signInWithPopup(auth,provider).then((result) => {
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");
        });
    };
  return (
    <div className='loginPage'>
        <p>Sign In with Google to Continued</p>
        <button className='login-with-google-btn' onClick={signINWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login