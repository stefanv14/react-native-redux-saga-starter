import {
  all, call, delay, put, takeEvery, takeLatest,
} from 'redux-saga/effects'
// import * as sharedActions from '../actions/action-creators/shared'
import { fetchTestDataSuccess } from '../actions/action-creators/test'
import * as actionTypes from '../actions/action-types'
import ThirdPartyApi from '../api/ThirdPartyApi'
import {
  hideNotification,
  showErrorNotification,
  showSuccessNotification,
} from '../actions/action-creators/notification'

function* getTestData() {
  try {
    const api = new ThirdPartyApi('https://ipapi.co/json/')

    const response = yield call(api.getDataFromApi.bind(api))
    yield put(fetchTestDataSuccess(response.data))
    yield put(showSuccessNotification('Notifikacija test success'))
  } catch (e) {
    yield put(showErrorNotification('Notifikacija test error'))
  }
}

function* handleErrors(sagaName, e, param, failAction) {
  console.error(`Saga ${sagaName} failed`, param, e.message, e.errorCode)

  if (e.errorCode === 401) {
    // we need to login
    window.location.href = '/user/login'
  }

  const errMsg = e.message || 'Undefined error'
  // yield put( showErrorNotification(errMsg) );

  const action = typeof failAction === 'function' ? failAction(errMsg) : failAction
  yield put(action)
}

function* timeoutNotification() {
  yield delay(15000, true)
  yield put(hideNotification())
}

// rootSaga should yield all our sagas
export default function* rootSaga() {
  yield all([
    takeEvery('TEST_ACTION', getTestData),
    // takeLatest(actionTypes.SHOW_NOTIFICATION_SUCCESS, timeoutNotification),
    // takeLatest(actionTypes.SHOW_NOTIFICATION_ERROR, timeoutNotification),
  ])
}
