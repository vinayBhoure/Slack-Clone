import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <div className="App w-screen h-screen overflow-hidden">
      {1 ? <Login user={user} setUser={setUser} /> : <Home />}
    </div>
  );
}

export default App;
