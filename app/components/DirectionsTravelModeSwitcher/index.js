/**
 *
 * DirectionsTravelModeSwitcher
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class DirectionsTravelModeSwitcher extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

DirectionsTravelModeSwitcher.propTypes = {};

export default DirectionsTravelModeSwitcher;
