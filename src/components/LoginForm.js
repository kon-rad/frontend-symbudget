import React  from 'react';
import {Field, reduxForm} from 'redux-form';
// import FormField from './FormField';
import PropTypes from 'prop-types';

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
            />

            <Field component="input"
                   name="password"
                   id="password"
                   type="password"
                   placeholder="Password"
                   required="required"
            />

            <button className="btn btn-sm btn-primary"
                    type="submit">
                Log in
            </button>


        </form>
    );
};

LoginForm.propTypes = {
    // handleSubmit: React.PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    // pristine: React.PropTypes.bool.isRequired,
    // isSubmitting: React.PropTypes.bool.isRequired
};

// Decorate the form component
export default reduxForm({
    form: 'login'
})(LoginForm);