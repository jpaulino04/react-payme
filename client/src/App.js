import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Header"
import LandingPage from "./components/landingpage/LandingPage";


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
