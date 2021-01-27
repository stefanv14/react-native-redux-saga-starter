// @flow
import { combineReducers } from 'redux'
import { test } from './reducers/test'

// Combine Reducers
const rootReducer = () => combineReducers({
  test,
})

export default rootReducer
