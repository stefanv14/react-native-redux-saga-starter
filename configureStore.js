// @flow
import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

// chrome extension helper or use just the regular compose if not installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// pass ESLint and Flow check
/* global globalConfig  */
const globalConfig = {
  env: 'dev',
}
const configureStore = function (rootReducer: Function, rootSaga: Function) {
  // init saga
  const sagaMiddleware = createSagaMiddleware()

  // init store
  let store
  if (globalConfig.env === 'dev') {
    store = createStore(
      rootReducer(),
      composeEnhancers(
        applyMiddleware(
          sagaMiddleware,
          createLogger(),
        ),
      ),
    )
  } else {
    store = createStore(
      rootReducer(),
      composeEnhancers(
        applyMiddleware(
          sagaMiddleware,
        ),
      ),
    )
  }

  // run watchers
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
