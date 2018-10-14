/**
 *
 * DirectionsTravelModeItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import directionImage from './directions.png';
import logoSmallImg from './logo-small.png';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const propTypes = {
  icon: PropTypes.string,
};

const defaultProps = {
  icon: 'Mixed',
};

const iconPosition = {
  Mixed: '-48px -72px',
  MixedSelected: '-24px -72px',
  MixedDisabled: '-72px -72px',
  Fly: '-48px -192px',
  FlySelected: '-24px -192px',
  FlyDisabled: '-72px -192px',
  Drive: '-48px -96px',
  DriveSelected: '-24px -96px',
  DriveDisabled: '-72px -96px',
  Transit: '-48px -120px',
  TransitSelected: '-24px -120px',
  TransitDisabled: '-72px -120px',
  Walk: '-48px -144px',
  WalkSelected: '-24px -144px',
  WalkDisabled: '-72px -144px',
  Bicycle: '-48px -168px',
  BicycleSelected: '-24px -168px',
  BicycleDisabled: '-72px -168px',
};

const Root = styled.div`
  position: relative;
  display: block;
  float: left;

  ::after {
    content: '';
    border-radius: 100%;
    position: absolute;
    background-color: #3367d6;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    margin: 6px 3px 5px 3px;
    height: 36px;
    width: 36px;
  }
`;

const DirectionButton = styled.button`
  background: transparent;
  border: 0;
  border-radius: 0;
  font: inherit;
  list-style: none;
  margin: 0;
  outline: 0;
  overflow: visible;
  padding: 0;
  vertical-align: baseline;
  display: block;
  cursor: pointer;
  text-align: center;
`;

const DirectionIcon = styled.div`
  background-image: url(${directionImage});
  background-size: 96px 240px;
  width: 24px;
  height: 24px;
  margin: 12px 9px 11px 9px;
  background-position: ${props => iconPosition[props.icon]};
`;

const Logo = styled.div`
  background-image: url(${logoSmallImg});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  margin: 12px 9px 11px 9px;
`;

/* eslint-disable react/prefer-stateless-function */
function DirectionsTravelModeItem(props) {
  return (
    <Root>
      <DirectionButton>
        {props.icon === 'Logo' ? <Logo /> : <DirectionIcon />}
      </DirectionButton>
    </Root>
  );
}

DirectionsTravelModeItem.propTypes = propTypes;
DirectionsTravelModeItem.defaultProps = defaultProps;

export default DirectionsTravelModeItem;
