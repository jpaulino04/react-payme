import React, {Component} from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Header"
import LandingPage from "./components/landingpage/LandingPage";
import queryString from "query-string"; //to parse query strings

class App extends Component {

  // componentWillMount() {
  //     var query = queryString.parse(this.props.location.search);
  //     if (query.token) {
  //       window.localStorage.setItem("jwt", query.token);
  //       this.props.history.push("/");
  //   }
  // }

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
    </div>
    )
  }
}

export default App;