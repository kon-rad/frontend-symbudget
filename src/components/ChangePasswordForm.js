import React from 'react';
import {Field, Fields, reduxForm} from 'redux-form';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import FormField from './FormField';
import FormPasswordRepeatedFields from './FormPasswordRepeatedFields';

const ChangePasswordForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit} className="form-change-password">

            <Field component={FormField}
                   name="currentPassword"
                   type="password"
                   label="Current Password"
                   placeholder="Current Password"
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
                    <span>Updating password...</span>
                    :
                    <span>Change Password</span>
                }
            </Button>
        </form>
    );

};

ChangePasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'change-password'
})(ChangePasswordForm);