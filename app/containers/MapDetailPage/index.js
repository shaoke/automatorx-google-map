/**
 *
 * MapDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DirectionsTravelModeSwitcher from '../../components/DirectionsTravelModeSwitcher';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMapDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MapDetailPage extends React.Component {
  render() {
    return (
      <div>
        <DirectionsTravelModeSwitcher />
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
