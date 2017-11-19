import React, { Component } from 'react';

class Category extends Component {
    render() {
        function formatDate(date) {
            date = date.split(' ');

            return date[0];
        }
        function formatMoney(money) {
            return '$'+money;
        }
        return (
            <tr className="category">
                <td>{formatDate(this.props.budget.date.date)}</td>
                <td>{this.props.budget.item}</td>
                <td>{formatMoney(this.props.budget.amount)}</td>
            </tr>
        );
    }
}

export default Category;
