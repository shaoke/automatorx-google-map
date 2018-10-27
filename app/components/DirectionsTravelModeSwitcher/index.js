/**
 *
 * DirectionsTravelModeSwitcher
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { FormattedMessage } from 'react-intl';

// ===========================================
// Internal components
import DirectionsTravelModeItem from '../DirectionsTravelModeItem';

// ===========================================
// This component relative files
// import messages from './messages';

const Root = styled.div`
  position: relative;
  display: block;
  padding-top: 8px;
`;

const Container = styled.div`
  background-color: transparent;
  height: 48px;
`;

const DirectionsTravelModeSelector = styled.div`
  list-style-type: none;
  display: inline-block;
  vertical-align: top;
  margin: 0 0 0 4px;
`;

/* eslint-disable react/prefer-stateless-function */
function DirectionsTravelModeSwitcher() {
  return (
    <Root>
      <Container>
        <div role="radiogroup">
          <DirectionsTravelModeSelector>
            <Link to="/">
              <DirectionsTravelModeItem icon="Logo" />
            </Link>
            <DirectionsTravelModeItem icon="Mixed" />
            <DirectionsTravelModeItem icon="Drive" />
            <DirectionsTravelModeItem icon="Transit" />
            <DirectionsTravelModeItem icon="Walk" />
            <DirectionsTravelModeItem icon="Bicycle" />
            <DirectionsTravelModeItem icon="Fly" />
          </DirectionsTravelModeSelector>
        </div>
      </Container>
    </Root>
  );
}

DirectionsTravelModeSwitcher.propTypes = {};

export default DirectionsTravelModeSwitcher;
