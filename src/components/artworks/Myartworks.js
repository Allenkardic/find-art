import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Myartwork from './Myartwork';
import '../css/Myartwork.css';

// redux stuffs
import { connect } from 'react-redux';
import { myArtworks, createArtwork } from '../../redux/actions/artworkAction';

// firebase stuffs
import { storage } from '../../config/firebaseConfig';

const Myartworks = props => {
  // image upload states
  const [imageUploaded, setImageUploaded] = useState('');
  const [storedImageUrl, setStoredImageUrl] = useState({ imageUrl: '' });
  const [videoUploaded, setVideoUploaded] = useState('');
  const [storedVideoUrl, setStoredVideoUrl] = useState({ videoUrl: '' });

  // progress bar
  const [imageProgress, setImageProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    props.myArtworks();
    console.log('hello');
  }, []);

  // dom manipulation functions
  const openCreateArtworkForm = () => {
    const containerArtwork = document.querySelector('.container-myartwork');
    const formMyArtwork = document.querySelector('.add-myartwork-form');
    const addMyartwork = document.querySelector('.add-myartwork');
    const body = document.querySelector('body');
    containerArtwork.style.cssText = 'overflow:hidden; opacity:0.1';
    formMyArtwork.style.cssText = 'display:block; opacity:1';
    addMyartwork.style = 'display:none';
    body.style = 'overflow:hidden';
    console.log('clicked');
  };

  const closeCreateArtworkForm = () => {
    const bcontainerArtwork = document.querySelector('.container-myartwork');
    const bformMyArtwork = document.querySelector('.add-myartwork-form');
    const baddMyartwork = document.querySelector('.add-myartwork');
    const bbody = document.querySelector('body');
    bcontainerArtwork.style.cssText = 'overflow:visible; opacity:1';
    bformMyArtwork.style = 'display:none;';
    baddMyartwork.style = 'display:block';
    bbody.style = 'overflow:visible';
    console.log('clicked 2 2 2');
  };

  // const getAddButton = document.querySelector('.add-myartwork');
  // getAddButton.style.remove();

  // selecting images and videos to upload
  const handleChosenFile = () => {
    const chosenFileInput = document.getElementById('fileUrl');
    chosenFileInput.click();
  };

  const handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageUploaded(file);
    const uploadImage = storage.ref(`createdartworks/${file.name}`).put(file);

    uploadImage.on(
      'state_changed',
      snapshot => {
        const imageProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setImageProgress(imageProgress);
        // console.log(snapshot);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('createdartworks')
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setStoredImageUrl({ imageUrl: url });
          });
      }
    );
  };

  // video uploading stuffs

  const handleVideoChange = e => {
    e.preventDefault();
    const videoFile = e.target.files[0];
    setVideoUploaded(videoFile);
  };

  const handleUploadVideo = e => {
    e.preventDefault();
    const uploadVideo = storage
      .ref(`createdartworks/${videoUploaded.name}`)
      .put(videoUploaded);
    uploadVideo.on(
      'state_changed',
      snapshot => {
        const videoProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setVideoProgress(videoProgress);
        // console.log(snapshot);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('createdartworks')
          .child(videoUploaded.name)
          .getDownloadURL()
          .then(url => {
            setStoredVideoUrl(url);
          });
      }
    );
  };

  // create artwork

  const [valueName, setValueName] = useState({
    name: ''
  });
  const [valueDes, setValueDes] = useState({
    description: ''
  });
  const [valueMin, setValueMin] = useState({
    minimumAmount: parseFloat('')
  });
  const handleChangeName = event => {
    setValueName({ name: event.target.value });
  };
  const handleChangeDescription = event => {
    setValueDes({ description: event.target.value });
  };
  const handleChangeMinimumAmount = event => {
    setValueMin({ minimumAmount: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name } = valueName;
    const { minimumAmount } = valueMin;
    const { description } = valueDes;
    const { videoUrl } = storedVideoUrl;
    const { imageUrl } = storedImageUrl;

    const artwork = {
      description,
      imageUrl,
      minimumAmount,
      name,
      posted: true,
      purchaseType: 'BID',
      videoUrl
    };

    // the logic of what the user input does
    props.createArtwork(artwork, props.history);

    setValueName({ name: '' });
    setValueDes({ description: '' });
    setValueMin({ minimumAmount: parseFloat('') });
  };

  const { userArtworks } = props;
  console.log('myartwork', props);
  console.log(
    'createmyartworkMeassage',
    props.createArtworkMessage.createArtworkMessage.length
  );
  const check = 28;
  return (
    <div>
      <div className="add-myartwork-form">
        <div className="close-create-artwork">
          <i
            onClick={closeCreateArtworkForm}
            className="far fa-window-close close-create-artwork"
          />
        </div>
        <div style={{ color: 'blue', fontSize: '1.2em' }}>
          {props.createArtworkMessage.createArtworkMessage}
        </div>
        <div className="container-createartwork-input">
          <progress
            value={imageProgress}
            max="100"
            className="progress-bar-1"
          />
          <input
            // this input accepts both images and videos
            id="fileUrl"
            className="create-image-upload"
            type="file"
            accept="image/png, image/jpeg, video/*"
            hidden="hidden"
            onChange={e => handleFileChange(e)}
          />

          <button onClick={handleChosenFile} className="change-btn">
            Add Artwork
          </button>
        </div>

        {/* video stuffs */}
        <div className="container-createartwork-input">
          <progress value={videoProgress} max="100" className="progress-bar" />
          <input
            type="file"
            accept="video/*"
            onChange={e => handleVideoChange(e)}
          />
          <button onClick={handleUploadVideo} className="change-btn">
            Upload video
          </button>
        </div>

        {/* form: artwork data */}
        <form action="" onSubmit={handleSubmit}>
          <div className="container-createartwork-input">
            <label htmlFor="">Artwork name:</label>
            <input
              className="createartwork-input"
              type="text"
              name="name"
              value={valueName.name}
              onChange={handleChangeName}
              placeholder="Enter artwork name"
              required
            />
          </div>
          <div className="container-createartwork-input ">
            <label htmlFor="">Artwork description:</label>
            <textarea
              className="createartwork-input description"
              name="description"
              value={valueDes.description}
              onChange={handleChangeDescription}
              placeholder="Enter artwork description"
              row="4"
              cols="50"
              required
            />
          </div>
          <div className="container-createartwork-input">
            <label htmlFor="">Enter minimum bid amount:</label>
            <input
              className="createartwork-input"
              type="number"
              name="minimumAmount"
              value={valueMin.minimumAmount}
              onChange={handleChangeMinimumAmount}
              placeholder="Enter minimum bid"
              required
            />
          </div>

          <button className="change-btn">Create artwork</button>
        </form>
      </div>
      {/* my artwork */}
      <div className="myartwork">
        <i
          onClick={openCreateArtworkForm}
          className="fas fa-plus add-myartwork"
        />
      </div>
      <div className="container-myartwork">
        {userArtworks.map(image => (
          <Myartwork key={image.id} userArtworks={image} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userArtworks: state.artwork.userArtworks,
  createArtworkMessage: state.artwork
});

Myartworks.propTypes = {
  userArtworks: PropTypes.array.isRequired,
  myArtworks: PropTypes.func.isRequired
  // createArtwork: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { myArtworks, createArtwork })(
  Myartworks
);
