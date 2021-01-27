// import type {
//   ChangeNewState, ChangeValue,
//   ChangeValueUsers,
// } from '../action-flow'
import * as actionTypes from '../action-types'

export function setState(param) {
  return {
    type: actionTypes.SET_STATE,
    value: param,
  }
}
export function setStateKeyWithPreviousChildKeysCopy(param,
  key) {
  return {
    type: actionTypes.SET_STATE_KEY_WITH_CHILD_KEYS_COPY,
    value: param,
    key,
  }
}
export function setNewState(param) {
  return {
    type: actionTypes.SET_NEW_STATE,
    payload: param,
  }
}
