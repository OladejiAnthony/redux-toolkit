import React from 'react';
import {useDispatch,  useSelector } from 'react-redux';
import {setUser, logout, selectUser } from './userSlice';

function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    //the selector is React hooks.
    
    const LoginToApp = () => {
        dispatch(setUser({ user: "sonny" }));
    }

    const Logout = () => {
        dispatch(logout());
    }

    console.log(user);
  
    return (
        <div>
            <h2>I am the login component</h2>
            <button onClick={LoginToApp}>LOG ME IN</button>
            <button onClick={Logout}>LOGOUT</button>
           {/*  or you can use onClick={() => dispatch(Logout())}*/}

            {user ? <h2>The user is {user}</h2> :<h2>Nobody is signed in </h2>}
        </div>
    )
}

export default Login;

