import React from 'react';
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/users/Login';
import Profile from './pages/users/Profile';
import About from './pages/users/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        <Route exact path='/' component= {Homepage}/>
        <Route exact path='/Profile' component= {Profile}/>
        <Route exact path='/login' component= {Login}/>
        <Route exact path='/About' component= {About}/>
        
        
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
