import React, {Component} from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Header"
import LandingPage from "./components/landingpage/LandingPage";
import Welcome from "./components/Welcome";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/main" location={this.props.location} component={Welcome} />
           </Switch>
        </Router>
    </div>
    )
  }
}

export default App;