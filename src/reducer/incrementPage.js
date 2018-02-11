export default (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return state + 1;
      break;
    default:
      return state;
  }
}
