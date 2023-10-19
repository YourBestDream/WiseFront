import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "../components/GoogleButton";
import { setCookie, setCookieForMinutes } from "../functions/cookies";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallbackResponse,
      scope:
        "https://www.googleapis.com/auth/yt-analytics.readonly https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner",
    });
  }, []);

  const handleCallbackResponse = async (response) => {
    console.log(response.credential);
    try {
      const responseToken = await axios.post(
        "http://localhost:8080/api/v1/authentication/registration",
        {
          googleIdToken: response.credential,
        }
      );
      setCookie(
        "access_token",
        responseToken.data.accessToken,
        responseToken.data.expirationTime
      );
      setCookieForMinutes("refresh_token", responseToken.data.refreshToken, 30);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const loginWrapper = () => {
    setLoading(true);
    google.accounts.id.prompt();
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-primary flex items-center justify-center">
      <GoogleButton onClick={loginWrapper} isLoading={loading} />
    </div>
  );
};

export default Login;
