import { createSelector } from "reselect";

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter));
});

