import React  from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import '../styles/login-form.css';
import * as FORMS from '../constants/Forms';

const LoginForm = (props) => {

    const {handleSubmit} = props;

    return (
        <form className="form-signin" onSubmit={handleSubmit(props.onSubmit)}>

            <h2 className="form-signin-heading">Welcome back</h2>

            <Field component="input"
                   name="username"
                   id="username"
                   type="text"
                   placeholder="Username or Email Address"
                   required="required"
                   className="form-control"
            />

            <Field component="input"
                   name="password"
                   id="password"
                   type="password"
                   placeholder="Password"
                   required="required"
                   className="form-control"
            />

            <Button type="submit"
                    size="lg"
                    block
                    color="success"
                    >
                {props.isSubmitting ?
                    <span>
                        <i className="fa fa-spin fa-spinner"/> Logging In...
                    </span>

                                :

                    <span>Login</span>
                }
            </Button>
            {console.log('props:', props, props.isSubmitting)}


        </form>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    // pristine: React.PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool.isRequired
};

// Decorate the form component
export default reduxForm({
    form: FORMS.FORM_LOGIN
})(LoginForm);