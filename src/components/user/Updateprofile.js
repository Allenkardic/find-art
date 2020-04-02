import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Userprofile.css';

// materilize stuffs
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

// firebase stuffss
import { storage } from '../../config/firebaseConfig';
import { getUserData, updateUserProfile } from '../../redux/actions/userAction';

class Updateprofile extends Component {
  constructor(props) {
    super(props);

    // create refs

    this.nameInput = React.createRef();
    this.countryInput = React.createRef();
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.addressInput = React.createRef();
    this.phoneInput = React.createRef();

    console.log('ref', this.nameInput);

    this.state = {
      file: '',
      imagePreviewUrl: '',
      url: '',
      imgDesplay: '',
      id: ''
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.getUserData(id);
  }

  handleImageEditChange = () => {
    const fileInput = document.getElementById('imageUrl');
    fileInput.click();
  };

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];
    const uploadImage = storage.ref(`images/${file.name}`).put(file);
    uploadImage.on(
      'state_changed',
      snapshot => {
        console.log(snapshot);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            console.log('here is url', this.state);
          });
      }
    );
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log('ref', this.nameInput.current.value);
    console.log('here is state', this.state);
    const userUpdate = {
      name: this.nameInput.current.value,
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      country: this.countryInput.current.value,
      address: this.addressInput.current.value,
      phone: this.phoneInput.current.value,
      imageUrl: this.state.url
    };
    console.log('update', userUpdate);

    this.props.updateUserProfile(userUpdate, this.props.history);
  };

  render() {
    console.log('react ref', this.state);
    const { imagePreviewUrl } = this.state;
    if (!this.props.userProfile.userDetails) {
      return <div className="preloading-profile" />;
    }
    const { imageUrl } = this.props.userProfile.userDetails;
    console.log('here is props', this.props);
    return (
      <div className="profile-container">
        <i className="fas fa-user-circle image-placeholder" />
        {imagePreviewUrl.length > 3 ? (
          <img
            className="profile-image"
            src={imagePreviewUrl}
            alt="profilePicture"
          />
        ) : (
          <div className="profile-image-none">
            <img className="profile-image" src={imageUrl} alt="profile image" />
          </div>
        )}

        <form
          action=""
          onSubmit={this.handleSubmit}
          // className={classes.root}
          noValidate
          autoComplete="off"
        >
          <input
            className="profile-picture-upload"
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/png, image/jpeg"
            label="imageUrl"
            hidden="hidden"
            onChange={e => this.handleImageChange(e)}
          />

          <i
            onClick={this.handleImageEditChange}
            className="fas fa-pencil-alt pencil"
          />

          <div className="container-profile-input">
            <label htmlFor="nameInput" className="profile-label">
              User name
            </label>
            <input
              className="profile-input"
              type="text"
              name="nameInput"
              ref={this.nameInput}
              defaultValue={this.props.userProfile.userDetails.name}
            />
          </div>

          <div className="container-profile-input">
            <label htmlFor="firstName" className="profile-label">
              First name
            </label>

            <input
              className="profile-input"
              name="firstName"
              type="text"
              ref={this.firstNameInput}
              defaultValue={this.props.userProfile.userDetails.firstName}
            />
          </div>

          <div className="container-profile-input">
            <label htmlFor="lastName" className="profile-label">
              Last name
            </label>

            <input
              className="profile-input"
              name="lastName"
              type="text"
              ref={this.lastNameInput}
              defaultValue={this.props.userProfile.userDetails.lastName}
            />
          </div>

          <div className="container-profile-input">
            <label htmlFor="phone" className="profile-label">
              Phone no
            </label>

            <input
              className="profile-input"
              name="phone"
              type="tel"
              ref={this.phoneInput}
              defaultValue={this.props.userProfile.userDetails.phone}
            />
          </div>

          <div className="container-profile-input">
            <label htmlFor="country" className="profile-label">
              Address
            </label>

            <input
              className="profile-input"
              name="address"
              type="text"
              ref={this.addressInput}
              defaultValue={this.props.userProfile.userDetails.address}
            />
          </div>

          <div className="container-profile-input">
            <label htmlFor="country" className="profile-label">
              Country
            </label>

            <input
              className="profile-input"
              name="country"
              type="text"
              ref={this.countryInput}
              defaultValue={this.props.userProfile.userDetails.country}
            />
          </div>
          <button className="profile-btn">save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.user.userProfile
});

export default connect(mapStateToProps, {
  getUserData,
  updateUserProfile
})(Updateprofile);
