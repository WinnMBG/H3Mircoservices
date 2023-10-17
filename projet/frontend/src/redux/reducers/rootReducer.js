// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import films from './films'

const rootReducer = combineReducers({
  films,
})

export default rootReducer
