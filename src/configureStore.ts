import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { isProduction } from '../common/utils';
import rootReducer from './reducers';
import rootSaga from './sagas';

const logger = createLogger({});

declare global {
  interface Window { // tslint:disable-line
    devToolsExtension: any; // tslint:disable-line
  }
}

function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  if (!isProduction()) {
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    window.devToolsExtension && !isProduction() ?
      compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension(),
      ) :
      applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
