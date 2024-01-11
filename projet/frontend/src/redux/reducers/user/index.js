const initialState = {
    user: {}
}
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, user: action.data}
      case 'LOGOUT': 
      return {...state, user: {}}
      default:
        return state
    }
  }
  
  export default userReducer
  