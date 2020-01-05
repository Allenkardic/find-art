import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import '../css/Artwork.css';
import { connect } from 'react-redux';
import { getArtwork, artworkBid } from '../../redux/actions/artworkAction';

class ArtworkBid extends Component {
  constructor() {
    super();
    const text = '';
    const textToNumber = parseFloat(text);
    this.state = {
      amount: textToNumber,
      artworkId: '',
      bidStatus: '',
      createdDate: '',
      createdDateEpoch: textToNumber,
      id: textToNumber,
      madeBy: textToNumber,
      updatedDate: '',
      updatedDateEpoch: textToNumber
    };
  }

  componentDidMount() {
    this.props.getArtwork(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      amount,
      artworkId,
      bidStatus,
      createdDate,
      createdDateEpoch,
      id,
      madeBy,
      updatedDate,
      updatedDateEpoch
    } = this.state;

    if (!this.props.singleArtwork.currentBid) {
      return <div className="preloading" />;
    }
    const bid = {
      amount,
      artworkId: this.props.singleArtwork.currentBid.artworkId,
      bidStatus: this.props.singleArtwork.currentBid.bidStatus,
      createdDate: this.props.singleArtwork.currentBid.createdDate,
      createdDateEpoch: this.props.singleArtwork.createdDateEpoch,
      id: this.props.singleArtwork.currentBid.id,
      madeBy: this.props.singleArtwork.currentBid.madeBy,
      updatedDate: this.props.singleArtwork.currentBid.updatedDate,
      updatedDateEpoch: this.props.singleArtwork.currentBid.updatedDateEpoch
    };

    // the logic of what the user input does
    this.props.artworkBid(bid, this.props.history);

    this.setState({
      amount: ''
    });

    // re-direct user to the home page if credentials are correct
  };

  render() {
    console.log('After mount artworkBid', this.props);

    if (!this.props.singleArtwork.currentBid) {
      return (
        <div className="container-home-url">
          {' '}
          <div className="preloading" />
          <div className="preloading-bottom" />
        </div>
      );
    }
    console.log(this.props);

    return (
      <div className="container-home-url">
        <img
          className="home-url"
          src={this.props.singleArtwork.imageUrl}
          alt="art work"
        />
        <div className="date-created">
          <div> Date created: {this.props.singleArtwork.createdDate}</div>
          <div>Description: {this.props.singleArtwork.description}</div>{' '}
        </div>

        <div className="bid-container">
          <div className="minimum-bid">
            Minimum bid:{' '}
            <span style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
              &#8358;{' '}
            </span>
            {this.props.singleArtwork.minimumAmount}
          </div>
          {this.props.singleArtwork.bids.map(bid => (
            <div className="bid-amount">
              <div className="bid-amount-item">
                <span>&#8358;</span> {(bid.id, bid.amount)}
              </div>
              <div className="bid-amount-item">
                <Moment format="D MMM YYYY" withTitle>
                  {bid.updatedDate}
                </Moment>
              </div>
            </div>
          ))}

          <div className="bid-message">{this.props.artworkbidMessage} </div>

          <form action="" onSubmit={this.handleSubmit}>
            <TextField
              id="amount"
              name="amount"
              type="number"
              label="Your bid amount"
              value={this.state.amount}
              onChange={this.handleChange}
              fullWidth
              required
            />

            <button className="btn-art">Make a Bid</button>
          </form>
        </div>
      </div>
    );
  }
}

ArtworkBid.propTypes = {
  singleArtwork: PropTypes.object.isRequired,
  artworkbidMessage: PropTypes.array.isRequired,
  getArtwork: PropTypes.func.isRequired,
  artworkBid: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  singleArtwork: state.artwork.singleArtwork,
  artworkbidMessage: state.artwork.artworkbidMessage
});
export default connect(mapStateToProps, { getArtwork, artworkBid })(ArtworkBid);
