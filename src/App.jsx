import React from "react";
import "./App.css";
import HomeScreen from "./screens/homescreen/HomeScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/Login";

function App() {
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
