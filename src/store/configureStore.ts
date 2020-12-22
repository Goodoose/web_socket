import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './saga';

console.log('middleware: ');

declare var window: any;

const composeEnhancers =
  undefined !== window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ realtime: true })
    : composeWithDevTools({ realtime: true });

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default configureStore;
