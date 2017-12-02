import React, { Component } from 'react';
import '../styles/App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Welcome to SymBudget</h1>
                        <p className="lead">The simple, secure and zen money management application</p>
                        <hr className="my-4" />
                            <p className="lead">
                                <a className="btn btn-sm btn-info" href="/dashboard">Your Dashboard</a>
                            </p>
                    </div>
                </div>
                <div className="header">
                </div>
            </div>
        );
    }
}

export default Home;
