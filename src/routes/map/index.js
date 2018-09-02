/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Map from './Map';
import LayoutFullPage from '../../components/LayoutFullPage';

const title = 'Google Map';

function action() {
  return {
    chunks: ['map'],
    title,
    component: (
      <LayoutFullPage>
        <Map title={title} />
      </LayoutFullPage>
    ),
  };
}

export default action;
