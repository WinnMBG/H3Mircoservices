// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import films from './films'
import userReducer from './user'

const rootReducer = combineReducers({
  films,
  userReducer
})

export default rootReducer
