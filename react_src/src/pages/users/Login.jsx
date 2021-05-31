import React from "react";

const Login = (props) => {

     return (
     <div className="form-content">
          <form className="form-group" method="post" action="">
               
          <h1>Se connecter</h1>
          <label className="col-form-label mt-4" htmlfor="Identifiant">Identifiant</label>
          <input type="text" className="form-control" placeholder="Entrer votre identifiant du jeu" id="inputDefault"></input><br></br>
          <button className="btn btn-primary">Se connecter</button>
          </form>
              

    
    
     
         

          </div>

     );
};

export default Login;