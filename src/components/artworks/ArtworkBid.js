import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// materialize ui stuffs
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import '../css/Artwork.css';

// redux stuffs
import { connect } from 'react-redux';
import { getArtwork, artworkBid } from '../../redux/actions/artworkAction';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
});

// main functional component
const ArtworkBid = props => {
  const text = '';
  const textToNumber = parseFloat(text);
  const [bidData, setBidData] = useState({
    amount: textToNumber,
    artworkId: '',
    bidStatus: '',
    createdDate: '',
    createdDateEpoch: textToNumber,
    id: textToNumber,
    madeBy: textToNumber,
    updatedDate: '',
    updatedDateEpoch: textToNumber
  });

  // this is the state for the pagination
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // app
  useEffect(() => {
    props.getArtwork(props.match.params.id);
  }, [bidData]);

  const handleChange = event => {
    setBidData({ amount: event.target.value });
  };

  const handleSubmit = event => {
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
    } = bidData;

    const bid = {
      amount,
      artworkId: props.singleArtwork.currentBid.artworkId,
      bidStatus: props.singleArtwork.currentBid.bidStatus,
      createdDate: props.singleArtwork.currentBid.createdDate,
      createdDateEpoch: props.singleArtwork.createdDateEpoch,
      id: props.singleArtwork.currentBid.id,
      madeBy: props.singleArtwork.currentBid.madeBy,
      updatedDate: props.singleArtwork.currentBid.updatedDate,
      updatedDateEpoch: props.singleArtwork.currentBid.updatedDateEpoch
    };

    // the logic of what the user input does
    props.artworkBid(bid, props.history);

    setBidData({ amount: '' });

    // re-direct user to the home page if credentials are correct
  };

  if (!props.singleArtwork.currentBid) {
    return (
      <div className="preload-artwork-container">
        {' '}
        <div className="preloading" />
        <div className="preloading-bottom" />
      </div>
    );
  }

  return (
    <div className="container-artworkbid">
      <img
        className="artworkbid-image"
        src={props.singleArtwork.imageUrl}
        alt="art work"
      />
      <div className="date-created">
        <div> Date created: {props.singleArtwork.createdDate}</div>
        <div>Description: {props.singleArtwork.description}</div>{' '}
      </div>

      <div className="bid-container">
        <div className="minimum-bid">
          Minimum bid:{' '}
          <span style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
            &#8358;{' '}
          </span>
          {props.singleArtwork.minimumAmount}
        </div>

        <div className="bid-message">{props.artworkbidMessage}</div>

        <form
          style={{ marginBottom: '4rem' }}
          action=""
          onSubmit={handleSubmit}
        >
          <TextField
            id="amount"
            name="amount"
            type="number"
            label="Your bid amount"
            value={bidData.amount}
            onChange={handleChange}
            fullWidth
            required
          />

          <button className="btn-art">Make a Bid</button>
        </form>

        {/* bid data */}
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Bids</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.singleArtwork.bids
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(bid => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={bid.id}
                      >
                        <TableCell>
                          <span>
                            <span>&#8358;</span>
                          </span>
                          {bid.amount}
                        </TableCell>
                        <TableCell>
                          <Moment format="D MMM YYYY" withTitle>
                            {bid.updatedDate}
                          </Moment>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={props.singleArtwork.bids.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

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
