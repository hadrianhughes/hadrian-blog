export default (state = { searchOpen: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        searchOpen: !state.searchOpen
      };
    case 'CLOSE_OVERLAYS':
      return {
        ...state,
        searchOpen: false
      };
    default:
      return state;
  }
}
