import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/users/Login';
import Profile from './pages/users/Profile';
import About from './pages/users/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import {hasAuthenticated } from './services/AuthApi'
import Auth from './contexts/Auth';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
function App() {
  const [isAuthenticated, setIsAuthenticated]= useState (hasAuthenticated());
  return (
    <Auth.Provider value = {{isAuthenticated}}>
    <HashRouter>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        <Route exact path='/' component= {Homepage}/>
        <Route exact path='/login' component= {Login}/>
        <Route exact path='/About' component= {About}/>
        <AuthenticatedRoute  path='/Profile' component= {Profile}/>
        
        
        </Switch>
      </div>
    </HashRouter>
    </Auth.Provider>
  );
}

export default App;
