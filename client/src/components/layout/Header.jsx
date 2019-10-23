import React, {Fragment} from 'react'
// import {Link} from 'react-router-dom';

export default function Header() {

    // constructor(){
    //     super();
    //     this.state = {token: ""}
    // }

    // componentDidMount(){
    //     //get token
    //     fetch('/welcome')
    // }

    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark ">
                <span className="navbar-brand mb-0">DevOps</span>
                <a href="http://localhost:5000/logout" className="text-warning ml-auto px-1">Logout</a>
                {/* <span className="text-white">|</span>
                <Link to="/create" className="text-warning pl-1">Create</Link>                 */}
            </nav>
        </Fragment>
    )
}
