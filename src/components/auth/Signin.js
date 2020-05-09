/* eslint-disable import/no-extraneous-dependencies */
/** @format */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Checkbox, Button, Spin } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../css/Form.css';
import PropTypes from 'prop-types';

// redux stuffs
import { connect } from 'react-redux';
import Logo from '../images/findart.png';
import { signinUser, googleSignin } from '../../redux/actions/authAction';

function Signin(props) {
  const [form] = Form.useForm();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onChangeEmail = e => {
    setEmailValue(e.target.value);
  };

  const onChangePassword = e => {
    setPasswordValue(e.target.value);
  };
  const onFinish = () => {
    const existingUser = {
      email: emailValue,
      password: passwordValue
    };
    console.log('hello');
    props.signinUser(existingUser, props.history);
    form.resetFields();
  };
  console.log(props.signinInfo);
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
        <div className="login">Login to your account</div>
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
            placeholder="Username"
            onChange={onChangeEmail}
            value={emailValue}
          />
        </Form.Item>
        <div className="form-auth-label">Password</div>
        <Form.Item
          name="password"
          className=".form-auth-item"
          // label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input
            className="form-auth-input"
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
            value={passwordValue}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="auth-option">Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <button
            disabled={!!props.signinInfo}
            className="btn btn-medium form-auth-btn"
          >
            Log in
            <Spin className="spinner" spinning={!!props.signinInfo} />
          </button>
        </Form.Item>
        <span className="auth-option"> don't have an account</span>{' '}
        <Link to="/signup">register now!</Link>
      </Form>
    </div>
  );
}

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  googleSignin: PropTypes.func.isRequired,
  signinInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  signinInfo: state.ui.ui_loading,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, { signinUser, googleSignin })(Signin);
