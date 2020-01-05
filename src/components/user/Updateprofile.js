import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Userprofile.css';

// materilize stuffs
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getUserData, updateProfile } from '../../redux/actions/userAction';

class Updateprofile extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      country: '',
      dateOfBirth: '',
      firstName: '',
      imageUrl: '',
      lastName: '',
      phone: ''
    };
    console.log('state', this.state);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.userProfile.userDetails) {
      return null;
    }
    if (
      nextProps.userProfile.userDetails.address !== prevState.address ||
      nextProps.userProfile.userDetails.country !== prevState.country ||
      nextProps.userProfile.userDetails.firstName !== prevState.firstName ||
      nextProps.userProfile.userDetails.dateOfBirth !== prevState.dateOfBirth ||
      nextProps.userProfile.userDetails.lastName !== prevState.lastName ||
      nextProps.userProfile.userDetails.phone !== prevState.phone
      // nextProps.updateUserProfile.userDetails.imageUrl !== prevState.imageUrl
    ) {
      return {
        address: nextProps.userProfile.userDetails.address,
        country: nextProps.userProfile.userDetails.country,
        firstName: nextProps.userProfile.userDetails.firstName,
        dateOfBirth: nextProps.userProfile.userDetails.dateOfBirth,
        lastName: nextProps.userProfile.userDetails.lastName,
        phone: nextProps.userProfile.userDetails.phone
        // imageUrl: nextProps.userProfile.userDetails.imageUrl
        // imageUrl: nextProps.updateUserProfile.userDetails.imageUrl
      };
    }
    return null;

    console.log('this is props', nextProps.userProfile.userDetails.id);
    console.log('this is state', prevState);
  }

  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.getUserData(id);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleImageChange = event => {
    const file = this.refs.uploadImage.files[0];
    console.log(file);
    const reader = new FileReader();
    console.log(reader);
    console.log(this.state);

    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result
      });
      console.log('onloaded state', this.state);
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        imageUrl: reader.result
      });
      console.log('reader state', this.state);
    } else {
      this.setState({
        imageUrl: ''
      });
    }
  };

  handleImageEditChange = () => {
    const fileInput = document.getElementById('imageUrl');
    fileInput.click();
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      address,
      country,
      dateOfBirth,
      firstName,
      imageUrl,
      phone
    } = this.state;

    const { id } = this.props.match.params;

    const userUpdate = {
      id,
      address,
      country,
      dateOfBirth,
      firstName,
      imageUrl,
      phone
    };

    this.props.updateProfile(userUpdate, this.props.history);
  };

  render() {
    console.log('data', this.props.userProfile.userDetails);

    if (!this.props.userProfile.userDetails) {
      return <div className="preloading-profile" />;
    }
    return (
      <div className="profile-picture-upload">
        {this.state.imageUrl !== null ? (
          <img
            className="profile-image"
            src={this.state.imageUrl}
            alt="profile"
          />
        ) : (
          <div className="profile-image-none">
            <i className="fas fa-user-circle" />
          </div>
        )}

        <form action="" onSubmit={this.handleSubmit}>
          <input
            className="profile-picture-upload"
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/png, image/jpeg"
            label="imageUrl"
            hidden="hidden"
            defaultValue={this.state.imageUrl}
            onChange={this.handleImageChange}
            ref="uploadImage"
          />

          <i
            onClick={this.handleImageEditChange}
            className="fas fa-pencil-alt pencil"
          >
            {/* // onClick={() => this.fileInput.click()} */}
          </i>

          <TextField
            id="address"
            name="address"
            type="text"
            label="address"
            defaultValue={this.state.address}
            onChange={this.handleChange}
            fullWidth
            required
          />
          <TextField
            id="country"
            name="country"
            type="text"
            label="country"
            defaultValue={this.state.country}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="dateOfBirth"
            name="dateOfBirth"
            type="text"
            label="dateOfBirth"
            defaultValue={this.state.dateOfBirth}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="firstName"
            name="firstName"
            type="text"
            label="firstName"
            defaultValue={this.state.firstName}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="lastName"
            name="lastName"
            type="text"
            label="lastName"
            defaultValue={this.state.lastName}
            onChange={this.handleChange}
            fullWidth
            required
          />

          <TextField
            id="phone"
            name="phone"
            type="tel"
            label="phone"
            defaultValue={this.state.phone}
            onChange={this.handleChange}
            fullWidth
            required
          />
          <button className="profile-btn">save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.user.userProfile
});

export default connect(mapStateToProps, { getUserData, updateProfile })(
  Updateprofile
);
