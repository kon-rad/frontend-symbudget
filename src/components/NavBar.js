import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    loginOrProfile(auth) {

        return auth.isAuthenticated ?
            <Nav className="ml-auto" navbar>
                <NavItem className="navbar-text">
                    Welcome back {auth.username}!
                </NavItem>
                <NavItem>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/logout">Logout</NavLink>
                </NavItem>
            </Nav>

            :

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Log in</NavLink>
                </NavItem>
            </Nav>
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand='md'>
                    <NavbarBrand href="/">SymBudget App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.loginOrProfile(this.props.auth)}
                    </Collapse>
                </Navbar>
            </div>
        );

    }
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired
};

export default NavBar;