import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useContext';
import logo2 from '../../hot-onion-restaurent-master/logo2.png'
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar fixed bg="light" variant="light">
            <Container>
                <NavLink to='/home'> <Navbar.Brand href="/home">
                    <img
                        src={logo2}
                        width="170"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand></NavLink>
                <Nav className="ms-auto">
                    <NavLink to='/cart'><Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i></Nav.Link></NavLink>
                    <NavLink to='/home'><Nav.Link href="/home">Home</Nav.Link></NavLink>
                    <NavLink to='/signUp'><Nav.Link href="/signUp">SignUp</Nav.Link></NavLink>
                    {!user.email ?
                        <NavLink to='/login'><Nav.Link href="/login">Login</Nav.Link></NavLink>
                        :
                        <Nav.Link onClick={logOut}>LogOut</Nav.Link>
                        // <button onClick={logOut}>LogOut</button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;