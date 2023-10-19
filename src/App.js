import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Results from "./routes/Results";
import GoogleAPIComponent from "./routes/GoogleAPIComponent";
import Statistics from "./routes/Statistics/Statistics";

function App() {
  return (
    <>
      <ThemeProvider>
        <TopBar />
        <div className="flex">
          <SideBar />
          <div className="w-full">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/results" element={<Results />} />
              <Route path="/loginTry" element={<GoogleAPIComponent />} />
              <Route path="/results/:videoId" element={<Statistics />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
