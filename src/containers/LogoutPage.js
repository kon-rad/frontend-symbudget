import {Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../constants/ActionTypes';

class LogoutPage extends Component {

    componentWillMount() {
        this.props.dispatch({
            type: types.LOGOUT__REQUESTED
        })
    }

    render() {
        return null;
    }
}

export default connect()(LogoutPage);