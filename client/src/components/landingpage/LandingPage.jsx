import React, {Fragment} from "react";
import "./LandingPage.css";

const LandinPage = () => {

  try {
      console.log("all is good - Landingpage")
  } catch (error) {
      console.log("all is bad")
  }
  //------------JS-------------------


  //-------------------------------
  return (
    <Fragment>
       <div className="container text-center">
         <h1 className="text-center text-info">DevOps Engineering</h1>
          <a href="http://localhost:5000/auth/google" className="button btn btn-large mx-auto bg-info text-dark">  
              Google Login
          </a>     
       </div>
    </Fragment>    
  );
};

export default LandinPage;
