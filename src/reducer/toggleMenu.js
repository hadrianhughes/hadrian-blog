export default (state = { menuOpen: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen
      };
    case 'CLOSE_OVERLAYS':
      return {
        ...state,
        menuOpen: false
      };
    default:
      return state;
  }
}
