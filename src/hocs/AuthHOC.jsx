import React, { useEffect } from "react";
import {
  getCookie,
  setCookie,
  setCookieForMinutes,
  deleteCookie,
} from "../functions/cookies";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthHOC = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    async function handleAuth() {
      const accessToken = getCookie("access_token");
      const refreshToken = getCookie("refresh_token");
      console.log(accessToken, refreshToken);
      if (!refreshToken) {
        navigate("/login");
      } else {
        if (!accessToken) {
          try {
            const response = await axios.post(
              "http://localhost:8080/api/v1/authentication/refresh",
              {
                refreshToken: refreshToken,
              }
            );
            const { accessToken, expirationTime } = response.data;
            setCookie("access_token", accessToken, expirationTime);
            setCookieForMinutes(
              "refresh_token",
              response.data.refreshToken,
              30
            );
          } catch (error) {
            deleteCookie("access_token");
            deleteCookie("refresh_token");
            navigate("/login");
          }
        }
      }
    }

    handleAuth();
  }, []);
  return <>{children}</>;
};

export default AuthHOC;
