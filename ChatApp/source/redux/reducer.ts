function reducer(state = {}, action: any) {
  switch (action.type) {
    case 'message':
      return {...state, message: action.data};
    default:
      return state;
  }
}

export default reducer;
