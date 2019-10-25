import React, {Fragment} from 'react'
import axios from 'axios';
// import {Link} from 'react-router-dom';

export default function Header() {
    
    // (async ()=>{
    //     const url = 'http://localhost:5000/auth/current_user'
    //     const res = await axios.get(url);
    //     console.log(res)
    // })()
    
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark ">
                <span className="navbar-brand mb-0">DevOps</span>
                <a href="http://localhost:5000/logout" className="text-warning ml-auto px-1">Login</a>
                {/* <span className="text-white">|</span>
                <Link to="/create" className="text-warning pl-1">Create</Link>                 */}
            </nav>
        </Fragment>
    )
}
