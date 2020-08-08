import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './RootReducer';

const middleWares = [thunk];

// Logger for testing
if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares))

export const persistor = persistStore(store);
