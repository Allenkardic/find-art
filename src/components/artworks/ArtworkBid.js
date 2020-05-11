import React, { useState, useEffect } from 'react';
import { Table, Spin, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// materialize ui stuffs
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
import '../css/Artwork.css';
import '../css/App.css';

// redux stuffs
import { connect } from 'react-redux';
import { getArtwork, artworkBid } from '../../redux/actions/artworkAction';
import { getUserData } from '../../redux/actions/userAction';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
});

// for the data
export function Columdata(props) {
  console.log(props.ArtworkBid, 'bidddddd');
  // const { amount, updatedDate } = props.ArtworkBid;
  return (
    <div>
      hello
      {/* <div>{amount}</div> */}
      {/* <div>{updatedDate}</div> */}
    </div>
  );
}

// main functional component
const ArtworkBid = props => {
  const text = '';
  const textToNumber = parseFloat(text);
  const [bidValue, setBidValue] = useState('');
  console.log(bidValue, 'bidvalue');
  const [bidData, setBidData] = useState({
    // amount: textToNumber,
    amount: '',
    artworkId: '',
    bidStatus: 'COUNTERED',
    createdDate: '',
    createdDateEpoch: textToNumber,
    id: textToNumber,
    madeBy: textToNumber,
    updatedDate: '',
    updatedDateEpoch: textToNumber
  });

  // this is the state for the pagination
  // const classes = useStyles();
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // app
  useEffect(() => {
    props.getArtwork(props.match.params.id);
    props.getUserData();
  }, [!!props.isFetchingBid]);

  const [form] = Form.useForm();

  // const handleChange = event => {
  //   setBidData({ amount: event.target.value });
  // };

  const onFinish = () => {
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
      amount: parseFloat(bidValue),
      // artworkId: props.singleArtwork.currentBid.artworkId,
      // bidStatus: props.singleArtwork.currentBid.bidStatus,
      // createdDate: props.singleArtwork.currentBid.createdDate,
      createdDate: props.artworkById.createdDate,
      // createdDateEpoch: props.singleArtwork.createdDateEpoch,
      createdDateEpoch: props.artworkById.createdDateEpoch,
      // id: props.singleArtwork.currentBid.id,
      id: props.artworkById.id,
      // madeBy: props.singleArtwork.currentBid.madeBy,
      // madeBy: props.singleArtwork.currentBid.madeBy,
      // updatedDate: props.singleArtwork.currentBid.updatedDate,
      updatedDate: props.artworkById.updatedDate,
      // updatedDateEpoch: props.singleArtwork.currentBid.updatedDateEpoch
      updatedDateEpoch: props.artworkById.updatedDateEpoch,
      bidStatus,
      madeBy: parseFloat(props.userData.userDetails.id),
      artworkId: parseFloat(props.artworkById.id)
    };

    // the logic of what the user input does
    console.log('bids', bid);
    props.artworkBid(bid, props.history);
    form.resetFields();

    setBidData({ amount: '' });

    // re-direct user to the home page if credentials are correct
  };
  const columns = [
    {
      title: 'Bids',
      dataIndex: 'amount',
      key: 'amount',
      render: () => (
        <>
          <div>
            {props.artworkBids.map(bid => (
              <div>hello</div>
            ))}
          </div>
        </>
      )
    },
    {
      title: 'Date',
      dataIndex: 'updatedDate',
      key: 'date',
      render: () => (
        <>
          <div>
            <Moment format="D MMM YYYY" withTitle>
              {props.artworkCurrentBid.updatedDate}
            </Moment>
          </div>
        </>
      )
    }
  ];

  // props.artworkCurrentBid.lenght,

  const pagination = {
    current: 1,
    pageSizeOptions: ['5', '10', '15'],
    pageSize: 5,
    total: 20
  };

  console.log('userData', props);
  // console.log('isfetching', props.isFetching);
  // console.log('artworkBids', props.artworkBids);
  // console.log('artworkCurrentBids', props.artworkCurrentBid);
  console.log(bidValue);
  return (
    <div className="container-artworkbid">
      <Columdata />
      <Spin spinning={!!props.isFetching} />
      <div className="bid-name-title">
        Bid for <span className="bid-name">{props.artworkById.name}</span>
      </div>
      <div className="container-artworkbid-content">
        <img
          className="artworkbid-image"
          src={
            `${props.artworkById.imageUrl}` ||
            `https://ipsumimage.appspot.com/640x360`
          }
          alt="art work"
        />
        <div className="bid-container">
          <div className="bid-container-1-1">
            <div className="bid-description artwork-description">
              {props.artworkById.description}
            </div>
            <div className="bid-container-1">
              <div className="bid-container-item">
                <div className="bid-title">minimum bid</div>
                <div className="bid-amount">
                  <span>&#8358;{props.artworkById.minimumAmount}</span>
                </div>
              </div>
              <div>
                <Form
                  form={form}
                  name="normal_login"
                  className="form-bid"
                  initialValues={{
                    remember: true
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="amount"
                    // label="E-mail"
                  >
                    <Input
                      className="form-auth-input"
                      type="number"
                      placeholder="Bid amount"
                      onChange={e => {
                        setBidValue(e.target.value);
                      }}
                      value={bidValue}
                    />
                  </Form.Item>
                  <button className="btn btn-large btn-artworkbid">
                    <Spin spinning={!!props.isFetchingBid} />
                    Bid
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="minimum-bid">
          Minimum bid:{' '}
          <span style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
            &#8358;{' '}
          </span>
          {props.artworkById.minimumAmount}
        </div>

        <div
          className={
            props.artworkbidMessage.length === 40
              ? 'bid-message-failed'
              : 'bid-message-success'
          }
        >
          {props.artworkbidMessage}
        </div> */}
      {/* <div>
        <form className="table-container" action="" onSubmit={handleSubmit}>
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
      </div> */}
      <div className="artworkbid-table">
        <div className="artwork-table-1">
          <Table
            columns={columns}
            // rowKey={record => record.login.uuid}
            dataSource={props.artworkBids}
            pagination={pagination}
            loading={!!props.isFetchingBid}
            // onChange={this.handleTableChange}
          />
        </div>
      </div>
      {/* <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Bids</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.artworkBids
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
        </Paper> */}
    </div>
  );
};

ArtworkBid.propTypes = {
  // singleArtwork: PropTypes.object.isRequired,
  artworkbidMessage: PropTypes.array.isRequired,
  getArtwork: PropTypes.func.isRequired,
  artworkBid: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isFetchingBid: state.ui.isFetching_artworkBid_button,
  isFetching: state.ui.isFetching_artwork,
  artworkById: state.artwork.singleArtwork,
  artworkBids: state.artwork.singleArtwork.bids,
  artworkCurrentBid: state.artwork.singleArtwork.currentBid,
  artworkbidMessage: state.artwork.artworkbidMessage,
  userData: state.user.userProfile
});
export default connect(mapStateToProps, {
  getArtwork,
  artworkBid,
  getUserData
})(ArtworkBid);
