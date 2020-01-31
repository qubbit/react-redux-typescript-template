import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require(`redux-logger`);
  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
