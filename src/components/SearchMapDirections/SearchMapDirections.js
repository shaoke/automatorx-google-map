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
import PageView from '@material-ui/icons/PageView';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import s from './SearchMapDirections.css';

const propTypes = {
  directionsData: PropTypes.array,
  createDirection: PropTypes.func.isRequired,
  updateDirection: PropTypes.func.isRequired,
  removeDirection: PropTypes.func.isRequired,
};

class SearchMapDirections extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange.bind(this);
    // this.handleClickAddressInput.bind(this);
    this.initialState = {
      activeStep: 0,
    };
    this.state = this.initialState;
  }

  handleChange(event, index) {
    this.props.updateDirection(event.target.value, index);
  }

  handleClickAddressInput(event, index) {
    event.preventDefault();
    this.setState({
      activeStep: index,
    });
  }

  render() {
    const { directionsData } = this.props;
    const { activeStep } = this.state;
    return (
      <div className={s.root}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          className={s.stepper}
        >
          {directionsData.map((step, index) => {
            return (
              <Step key={`${index}`}>
                <StepLabel>
                  <div className={s.stepLabelContainer}>
                    <Input
                      key={`address-${index}`}
                      fullWidth
                      error={!step.valid}
                      value={step.value}
                      onChange={event => this.handleChange(event, index)}
                      onClick={event =>
                        this.handleClickAddressInput(event, index)
                      }
                      placeholder="Please type correct address"
                      className={s.stepLabelInput}
                    />
                    <IconButton
                      onClick={() => this.props.removeDirection(index)}
                      className={s.deleteButton}
                    >
                      <DeleteIcon className={s.deleteIcon} />
                    </IconButton>
                  </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={s.operationContainer}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.createDirection('')}
          >
            <AddCircleOutline />
            <span> Add destination </span>
          </Button>

          <Button variant="outlined" color="primary" className={s.previewBtn}>
            <PageView />
            <span> Preview </span>
          </Button>
        </div>
      </div>
    );
  }
}

SearchMapDirections.propTypes = propTypes;

export default withStyles(s)(SearchMapDirections);
