export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter));
};