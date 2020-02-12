import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import Logo from '../images/findart.png';
import { signupUser } from '../../redux/actions/authAction';

import '../css/Form.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      country: '',
      password: '',
      repeatPassword: ''
    };
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, firstName, lastName, phone, country, password } = this.state;

    const newUser = {
      email,
      firstName,
      lastName,
      phone,
      country,
      password
    };

    // the logic of what the user input does
    this.props.signupUser(newUser, this.props.history);

    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      country: '',
      password: '',
      repeatPassword: ''
    });
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      phone,
      country,
      password,
      repeatPassword
    } = this.state;
    return (
      <div className="form-container">
        <div className="form-container-items">
          <div className="form-container-items-content">
            <div className="form-box">
              <img className="art-logo" src={Logo} alt="logo" />

              <div>
                {this.props.signupInfo.errors_signup ? (
                  <h1 style={{ color: 'red' }}>
                    {this.props.signupInfo.errors_signup}
                  </h1>
                ) : null}
              </div>

              <ValidatorForm onSubmit={this.handleSubmit}>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />

                <TextField
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  label="First name"
                  value={firstName}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />

                <TextField
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  label="Last name"
                  value={lastName}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />

                <TextField
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone"
                  value={phone}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />

                <TextField
                  id="country"
                  name="country"
                  type="country"
                  label="Country"
                  value={country}
                  onChange={this.handleChange}
                  fullWidth
                  required={true}
                />

                <TextValidator
                  label="Password"
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  validators={['required']}
                  errorMessages={['this field is required']}
                  value={password}
                  fullWidth
                />
                <TextValidator
                  label="Confirm password"
                  onChange={this.handleChange}
                  name="repeatPassword"
                  type="password"
                  validators={['isPasswordMatch', 'required']}
                  errorMessages={[
                    'password mismatch',
                    'this field is required'
                  ]}
                  value={repeatPassword}
                  fullWidth
                  style={{ marginBottom: '1rem' }}
                />

                <button className="btn-default">
                  Sign Up
                  {this.props.signupInfo.ui_loading && (
                    <CircularProgress
                      className="btn-default-progress"
                      disableShrink
                      size="1.3rem"
                      thickness="10"
                    />
                  )}
                </button>
              </ValidatorForm>

              <div>
                Already have an account{' '}
                <Link to="/">
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  signupInfo: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
  signupInfo: state.auth
});

export default connect(mapStateToprops, { signupUser })(Signup);
