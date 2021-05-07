import axios from 'axios';
import contactsActions from './contacts-actions';


axios.defaults.baseUrl = 'http://localhost:4040';

const addContact = text => dispatch => {
  const contact = { text, completed: false };

  dispatch({ type: 'contacts/addContactRequest' });

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

export default {
  addContact,
};