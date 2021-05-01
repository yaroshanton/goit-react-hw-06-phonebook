import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'data',
    storage,
    blacklist: ['filter'],
}

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactReducer)
    },
    devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export default { store, persistor };