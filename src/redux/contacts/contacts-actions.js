import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

// const addContact = createAction('contacts/Add', ({ name, number }) => ({
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// }))

const removeContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

// eslint-disable-next-line
export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContact,
  changeFilter
};