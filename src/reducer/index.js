import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import toggleSearch from './toggleSearch';

export default combineReducers({
  toggleMenu,
  toggleSearch,
});
