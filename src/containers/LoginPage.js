// import React, {PropTypes, Component} from 'react';
import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import * as types from '../constants/ActionTypes';
// import '../styles/login-page.css';
import {connect} from 'react-redux';

class LoginPage extends Component {

    // componentWillReceiveProps(newProps) {
    //     if (newProps.pageState.auth.isAuthenticated) {
    //         this.props.router.replace('/');
    //     }
    // }
    //
    doLogin(formData) {
        console.log('form data: $$$$$', formData);
        console.log(' this.props: ', this.props);
        this.props.dispatch({
            type: types.LOGIN__REQUESTED,
            payload: {
                username: formData.username,
                password: formData.password
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <LoginForm
                            onSubmit={this.doLogin.bind(this)}
                            // submitting={true}
                            // isSubmitting={!!this.props.pageState.request.sendingRequest}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// LoginPage.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     pageState: PropTypes.object.isRequired,
//     router: PropTypes.object.isRequired
// };
//
// const mapStateToProps = (state) => {
//     return {
//         pageState: state
//     };
// };
//
// export default connect(
//     mapStateToProps
// )(withRouter(LoginPage))
// export default LoginPage;
export default connect()(LoginPage);
