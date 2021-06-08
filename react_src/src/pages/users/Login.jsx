import React, { useContext, useEffect, useState } from "react";
import Auth from "../../contexts/Auth";
import { login } from "../../services/AuthApi";

const Login = ({history}) => {
     const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
     const [user, setUser] = useState({
          identifiant: ""
     })
     const handleChange = ({currentTarget}) => {
          const { name, value } = currentTarget;
          setUser({ ...user, [name]: value})
          console.log(value, name);
     }
     const handleSubmit = async event => {
          event.preventDefault();

         try{
              const response = await login(user);

              setIsAuthenticated(response);
             
              history.replaceState('/profile');
         }catch({ response }) {
              console.log(response);
         }

     }
     useEffect(()=> {
          if(isAuthenticated){
          history.replaceState('/profile');
          }
     }, [history, isAuthenticated]);

     return (
     <div className="form-content">
          <form className="form-group" onSubmit={handleSubmit}>
               
          <h1>Se connecter</h1>

          <label className="col-form-label mt-4">Identifiant</label>
          <input type="text" className="form-control" placeholder="Entrer votre identifiant du jeu"
           id="identifiant" name="identifiant" onChange={handleChange}></input><br></br>
          <button className="btn btn-primary" type='submit'>Se connecter</button>
          </form>
              

    
    
     
         

          </div>

     );
};

export default Login;