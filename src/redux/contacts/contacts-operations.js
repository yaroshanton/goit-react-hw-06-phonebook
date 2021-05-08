import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError
} from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('http://localhost:4040/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

// Пример асинхронного fetch
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('http://localhost:4040/contacts');

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };


const addContact = data => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('http://localhost:4040/contacts', data)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`http://localhost:4040/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContact,
  removeContact
};