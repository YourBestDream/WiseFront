import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const decoded = jwt_decode(response.credential);
    console.log(decoded);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "228236225556-394g22j3dfrr0bp8gfjgrm99hvsjb5q0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-login-button"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-primary flex items-center justify-center">
      <div id="google-login-button"></div>
    </div>
  );
};

export default Login;
