import React from 'react';
import {Field, Fields, reduxForm} from 'redux-form';
import {Button} from 'reactstrap';
import FormField from './FormField';
import FormPasswordRepeatedFields from './FormPasswordRepeatedFields';
import PropTypes from 'prop-types';

const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form-registration-form">

            <Field component={FormField}
                   name="username"
                   type="text"
                   label="Username"
                   placeholder="Username"
                   required="required"
                   className="form-control"
            />

            <Field component={FormField}
                   name="email"
                   type="email"
                   label="Email Address"
                   placeholder="Email Address"
                   required="required"
                   className="form-control"
            />

            <Fields names={[ 'newPassword', 'newPasswordRepeated' ]} component={FormPasswordRepeatedFields}/>

            <Button type="submit"
                    size="lg"
                    block
                    color="success"
            >
                {props.isSubmitting ?
                    <span>
            <i className="fa fa-spin fa-spinner"/> Registering...
          </span>
                    :
                    <span>Register</span>
                }
            </Button>
        </form>
    );

};

RegistrationForm.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'registration-form'
})(RegistrationForm);