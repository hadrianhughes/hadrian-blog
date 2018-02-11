export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return !state;
    case 'CLOSE_OVERLAYS':
      return false;
    default:
      return state;
  }
}
