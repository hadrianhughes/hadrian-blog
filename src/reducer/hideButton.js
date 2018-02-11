export default (state = false, action) => {
  switch (action.type) {
    case 'HIDE_BUTTON':
      return true;
      break;
    default:
      return state;
  }
}
