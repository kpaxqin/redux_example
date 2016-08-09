import React, {Component, PropTypes} from 'react'
import {FormControl as Input, FormGroup, Button} from 'react-bootstrap'
import {reduxForm} from 'redux-form'

class LoginForm extends Component {
  render() {
    const {fields: {name}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <FormGroup validationState={name.error? 'error': undefined}>
          <Input
            type='text'
            label='name'
            value={name.value || ''}
            onChange={name.onChange}
          />
        </FormGroup>
        <Button
          type='submit'
          >
          submit
        </Button>
      </form>
    );
  }
}

const ReduxLoginForm = reduxForm({
  form: 'login',
  fields: ['name'],
  validate(value) {
    const errors = {};
    if (value.name === '1234') {
      errors.name = 'shit';
    }

    return errors;
  }
})(LoginForm);

export default ReduxLoginForm
