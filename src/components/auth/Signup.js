import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
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
          <img className="art-logo" src={Logo} alt="logo" />
          <h2 style={{ color: 'rgb(14,75,127)' }}>
            Create and an account or login if you already have an account
          </h2>
          <h3 style={{ marginTop: '2rem', color: 'rgb(85, 7, 10)' }}>
            Bid for artworks and view profile or better still you can change
            your profile and many more
          </h3>{' '}
        </div>
        <div className="form-container-items">
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
              label="email"
              value={email}
              onChange={this.handleChange}
              fullWidth
              required
            />

            <TextField
              id="firstName"
              name="firstName"
              type="firstName"
              label="firstName"
              value={firstName}
              onChange={this.handleChange}
              fullWidth
              required
            />

            <TextField
              id="lastName"
              name="lastName"
              type="lastName"
              label="lastName"
              value={lastName}
              onChange={this.handleChange}
              fullWidth
              required
            />

            <TextField
              id="phone"
              name="phone"
              type="tel"
              label="phone"
              value={phone}
              onChange={this.handleChange}
              fullWidth
              required
            />

            <TextField
              id="country"
              name="country"
              type="country"
              label="country"
              value={country}
              onChange={this.handleChange}
              fullWidth
              required={true}
            />

            <TextValidator
              label="password"
              onChange={this.handleChange}
              name="password"
              type="password"
              validators={['required']}
              errorMessages={['this field is required']}
              value={password}
              fullWidth
            />
            <TextValidator
              label="confirm password"
              onChange={this.handleChange}
              name="repeatPassword"
              type="password"
              validators={['isPasswordMatch', 'required']}
              errorMessages={['password mismatch', 'this field is required']}
              value={repeatPassword}
              fullWidth
              style={{ marginBottom: '1rem' }}
            />

            <button className="btn-default">
              Sign Up
              {this.props.signupInfo.ui_loading && (
                <LinearProgress style={{ zindex: '5' }} variant="query" />
              )}
            </button>
          </ValidatorForm>

          <div>
            already have an account{' '}
            <Link to="/">
              <span>Login</span>
            </Link>
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
