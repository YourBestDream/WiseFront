import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import Results from "./routes/Results";

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
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
