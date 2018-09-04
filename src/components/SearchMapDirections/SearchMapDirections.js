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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Input from '@material-ui/core/Input';

import s from './SearchMapDirections.css';

class SearchMapDirections extends React.Component {
  /*
    [,
      {
        "value": "1600 Amphitheatre Pkwy, Mountain View, CA 94043",
        "valid": true
      }
    ]
  */
  static propTypes = {
    directions: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.bool, PropTypes.string),
    ).isRequired,
  };
  state = {
    directions: [
      {
        "value": "Santa Clara, CA / Great America, 5099 Stars and Stripes Dr, Santa Clara, CA 95054",
        "valid": true
      },
      {
        "value": "672 Johanna Ave, Sunnyvale, CA 94085",
        "valid": true
      }
    ],
    activeStep: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { activeStep, directions } = this.state;

    return (
      <div className={s.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {directions.map((step, index) => {
            return (
              <Step key={`step${index}`}>
                <StepLabel>
                  <div className={s.stepLabelContainer}>
                    <Input
                      fullWidth
                      error={!step.valid}
                      value={step.value}
                      placeholder="Please type correct address"
                    />
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <IconButton>
            <AddCircleOutline />
          </IconButton>
          <label> Add destination </label>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SearchMapDirections);
