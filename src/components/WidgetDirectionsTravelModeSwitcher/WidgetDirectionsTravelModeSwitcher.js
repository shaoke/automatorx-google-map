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
              <WidgetDirectionsTravelModeItem icon="directionsMixedIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsDriveIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsTransitIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsWalkIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsBicycleIcon" />
              <WidgetDirectionsTravelModeItem icon="directionsFlyIcon" />
            </div>
          </div>
          <button
            aria-label="Close directions"
            data-tooltip="Close directions"
            vet="14442"
            jstcache="515"
            jsaction="close;focus:pane.focusTooltip;blur:pane.blurTooltip"
            className="widget-directions-close"
            jsan="7.widget-directions-close,0.ved,0.aria-label,0.data-tooltip,0.vet,22.jsaction"
            ved="1i:3,t:14442,e:2,p:khikW_OjPLHS9AOyxL-4BA:10"
          >
            <div
              guidedhelpid="close_directions"
              className="widget-directions-icon close-directions"
            />
            <div className="loading-indicator" />
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WidgetDirectionsTravelModeSwitcher);
