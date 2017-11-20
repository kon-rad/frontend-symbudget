import React, { Component } from 'react';
import request from 'request';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            date: this.props.budget.date,
            item: this.props.budget.item,
            amount: this.props.budget.amount,
            category: this.props.budget.category,
            id: this.props.budget.id,
            editingItem: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    handleDateChange(e) {
        this.setState({date: e.target.value});
    }
    handleItemChange(e) {
        this.setState({item: e.target.value});
    }
    handleAmountChange(e) {
        this.setState({amount: e.target.value});
    }
    handleCategoryChange(e) {
        this.setState({category: e.target.value});
    }
    handleClick() {
        if (!this.state.editing) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
            editing: !prevState.editing
        }));
    }
    handleOutsideClick(e) {
        if(this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }
    handleDelete() {
        request.delete(
            {url: `http://127.0.0.1:8000/budgets/${this.state.id}`},
            function (error, response, body) {
                console.log(body);
            }
        );
        this.setState({editing: false});
        document.removeEventListener('click', this.handleOutsideClick, false);
        this.props.reLoad();
    }
    handleSubmit() {
        console.log('submit', this.state.date);
        this.editBudgets(this.state.id);
        this.setState({editing: false});
        document.removeEventListener('click', this.handleOutsideClick, false);
        this.props.reLoad();
    }

    editBudgets(id) {

        return new Promise((resolve, reject) => {
            request.put(
                `http://127.0.0.1:8000/budgets/${id}`,
                {
                    form: {
                        date: this.state.date,
                        item: this.state.item,
                        category: this.state.category,
                        amount: this.state.amount,
                    }
                },
                function (error, response, body) {
                    console.log(body);
                }
            );
        });
    }
    renderCategory() {
        function formatDate(date) {
            if(!date) {
                return '';
            }

            return date;
        }
        function formatMoney(money) {
            if (!money) {
                return '';
            }
            return '$'+money;
        }

        if(this.state.editing) {

            return (
                <tr className="category" ref={node => { this.node = node; }}>
                    <td><input value={this.state.date} onChange={this.handleDateChange} /></td>
                    <td><input value={this.state.item} onChange={this.handleItemChange} /></td>
                    <td><input value={this.state.amount} onChange={this.handleAmountChange} /></td>
                    <td><input value={this.state.category} onChange={this.handleCategoryChange} /></td>
                    <td>
                        <button className='btn btn-sm btn-success' onClick={this.handleSubmit}>ok</button>
                        <button className='btn btn-sm btn-danger' onClick={this.handleDelete}>delete</button>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr className="category" onClick={this.handleClick}>
                    <td>{formatDate(this.props.budget.date)}</td>
                    <td>{this.props.budget.item}</td>
                    <td>{formatMoney(this.props.budget.amount)}</td>
                    <td>{formatMoney(this.props.budget.category)}</td>
                </tr>
            );
        }
    }
    render() {
        return (
            <tbody>
                {this.renderCategory()}
            </tbody>
            );
    }
}

export default Category;
