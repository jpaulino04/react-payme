import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';

class Header extends Component{  

    renderContent(){
        switch(this.props.auth){
            case null:
                return ""
            case false: 
                return ""
            default:
                return (
                    <li className="header-li">
                        <a href="http://localhost:5000/logout" className="text-warning ml-auto px-1">Logout</a>
                    </li>
                )
        }
    }

    render(){
            return (
                <Fragment>
                    <nav className="navbar navbar-dark bg-dark ">
                        <span className="navbar-brand mb-0">DevOps</span>
                        <ul>
                            {this.renderContent()}
                        </ul>
                        {/* <span className="text-white">|</span>
                        <Link to="/create" className="text-warning pl-1">Create</Link>                 */}
                    </nav>
                </Fragment>
            )
        }    
    }

//Note you can also destructure the state {auth}
function mapStateToProps(state){
    return {auth: state.auth} 
    //returns an object that gets passed to the Header as props
    // In this case we only care abouth auth: look at your store index.js
}

export default connect(mapStateToProps)(Header);

{/*
To link this component to redux we:
- used the connect helper react-redux function
- defined the mapStateToFunction
- Finally, map all the pieces of state relevant
*/}