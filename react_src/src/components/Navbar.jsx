import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../contexts/Auth';
import { logout } from '../services/AuthApi';

const Navbar = () =>{
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const handleLogout = () =>{
        logout();
        setIsAuthenticated(false);

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
    <a className="navbar-brand" href="#">Jeu de Rôle</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/"> 
           Accueil
          </NavLink>
        </li> 
        <li className="nav-item active">
          <NavLink className="nav-link" to="/about"> 
           A propos
          </NavLink>
        </li> 
      </ul>
      {(!isAuthenticated && (
      <ul className="navbar-nav ml-auto">
         
              
           
        <li className="nav-item active ">
          <NavLink className="nav-link"  to="/login"> 
           Me connecter
          </NavLink>
        </li> 
        
      </ul>
      ))  || (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active ">
        <NavLink className="nav-link"  to="/profile">  
           Profil
          </NavLink>
        </li> 
        <li className="nav-item active ">
          <button className="btn btn-danger"onClick={handleLogout} > 
           Deconnexion
          </button>
        </li> 
        
      </ul>
    
      )}
    </div>
  </div>
</nav>

    );
};

export default Navbar;