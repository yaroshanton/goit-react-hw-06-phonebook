import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { persistStore } from 'redux-persist'

// const myMiddleware = store => next => action => {
//     console.log('Привет', action);
// }

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});

// const persistor = persistStore(store);

export default store;