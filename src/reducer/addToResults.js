export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_RESULTS':
      return [
        ...state,
        ...action.value,
      ];
      break;
    default:
      return state;
  }
}
