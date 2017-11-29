import React, { Component } from 'react';
import request from 'request';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemName: '',
            newItemDate: '',
            newItemAmount: '',
            newItemCategory: '',
        };
    }

    changeNewItemName(event) {
        this.setState({newItemName: event.target.value});
    }
    changeNewItemDate(event) {
        this.setState({newItemDate: event.target.value});
    }
    changeNewItemAmount(event) {
        this.setState({newItemAmount: event.target.value});
    }
    changeNewItemCategory(event) {
        this.setState({newItemCategory: event.target.value});
    }
    createNewItem() {

        return new Promise(() => {
            request.post(
                `http://127.0.0.1:8000/budgets`,
                {
                    form: {
                        item: this.state.newItemName,
                        amount: this.state.newItemAmount,
                        category: this.state.newItemCategory,
                        date: this.state.newItemDate
                    }
                },
                () => {
                    this.props.reLoad();
                }
            );
        });
    }
    render() {
        return (
            <tr className="addItem">
                <td><input type="text" value={this.state.newItemDate}
                           onChange={this.changeNewItemDate.bind(this)} placeholder="ddmmyy"/></td>
                <td><input type="text" value={this.state.newItemName}
                           onChange={this.changeNewItemName.bind(this)}
                           placeholder="New item short description"/></td>
                <td><input type="text" value={this.state.newItemAmount}
                           onChange={this.changeNewItemAmount.bind(this)} placeholder="$"/></td>
                <td><input type="text" value={this.state.newItemCategory}
                           onChange={this.changeNewItemCategory.bind(this)} placeholder="$"/></td>
                <td/>
                <td>
                    <button className="btn btn-primary btn-small" onClick={this.createNewItem.bind(this)}>Create</button>
                </td>
            </tr>
        );
    }
}

export default AddItem;
