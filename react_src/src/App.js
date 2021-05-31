import React from 'react';
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/users/Login';
import Profile from './pages/users/Profile';
import Homepage from './components/Homepage';

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Switch>
        <Route exact path='/' component= {Homepage}/>
        <Route exact path='/Profile' component= {Profile}/>
        <Route exact path='/login' component= {Login}/>
        
        
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
