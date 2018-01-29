export default (state = { menuOpen: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen
      };
    default:
      return state;
  }
}
