import { createSelector } from "reselect";

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  // console.log('Hi');

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter));
});

// export const getVisibleContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLocaleLowerCase();
//   console.log('Hi');

//   return contacts.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(normalizedFilter));
// };

