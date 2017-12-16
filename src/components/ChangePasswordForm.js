import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import FormField from './FormField';

const ChangePasswordForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit} className="form-change-password">

            <Field component={FormField}
                   name="currentPassword"
                   type="password"
                   placeholder="Current Password"
                   required="required"
                   className="form-control"
            />

            <Field component={FormField}
                   name="newPassword"
                   type="password"
                   placeholder="New Password"
                   required="required"
                   className="form-control"
            />

            <Field component={FormField}
                   name="newPasswordRepeated"
                   type="password"
                   placeholder="New Password Repeated"
                   required="required"
                   className="form-control"
            />

            <Button type="submit"
                    size="lg"
                    block
                    color="success"
            >
                {props.isSubmitting ?
                    <span>Updating password...</span>
                    :
                    <span>Change Password</span>
                }
            </Button>
        </form>
    );

};

ChangePasswordForm.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'change-password'
})(ChangePasswordForm);