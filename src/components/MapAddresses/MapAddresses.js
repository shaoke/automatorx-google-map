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

class MapAddresses extends React.Component {
  static propTypes = {};
  state = {
    name: undefined,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <SearchMapDirections />
      </div>
    );
  }
}

export default MapAddresses;
