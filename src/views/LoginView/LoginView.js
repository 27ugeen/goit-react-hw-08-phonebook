import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import withTheme from '../../components/hoc/withTheme';
import Section from '../../components/Section';
import FormField from '../../components/Form/FormField';
import FormButton from '../../components/Form/FormButton';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  idPassword = shortid.generate();
  idEmail = shortid.generate();

  render() {
    const { email, password } = this.state;

    return (
      <>
        <Section title="Login Page">
          <form onSubmit={this.handleSubmit} className="form">
            <FormField
              label="Email"
              type="email"
              placeholder="Enter user email*"
              value={email}
              handleChange={this.handleChange}
              name="email"
              id={this.idEmail}
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter user password*"
              value={password}
              handleChange={this.handleChange}
              name="password"
              id={this.idPassword}
            />
            <FormButton type="submit" buttonLabel="Login" />
          </form>
        </Section>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(
  withTheme(LoginView),
);
