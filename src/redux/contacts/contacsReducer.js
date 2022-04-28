const initialState = {
  contacts: [],
};

export const contactsReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_CONTACT":
      if (
        !state.contacts.find(
          (contact) => contact.phonenumber === action.payload.phonenumber
        )
      ) {
        state.contacts.push({
          ...action.payload,
        });
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};
