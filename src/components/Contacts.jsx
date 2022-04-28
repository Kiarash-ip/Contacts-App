import React from "react";
import AddNewContact from "./AddNewContact";
import { useSelector } from "react-redux";
import Contact from "./Contact";

export default function Contacts() {
  const state = useSelector((state) => state);
  return (
    <div className="contacts__container">
      <AddNewContact />
      <table className="contacts__table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {state.contacts?.map((contact) => (
            <Contact key={contact.id} data={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
