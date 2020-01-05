/* eslint-disable import/no-extraneous-dependencies */
/** @format */
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../css/Form.css';
import PropTypes from 'prop-types';
// redux stuffs

// materia ui stuffs
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { signinUser } from '../../redux/actions/authAction';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const existingUser = {
      email,
      password
    };

    // the logic of what the user input does
    this.props.signinUser(existingUser, this.props.history);

    this.setState({
      email: '',
      password: ''
    });

    // re-direct user to the home page if credentials are correct
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <div>
          {this.props.signinInfo.errors_login ? (
            <h1 style={{ color: 'red' }}>
              {this.props.signinInfo.errors_login}
            </h1>
          ) : null}
        </div>
        <form action="" onSubmit={this.handleSubmit}>
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
            id="password"
            name="password"
            type="password"
            label="password"
            value={password}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <button className="btn-default">
            Login
            {this.props.signinInfo.ui_loading && (
              <LinearProgress style={{ zindex: '5' }} variant="query" />
            )}
          </button>
        </form>
        <div>
          Don't have an account{' '}
          <Link to="/signup">
            <span>Sign up </span>
          </Link>{' '}
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  signinInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  signinInfo: state.auth
});

export default connect(mapStateToProps, { signinUser })(Signin);
