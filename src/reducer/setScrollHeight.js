export default (state = 0, action) => {
  switch (action.type) {
    case 'SET_SCROLL_HEIGHT':
      return action.value;
      break;
    default:
      return state;
  }
}
