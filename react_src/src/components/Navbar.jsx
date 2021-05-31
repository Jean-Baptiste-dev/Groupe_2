import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
    <span className="navbar-brand" href="#">Jeu de Rôle</span>
    

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/"> 
           Acceuil
          </NavLink>
        </li> 
        <li className="nav-item active">
          <NavLink className="nav-link" to="/about"> 
           A propos
          </NavLink>
        </li> 
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active ">
          <NavLink className="nav-link"  to="/login"> 
           Connexion
          </NavLink>
        </li> 
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active ">
          <button className="btn btn-danger"  to="/Deconnexion"> 
           Deconnexion
          </button>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>

    );
};

export default Navbar;