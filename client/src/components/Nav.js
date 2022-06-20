import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";

class Nav extends React.Component {
   render() {
      return (
         <Navbar expand="xl">
            <Container fluid>
               <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-xl"} />
               <Navbar.Offcanvas
                  aria-labelledby={"offcanvasNavbarLabel-expand-xl"}
                  placemenet="end"
               >
                  <Offcanvas.Header>
                     <Offcanvas.Title id={"offcanvasNavbarLabel-expand-xl"}>
                        Menu
                     </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Link to="">Home</Link>
                  <Link to="cohorts">Cohorts</Link>
                  <Link to="myprofile">My Profile</Link>
                  <input placeholder="Search..."></input>
               </Navbar.Offcanvas>
            </Container>
         </Navbar>
      );
   }
}

export default Nav;

// Attempting to use React Bootstrap to redo the navbar to a more pleasing UI/UX
// Resource cards require a little bit more tweaking
// After all that is done, begin on see post by user and post by cohort functionality
// allow users to edit posts
