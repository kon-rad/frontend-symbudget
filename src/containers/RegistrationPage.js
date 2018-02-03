import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import * as types from '../constants/actionTypes';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class RegistrationPage extends React.Component {

    handleRegistration({username, email, newPassword, newPasswordRepeated}) {
        this.props.dispatch({
            type: types.REGISTER__REQUESTED,
            payload: {
                username,
                email,
                newPassword,
                newPasswordRepeated
            }
        });
    }

    render() {
        {console.log(this.props)};
        if (this.props.pageState.auth.isAuthenticated) {
            return (<Redirect to={"/"} />);
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 offset-sm-4">
                            <RegistrationForm
                                onSubmit={this.handleRegistration.bind(this)}
                                isSubmitting={this.props.pageState.request.isSubmitting}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }

}

RegistrationPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    pageState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        pageState: state
    };
}

    export default connect(
    mapStateToProps
)(
    withRouter(RegistrationPage)
);