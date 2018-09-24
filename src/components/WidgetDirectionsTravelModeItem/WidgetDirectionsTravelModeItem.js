/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WidgetDirectionsTravelModeItem.css';

const propTypes = {
  icon: PropTypes.string,
};

const defaultProps = {
  icon: 'directionsMixedIcon',
};

class WidgetDirectionsTravelModeItem extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <button role="radio" classnames={s.directionsIconButton}>
          <div
            className={classnames({
              [s.directionsTravelModeIcon]: true,
              [s[this.props.icon]]: true,
            })}
          />
          <div className="directions-travel-mode-underline" />
        </button>
      </div>
    );
  }
}

WidgetDirectionsTravelModeItem.propTypes = propTypes;
WidgetDirectionsTravelModeItem.defaultProps = defaultProps;

export default withStyles(s)(WidgetDirectionsTravelModeItem);
