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
  static propTypes = {};

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <MapAddresses />
        </Grid>
        <Grid item xs={8}>
          Right Container
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(normalizeCss, s)(Map);
