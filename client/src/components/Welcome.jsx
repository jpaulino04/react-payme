import React, { Component } from 'react'
// import queryString from "query-string"; //to parse query strings
class Welcome extends Component {
    
    componentDidMount(){
        //this is just an example of querying data
        //This should be done in your action creators/reducers
        // try {
        //     var query = queryString.parse(this.props.location.search);
        //     if (query.token) {
        //         window.localStorage.setItem("jwt", query.token);
        //         this.props.history.push("/main");
        //     }            
        // } catch (error) {
        //     console.log(error);
        // }
    }
  
    render() {        
        return (
            <div className="container text-center">
                <h1 className="mx-auto text-dark">Welcome, you are In!</h1>                
                <a href="#" className="btn btn-large bg-dark text-warning">Welcome</a> 
            </div>
        )
    }
}

export default Welcome;
