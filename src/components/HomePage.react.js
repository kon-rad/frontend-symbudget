import React, { Component } from 'react';
import '../styles/App.css';

class Home extends Component {
    render() {
        return (
            <div className="header">
                <div className="home jumbotron">
                    <h1>Welcome to SymBudget</h1>
                    <p>The simple, secure and zen money management application</p>
                    <a className="btn btn-sm btn-info" href="/dashboard">Your Dashboard</a>
                </div>
            </div>
        );
    }
}

export default Home;
