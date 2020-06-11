import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loggedin} from '../../action'
function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            Login page
            <input placeholder="Username"  type="text"/>
            <input placeholder="Password" type="password"  />
            <button onClick={()=> dispatch(loggedin())}>Submit</button>
            
        </div>
    )
}

export default Login
