import React, { Component } from 'react';
// import '../css/Form.css';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

class Logout extends Component {
  signoutUser = () => {
    this.props.logout(this.props.history);
  };

  render() {
    return <div>hello</div>;
  }
}

const mapStateToProps = state => ({
  logoutInfo: state.auth
});

export default connect(mapStateToProps, { logout })(Logout);
