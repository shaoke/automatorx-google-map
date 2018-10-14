/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';
import s from './WidgetDirectionsTravelModeSwitcher.css';
import WidgetDirectionsTravelModeItem from '../WidgetDirectionsTravelModeItem';

class WidgetDirectionsTravelModeSwitcher extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div role="radiogroup">
            <div
              className={classnames({
                [s.directionsTravelModeSelector]: true,
                [s.adjustedToDecreasedSpacing]: true,
              })}
            >
              <a href="/" className={s.logoItem} />
              <WidgetDirectionsTravelModeItem icon="directionsMixedIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsDriveIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsTransitIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsWalkIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsBicycleIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsFlyIcon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WidgetDirectionsTravelModeSwitcher);
