import React, { useContext, useEffect, useState } from "react";
import Auth from "../../contexts/Auth";

const Login = ({history}) => {
     const { isAuthenticated } = useContext(Auth);
     const [user, setUser] = useState({
          identifiant: ""
     })
     const handleChange = ({currentTarget}) => {
          const { name, value } = currentTarget;
          setUser({ ...user, [name]: value})
     }
     const handleSubmit = event => {
          event.preventDefault();

          console.group();
          console.log(user);
          console.groupEnd();

     }
     useEffect(()=> {
          if(isAuthenticated){
          history.replaceState('/');
          }
     }, [history, isAuthenticated]);

     return (
     <div className="form-content">
          <form className="form-group" onSubmit={handleSubmit}>
               
          <h1>Se connecter</h1>
          <label className="col-form-label mt-4" htmlfor="Identifiant">Identifiant</label>
          <input type="text" className="form-control" placeholder="Entrer votre identifiant du jeu"
           id="identifiant" name="identifiant" onChange={handleChange}></input><br></br>
          <button className="btn btn-primary">Se connecter</button>
          </form>
              

    
    
     
         

          </div>

     );
};

export default Login;