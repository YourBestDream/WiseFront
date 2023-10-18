import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "../components/GoogleButton";

const Login = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    /*global google*/
    google.accounts.id.renderButton(
      document.getElementById("google-login-button"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // const decoded = jwt_decode(tokenResponse.access_token);
      // console.log(decoded);
      console.log(tokenResponse)
      // const response = await axios.post("http://localhost:8080/api/v1/authentication/registration", {"googleIdToken" : tokenResponse.access_token});
      // console.log(response.data)
      setLoading(false);
    },
    onError: (error) => {
      alert(error)
      setLoading(false);
    },
    scope:
      "https://www.googleapis.com/auth/yt-analytics.readonly https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner",
  });

  const loginWrapper = () => {
    setLoading(true);
    login();
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-primary flex items-center justify-center">
      <GoogleButton onClick={loginWrapper} isLoading={loading} />
    </div>
  );
};

export default Login;
