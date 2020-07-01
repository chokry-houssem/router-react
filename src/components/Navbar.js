import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar=(props)=>{
    console.log(props)
    return(
        <React.Fragment>
                 <Navbar bg="primary" variant="dark">
                    <Nav className="mr-auto">
                    <Link to="/">
                        <Button className=" fadeIn">Home</Button>
                    </Link>
                    <Link to="/category">
                        <Button>Category</Button>
                    </Link>
                    <Link to="/products">
                        <Button>Products</Button>
                    </Link>
                    <Link to="/login">
                        <Button>Admin Area</Button>
                    </Link>
                    </Nav>
                 </Navbar>
        </React.Fragment>
    )
}

export default NavBar