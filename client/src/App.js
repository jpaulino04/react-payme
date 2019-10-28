import React, {Component} from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Header"
import LandingPage from "./components/landingpage/LandingPage";
import Welcome from "./components/Welcome";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; //connect react/redux
import * as actions from './actions';

//Browser router is the brain
//Route to setup rules
class App extends Component {
  //with class components, you get lifecycle methods
  
  //preferred instead of Willmount
  componentDidMount(){
    //action creators are now as props
    this.props.fetchUser()
  }

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

//Use the connect react helper to connect with redux
//first argument for connect is for mapStateToprops (not use here)
//Second argument, pass the action creators
export default connect(null, actions)(App);