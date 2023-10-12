import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Login = () => {
  const [jwt, setJwt] = React.useState("");
  async function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    setJwt(response.credential);
    const decoded = jwt_decode(response.credential);
    console.log(decoded);
  }

  const handleButton = async () => {
    await fetchUserVideos(jwt);
  };

  const fetchUserVideos = async (accessToken) => {
    try {
      // const response = await axios.get(
      //   "https://youtube.googleapis.com/youtube/v3/search",
      //   {
      //     params: {
      //       part: "snippet",
      //       maxResults: 10,
      //       q: "surfing",
      //       key: "AIzaSyDjtZpgXGp4ceitDq56FG91RVxkeqMTvMw"
      //     },
      //     // headers: {
      //     //   Authorization: `Bearer ${accessToken}`,
      //     // },
      //   }
      // );

      // // Handle the response data here
      // console.log(response.data);

      const response = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet%2CcontentDetails%2Cstatistics",
            myRating: "like",
            key: "AIzaSyDjtZpgXGp4ceitDq56FG91RVxkeqMTvMw",
          },
          headers: {
            Authorization: `Bearer ya29.a0AfB_byD61DmHtyd3gjK691-1O_QieWD93OQ0W48NaPy…DQaCgYKASoSARISFQGOcNnCh43MwbKdcS1uPFRT7OkXDA0169`,
          },
        }
      );

      // Handle the response data here
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching user videos:", error);
    }
  };

  useEffect(() => {
      /*global google*/
    google.accounts.id.initialize({
      client_id:
        "228236225556-394g22j3dfrr0bp8gfjgrm99hvsjb5q0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
      scope: "https://www.googleapis.com/auth/yt-analytics.readonly",
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
      <button onClick={() => handleButton()}>Handle</button>
    </div>
  );
};

export default Login;