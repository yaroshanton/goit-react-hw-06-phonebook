import { createAction } from '@reduxjs/toolkit';

export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactError = createAction('contact/fetchContactError');

export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactError = createAction('contact/addContactError');

export const removeContactSuccess = createAction('contact/deleteSuccess');
export const removeContactRequest = createAction('contacts/deleteRequest');
export const removeContactError = createAction('contact/deleteError');

export const changeFilter = createAction('contacts/ChangeFilter');