/**
 *
 * MapDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DirectionsTravelModeSwitcher from '../../components/DirectionsTravelModeSwitcher';
import SearchMapDirections from '../../components/SearchMapDirections';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMapDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import s from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class MapDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: [
        {
          value:
            'Santa Clara, CA / Great America, 5099 Stars and Stripes Dr, Santa Clara, CA 95054',
          valid: true,
        },
        {
          value: '672 Johanna Ave, Sunnyvale, CA 94085',
          valid: true,
        },
      ],
      previewImg: null,
    };

    this.createDirection = this.createDirection.bind(this);
    this.updateDirection = this.updateDirection.bind(this);
    this.removeDirection = this.removeDirection.bind(this);
    this.preview$ = this.preview$.bind(this);
  }

  createDirection(address) {
    // TODO need to valid address
    const direction = {
      value: address,
      valid: true,
    };
    this.setState({
      directions: [...this.state.directions, direction],
    });
  }

  updateDirection(address, index) {
    // TODO need to valid address
    const { directions } = this.state;
    directions[index] = {
      value: address,
      valid: true,
    };
    this.setState({
      directions,
    });
  }

  removeDirection(index) {
    let { directions } = this.state;
    if (!directions) {
      directions = [];
    }
    this.setState({
      directions: directions.filter((direction, i) => {
        return i !== index;
      }),
    });
  }

  async preview$() {
    const data = {
      view: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      addresses: this.state.directions
        .filter(item => item.valid)
        .map(item => item.value),
    };
    console.log("preview Data: ", data);

    const res = await axios.post('/preview', data);
    if (res.data) {
      this.setState({
        previewImg: res.data,
      });
    }
    return true;
  }

  render() {
    const { directions, previewImg } = this.state;

    return (
      <div id="content-container">
        <div id="scene">
          {previewImg ? (
            <img className="previewImg" src={previewImg} alt="Preview Map" />
          ) : (
            <div>You can click preview</div>
          )}
        </div>
        <div id="omnibox-container" className="omniboxContainer">
          <div className="widgetDirectionsOmnibox">
            <DirectionsTravelModeSwitcher />
            <SearchMapDirections
              directionsData={directions}
              createDirection={this.createDirection}
              updateDirection={this.updateDirection}
              removeDirection={this.removeDirection}
              preview$={this.preview$}
            />
          </div>
        </div>
      </div>
    );
  }
}

MapDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mapdetailpage: makeSelectMapDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mapDetailPage', reducer });
const withSaga = injectSaga({ key: 'mapDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MapDetailPage);
