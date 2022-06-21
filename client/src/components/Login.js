import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
   const { loginWithRedirect } = useAuth0();

   return (
      <div className="loginContainer">
         <h1>Welcome to The Resource Collection!</h1>
         <div>A resource pool built by students of Operation Level Up</div>
         <button onClick={() => loginWithRedirect()}>Login/Register</button>
      </div>
   );
};

export default Login;
