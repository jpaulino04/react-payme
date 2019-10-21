import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark ">
                <span className="navbar-brand mb-0">DevOps</span>
                <Link to="/login" className="text-warning ml-auto px-1">Login</Link>
                {/* <span className="text-white">|</span> */}
                <Link to="/create" className="text-warning pl-1">Create</Link>
            </nav>
        </Fragment>
    )
}
