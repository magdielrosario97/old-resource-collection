import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

class Navi extends React.Component {
   render() {
      return (
         <div className="nav">
            <Link to="">Home</Link>
            <Link to="cohorts">Cohorts</Link>
            <Link to="about">about</Link>
            <Link to="myprofile">My Profile</Link>
            <LogoutButton />
         </div>
      );
   }
}

export default Navi;

// Attempting to use React Bootstrap to redo the navbar to a more pleasing UI/UX
// Resource cards require a little bit more tweaking
// After all that is done, begin on see post by user and post by cohort functionality
// allow users to edit posts
