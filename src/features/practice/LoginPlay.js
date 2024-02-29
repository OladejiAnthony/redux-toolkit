import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, setUser } from './userSlicePlay';

function LoginPlay() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const LoginToApp = () => {
        dispatch(setUser({
            user: "Tony",
            payload: "my name"
        }))
    }
    
    const Logout = () => {
        dispatch(logout())
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

export default LoginPlay;

