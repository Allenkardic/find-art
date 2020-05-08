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
          <button type="primary" className="btn btn-medium form-auth-btn">
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

// class Signin extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: ''
//     };
//   }

//   googleLogin = () => {
//     this.props.googleSignin();
//   };

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const { email, password } = this.state;
//     const existingUser = {
//       email,
//       password
//     };

//     this.props.signinUser(existingUser, this.props.history);

//     this.setState({
//       email: '',
//       password: ''
//     });
//   };

//   render() {
//     if (this.props.authenticated !== true) {
//       const { email, password } = this.state;

//       return (
//         <div className="form-container">
//           <img className="art-logo" src={Logo} alt="logo" />
//           <hr />
//           <h1 className="form-bid">Artwork market place</h1>{' '}
//           <div className="form-box">
//             <div>
//               {this.props.signinInfo.errors_login ? (
//                 <h3 style={{ color: 'red' }}>
//                   {this.props.signinInfo.errors_login}
//                 </h3>
//               ) : null}
//             </div>

//             <form action="" onSubmit={this.handleSubmit}>
//               <TextField
//                 id="email"
//                 name="email"
//                 type="email"
//                 label="Email"
//                 value={email}
//                 onChange={this.handleChange}
//                 fullWidth
//                 required
//               />

//               <TextField
//                 id="password"
//                 name="password"
//                 type="password"
//                 label="Password"
//                 value={password}
//                 onChange={this.handleChange}
//                 fullWidth
//                 required
//                 style={{ marginBottom: '1rem' }}
//               />

//               <button
//                 className="btn-default"
//                 disabled={this.props.signinInfo.ui_loading}
//               >
//                 Login
//                 {this.props.signinInfo.ui_loading && (
//                   <CircularProgress
//                     className="btn-default-progress"
//                     disableShrink
//                     size="1.3rem"
//                     thickness="10"
//                   />
//                 )}
//               </button>
//             </form>

//             <div>
//               Don't have an account{' '}
//               <Link to="/signup">
//                 <span>Sign up for free</span>
//               </Link>{' '}
//             </div>
//           </div>
//         </div>
//       );
//     }
//     return <div>You are already login Navigate pages</div>;
//   }
// }

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
