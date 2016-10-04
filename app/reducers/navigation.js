import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const allTabs = [
    (lastRoute) => lastRoute || { key: 'take-photo', index: 0 },
    (lastRoute) => lastRoute || { key: 'recent-photos', index: 1 }
];

export const tabs = createReducer({index: 0, key: 'take-a-photo', routes: allTabs}, {
    [types.SET_TAB](state, action) {
        return Object.assign({}, state, allTabs[action.index]());
    }
});
