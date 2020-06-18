import React from 'react'
import Login from './pages/login'
import AUForm from './pages/form/AddUpdate'
import ViewList from './pages/present/Viewmode'
import {useSelector, useDispatch} from 'react-redux'
import {loggedout,loggedin} from './action'
import './css/main.scss'


function App() {

  const signIn = useSelector(state => state.Loggedin);
  const dispatch = useDispatch();
 
  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">Apmi jewels</div>
<div className = "logout">{signIn ? <span onClick={()=> dispatch(loggedout())}>Logout</span> : 'login'}</div>
      </div>
      <div className="page_view_container">
      <div className="live_view">
          <ViewList />
      </div>
      <div className="cms_view">
      <AUForm />
      </div>
      </div>
    </div>
  )
}

export default App

