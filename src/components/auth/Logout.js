import React, { Component } from 'react';
import '../css/Form.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

class Logout extends Component {
  signoutUser = () => {
    this.props.logout(this.props.history);
  };

  render() {
    return (
      <div>
        <button className="btn-default" onClick={this.signoutUser}>
          logout
          {this.props.logoutInfo.ui_loading && (
            <LinearProgress style={{ zindex: '5' }} variant="query" />
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logoutInfo: state.auth
});

export default connect(mapStateToProps, { logout })(Logout);
