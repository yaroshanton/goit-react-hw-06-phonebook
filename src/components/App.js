import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import ContactEditor from './ContactEditor/ContactEditor';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';




class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactEditor />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});


export default connect(null, mapDispatchToProps)(App);
