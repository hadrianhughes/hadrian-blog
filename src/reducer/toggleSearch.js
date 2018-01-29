export default (state = { searchOpen: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        searchOpen: !state.searchOpen
      };
    default:
      return state;
  }
}
