import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App';
import store from './redux/store'
import './base.css';

ReactDOM.render(
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <BrowserRouter>
            < App />
        </BrowserRouter>
        {/* </PersistGate> */}
    </Provider >,
    document.querySelector('#root')
);