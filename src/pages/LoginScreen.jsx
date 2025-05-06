import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";
import { useHistory } from "react-router";

const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext)

  const history = useHistory()

  const handleLogin = () => {

    dispatch({type: authTypes.login})

    history.push("/mens");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/principal.png" style={{ width: '100%',maxWidth: '800px', display: 'block', height: 'auto', margin: '0 auto',objectFit: 'cover' }}  alt="principal"/>
      <button className="btn btn-primary my-5" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
