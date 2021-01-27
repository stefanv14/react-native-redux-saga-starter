// import type {ActionFormat} from "../action-flow";
import * as actionTypes from '../action-types'

export function logErrorInfo(data) {
  return {
    type: actionTypes.LOG_ERROR_INFO,
    payload: data,
  }
}

export function logErrorInfoSuccess(response) {
  return {
    type: actionTypes.LOG_ERROR_INFO_SUCCESS,
    payload: response,
  }
}

export function logErrorInfoFailed(message) {
  return {
    type: actionTypes.LOG_ERROR_INFO_FAILED,
    status: 'error',
    payload: message,
  }
}
