import React, {Component, PropTypes} from 'react'
import {Input, Button} from 'react-bootstrap'
import _ from 'lodash'
import {reduxForm} from 'redux-form'

class LoginForm extends Component {
  render() {
    const {fields: {name}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          label='name'
          bsStyle={name.error ? 'error': undefined}
          help={name.error}
          {...name}
          />
        <Input type="radio" label="Radio 1" name="radio" value={1} />
        <Input type="radio" label="Radio 2" name="radio" value={2} />
        <Button
          type='submit'
          >
          submit
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['name'],
  validate(value) {
    const errors = {};
    if (value.name === '123') {
      errors.name = 'shit';
    }

    return errors;
  }
})(LoginForm);
