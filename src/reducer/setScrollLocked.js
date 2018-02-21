export default (state = false, action) => {
  switch (action.type) {
    case 'SET_SCROLL_LOCKED':
      return action.value === undefined ? !state : action.value;
      break;
    default:
      return state;
  }
}
