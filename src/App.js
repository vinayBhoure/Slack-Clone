import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <div className="App w-screen h-screen overflow-hidden">
      {!loggedIn ? (
        <Home />
      ) : (
        <Routes>
          <Route path="/login" element={<Login logIn={loggedIn} setLogIn={setLoggedIn} />} />
          <Route path="/" element={<Signup logIn={loggedIn} setLogIn={setLoggedIn} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
