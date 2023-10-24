import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Results from "./routes/Results";
import Statistics from "./routes/Statistics/Statistics";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <ThemeProvider>
        <TopBar />
        <div className="flex">
          <SideBar />
          <div className="w-full">
            <Routes>
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/results"
                element={
                  <PrivateRoute>
                    <Results />
                  </PrivateRoute>
                }
              />
              <Route
                path="/results/:videoId"
                element={
                  <PrivateRoute>
                    <Statistics />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={<PrivateRoute forLoggin={true} />}></Route>
              <Route
                path="/*"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
