import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1 className="mx-auto text-dark">Welcome, you are In!</h1>
                <a href="http://localhost:5000/welcome" className="btn btn-large bg-dark text-warning">Welcome</a>
            </div>
        )
    }
}

export default Welcome;
