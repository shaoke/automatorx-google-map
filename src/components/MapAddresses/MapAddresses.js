/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import SearchMapDirections from '../SearchMapDirections';

const propTypes = {
  directionsData: PropTypes.array,
  createDirection: PropTypes.func.isRequired,
  updateDirection: PropTypes.func.isRequired,
  removeDirection: PropTypes.func.isRequired,
};

const defaultProps = {
  directionsData: [],
};

class MapAddresses extends React.Component {
  render() {
    const { directionsData } = this.props;
    console.log(`[MapAddresses] directionsData: ${JSON.stringify(directionsData)}`);
    return (
      <div>
        <SearchMapDirections
          directionsData={directionsData}
          createDirection={this.props.createDirection}
          updateDirection={this.props.updateDirection}
          removeDirection={this.props.removeDirection}
        />
      </div>
    );
  }
}

MapAddresses.propTypes = propTypes;
MapAddresses.defaultProps = defaultProps;

export default MapAddresses;
