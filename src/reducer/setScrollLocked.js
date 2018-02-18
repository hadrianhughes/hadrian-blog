export default (state = false, action) => {
  switch (action.type) {
    case 'SET_SCROLL_LOCKED':
      return action.value || !state;
      break;
    default:
      return state;
  }
}
