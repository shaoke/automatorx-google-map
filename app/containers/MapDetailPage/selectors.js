import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mapDetailPage state domain
 */

const selectMapDetailPageDomain = state =>
  state.get('mapDetailPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MapDetailPage
 */

const makeSelectMapDetailPage = () =>
  createSelector(selectMapDetailPageDomain, substate => substate.toJS());

export default makeSelectMapDetailPage;
export { selectMapDetailPageDomain };
