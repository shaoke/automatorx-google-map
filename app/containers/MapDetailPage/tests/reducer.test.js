import { fromJS } from 'immutable';
import mapDetailPageReducer from '../reducer';

describe('mapDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(mapDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
