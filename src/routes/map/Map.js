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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Grid from '@material-ui/core/Grid';

// import { withStyles } from '@material-ui/core/styles';
import normalizeCss from 'normalize.css';
import s from './map.css';
import MapAddresses from '../../components/MapAddresses';

class Map extends React.Component {
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
    };

    this.createDirection = this.createDirection.bind(this);
    this.updateDirection = this.updateDirection.bind(this);
    this.removeDirection = this.removeDirection.bind(this);
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

  render() {
    const { directions } = this.state;
    return (
      <div id="content-container">
        <div id="scene">
          <img src="" />
        </div>
        <div id="pane">
          <div className={{ 'widget-pane': true, 'widget-pane-visible': true }}>
            <MapAddresses
              directionsData={directions}
              createDirection={this.createDirection}
              updateDirection={this.updateDirection}
              removeDirection={this.removeDirection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Map);
