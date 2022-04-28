import React from "react";

export default function Contact({ data }) {
  const { firstname, lastname, phonenumber } = data;
  console.log("Contact");
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{phonenumber}</td>
    </tr>
  );
}
