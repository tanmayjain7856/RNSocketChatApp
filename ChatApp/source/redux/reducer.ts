function reducer(state = {}, action: any) {
  switch (action.type) {
    case 'users_online':
      return {...state, usersOnline: action.data};
    case 'self_user':
      return {...state, selfUser: action.data};
    default:
      return state;
  }
}

export default reducer;
