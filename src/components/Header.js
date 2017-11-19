import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className=""><a href="/">Home</a></li>
                        <li className=""><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
