import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './RootReducer';

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares)) // to modify array on the fly

export const persistor = persistStore(store);
