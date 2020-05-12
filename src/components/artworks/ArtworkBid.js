import React, { useState, useEffect } from 'react';
import { Table, Spin, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import '../css/Artwork.css';
import '../css/App.css';

// redux stuffs
import { connect } from 'react-redux';
import { getArtwork, artworkBid } from '../../redux/actions/artworkAction';
import { getUserData } from '../../redux/actions/userAction';

// main functional component
const ArtworkBid = props => {
  const text = '';
  const textToNumber = parseFloat(text);
  const [bidValue, setBidValue] = useState('');
  console.log(bidValue, 'bidvalue');
  const [bidData, setBidData] = useState({
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

  // app
  useEffect(() => {
    props.getArtwork(props.match.params.id);
    props.getUserData();
  }, [!!props.isFetchingBid]);

  const [form] = Form.useForm();

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
      createdDate: props.artworkById.createdDate,
      createdDateEpoch: props.artworkById.createdDateEpoch,
      id: props.artworkById.id,
      updatedDate: props.artworkById.updatedDate,
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
      render: amount => {
        return (
          <>
            <div>
              <div>
                <span>&#8358;</span>
                {amount}
              </div>
            </div>
          </>
        );
      }
    },
    {
      title: 'Date',
      dataIndex: 'updatedDate',
      key: 'date',
      render: updatedDate => {
        return (
          <>
            <div>
              <Moment format="D MMM YYYY" withTitle>
                {updatedDate}
              </Moment>
            </div>
          </>
        );
      }
    }
  ];

  const [pagination, setPagination] = useState({
    pageSize: 50
  });

  const setPages = () => {
    setPagination({ pageSize: 5 });
  };

  console.log('here is bid data', props);
  return (
    <div className="container-artworkbid">
      <div className="bid-name-title">
        <span className="bid-name">{props.artworkById.name}</span>
      </div>
      <div className="container-artworkbid-content">
        <div className="container-artworkbid-content-items">
          <img
            className="artworkbid-image"
            src={
              `${props.artworkById.imageUrl}` ||
              'https://via.placeholder.com/400x300'
            }
            alt="art work"
          />
        </div>
        <div className="container-artworkbid-content-items">
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
        <Spin className="artworkbid-spinner" spinning={!!props.isFetching} />
        {props.artworkById.videoUrl ? (
          <div className="container-artworkbid-content-items">
            <video width="100%" height="280px" controls>
              <source src={props.artworkById.videoUrl} />
            </video>
          </div>
        ) : null}
        <div className="container-artworkbid-content-items">
          <Table
            className="table-table"
            columns={columns}
            // size="small"
            // rowKey={record => record.login.uuid}
            dataSource={props.artworkBids}
            pagination={{
              pageSizeOptions: ['5', '10', '15'],

              pageSize: 5
              // responsive: true
            }}
            loading={!!props.isFetchingBid || !!props.isFetching}
            // onChange={this.handleTableChange}
          />
        </div>
      </div>
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
