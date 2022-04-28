import { createStore } from "redux";
import { contactsReducer } from "./contacts/contacsReducer";

const store = createStore(contactsReducer);

export default store;
