import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  changeFilter,
  removeContactSuccess,
  fetchContactSuccess
}
  from './contacts-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload)
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});