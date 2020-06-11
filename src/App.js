import React from 'react'
import Login from './pages/login/Login'
import AUForm from './pages/form/AddUpdate'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import {loggedout} from './action'


function App() {

  const signIn = useSelector(state => state);
  const dispatch = useDispatch();
 
  return (
    <div>
      <h1>APMI PRODUCT CENTRAL</h1>

      <button onClick={()=> dispatch(loggedout())}>Logged Out</button>
      
      <hr />
  {signIn ? <AUForm />: <Login />}
    </div>
  )
}

export default App

