import React, { Component } from 'react';
import '../../styles/App.css';
import Category from 'components/Category';
import AddItem from 'components/AddItem';
import request from 'request';


const fetchBudgets = () => {
    return new Promise((resolve, reject) => {
        request(`http://127.0.0.1:8000/budgets`, function (error, response, body) {
            resolve(JSON.parse(body));
        });
    });
}
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budgets: []
        }
        this.loadBudgets = this.loadBudgets.bind(this);
    }
    componentWillMount() {
        this.loadBudgets();
    }
    loadBudgets() {
        fetchBudgets()
            .then(budget => {
                this.setState({ ... budget })
            });
    }
    render() {
        console.log(this.state);
        const budgetItems = this.state.budgets.map(budget => {
            return <Category key={budget.id} budget={budget} reLoad={() => this.loadBudgets()} />
        });
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Hello this is dashboards</h1>
                            <div className="table-responsive">
                                <table className="table table-condensed">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Item</th>
                                        <th>Amount</th>
                                        <th>Category</th>
                                    </tr>
                                    </thead>
                                    { budgetItems }
                                    <tbody>
                                        <AddItem reLoad={this.loadBudgets}/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;