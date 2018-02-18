import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import toggleSearch from './toggleSearch';
import addToResults from './addToResults';
import incrementPage from './incrementPage';
import hideButton from './hideButton';
import addToHeaderPosition from './addToHeaderPosition';
import setScrollHeight from './setScrollHeight';

export default combineReducers({
  toggleMenu,
  toggleSearch,
  addToResults,
  incrementPage,
  hideButton,
  addToHeaderPosition,
  setScrollHeight,
});
