export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_HEADER_POSITION':
      const newVal = state + action.value;
      const ret = newVal < action.min ? action.min : newVal > 0 ? 0 : newVal;
      return ret;
      break;
    default:
      return state;
  }
}
