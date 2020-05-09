import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/findart.png';
import { signupUser } from '../../redux/actions/authAction';

import '../css/Form.css';

function Signup(props) {
  const [form] = Form.useForm();
  const [emailValue, setEmailValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onFinish = () => {
    const newUser = {
      email: emailValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      phone: phoneValue,
      country: countryValue,
      password: passwordValue
    };
    console.log(newUser, 'hello');
    props.signupUser(newUser, props.history);
    form.resetFields();
  };
  console.log(props);
  return (
    <div className="form-container">
      <div className="form-container-item">
        <img className="art-logo" src={Logo} alt="logo" />
        <div className="form-title">Artwork market place</div>
      </div>
      <Form
        form={form}
        name="normal_login"
        className="form-auth"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <div className="login">Create account</div>
        {/* start */}
        <div className="form-auth-label">E-mail</div>
        <Form.Item
          name="email"
          // label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Invalid email address'
            },
            {
              required: true,
              message: 'Please input your Email!'
            }
          ]}
        >
          <Input
            className="form-auth-input"
            type="email"
            placeholder="E-mail"
            value={emailValue}
            onChange={e => {
              setEmailValue(e.target.value);
            }}
          />
        </Form.Item>
        {/* end */}
        {/* start */}
        <div className="form-auth-label">First name</div>
        <Form.Item
          name="firstName"
          // label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input your First name!'
            }
          ]}
        >
          <Input
            className="form-auth-input"
            type="text"
            placeholder="First name"
            value={firstNameValue}
            onChange={e => {
              setFirstNameValue(e.target.value);
            }}
          />
        </Form.Item>
        {/* end */}
        {/* start */}
        <div className="form-auth-label">Last name</div>
        <Form.Item
          name="lastName"
          // label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input your Last name!'
            }
          ]}
        >
          <Input
            className="form-auth-input"
            type="text"
            placeholder="Last name"
            value={lastNameValue}
            onChange={e => {
              setLastNameValue(e.target.value);
            }}
          />
        </Form.Item>
        {/* end */}
        {/* start */}
        <div className="form-auth-label">Phone number</div>
        <Form.Item
          name="phoneNumber"
          // label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input your Phone number!'
            }
          ]}
        >
          <Input
            className="form-auth-input"
            type="text"
            placeholder="Phone number"
            value={phoneValue}
            onChange={e => {
              setPhoneValue(e.target.value);
            }}
          />
        </Form.Item>
        {/* end */}
        {/* start */}
        <div className="form-auth-label">Country</div>
        <Form.Item
          name="countryValue"
          // label="E-mail"
          rules={[
            {
              required: true,
              message: 'Please input your country!'
            }
          ]}
        >
          <Input
            className="form-auth-input"
            type="text"
            placeholder="Country"
            value={countryValue}
            onChange={e => {
              setCountryValue(e.target.value);
            }}
          />
        </Form.Item>
        {/* end */}
        {/* start password */}
        <div className="form-auth-label">Password</div>
        <Form.Item
          name="password"
          // label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" className="form-auth-input" />
        </Form.Item>
        <div className="form-auth-label">Confirm password</div>
        <Form.Item
          name="confirm"
          className="form-auth-input"
          // label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              }
            })
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            className="form-auth-input"
            value={passwordValue}
            onChange={e => {
              setPasswordValue(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="auth-option">Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <button
            className="btn btn-medium form-auth-btn"
            disabled={!!props.signupInfo}
            // className="login-form-button"
          >
            Signe up
            <Spin className="spinner" spinning={!!props.signupInfo} />
            {/* <Spin className="spinner" spinning={true} /> */}
          </button>
        </Form.Item>
        <span className="auth-option"> already have an account</span>{' '}
        <Link to="/">login!</Link>
      </Form>
    </div>
  );
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  signupInfo: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
  signupInfo: state.ui.ui_loading
});

export default connect(mapStateToprops, { signupUser })(Signup);
