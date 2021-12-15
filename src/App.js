import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SignUp from "./Component/SinUp";
import LogIn from "./Component/LogIn";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
     <Route exact path="/signup" component={SignUp} />
      <Route
        exact
        path="/"
        render={() => {
          return <NavBar setToken={setToken}/>;
        }}
      />

<Route exact path="/LogIn" component={LogIn} />
      <Route
        exact
        path="/"
        render={() => {
          return <NavBar setToken={setToken}/>;
        }}
      />
      <Route
        exact
        path="/home"
        render={() => {
          return <Home setToken={setToken} token={token} />;
        }}
      />
    </div>
  );
}

export default App;
