// import the list of all action types
import * as actionTypes from '../action-types'

// this is just a helper for flow
// import type {ActionFormat} from "../action-flow";

export function showSuccessNotification(msg) {
  return {
    type: actionTypes.SHOW_NOTIFICATION_SUCCESS,
    payload: msg,
  }
}

export function showErrorNotification(msg) {
  return {
    type: actionTypes.SHOW_NOTIFICATION_ERROR,
    payload: msg,
  }
}

export function hideNotification() {
  return {
    type: actionTypes.HIDE_NOTIFICATION,
  }
}
