import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';


const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    <ul className="nameList">
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}: {contact.number}<button type="button" className="buttonNameList" onClick={() => onRemoveContact(contact.id)}>Delete</button></p>

        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const visibleContacts = getVisibleContacts(state);

  return {
    contacts: visibleContacts
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(contactsOperation.removeContact(id)),
  fetchContacts: () => dispatch(contactsOperation.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);