import React, {Fragment} from "react";
// import CoffeeVid from "./public/assets/video/Coffee_Beans_Fast_Fall.mp4";
// import CoffeeVid from "../../assets/video/Coffee_Beans_Fast_Fall.mp4";
import "./LandingPage.css";
// import { Link } from "react-router-dom";
// import Roll from "react-reveal/Roll";

const LandinPage = () => {
  return (
    <Fragment>
       <div className="container text-center">
         <h1 className="text-center text-info">DevOps Engineering</h1>
         <a href="http://localhost:5000/auth/google" className="button btn btn-large mx-auto bg-info text-dark">
          <div>
            <span class="button-label">Google Login</span>
          </div>
        </a>
       </div>
    </Fragment>    
  );
};

export default LandinPage;
