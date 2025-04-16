import React from "react";

const LoginScreen = ({history}) => {
  const handleLogin = () => {
    history.push("/mens");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animacion" />
      <button className="btn btn-primary my-5" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
