import React, { useState } from "react";
import AddContactModal from "./AddContactModal";

export default function AddNewContact() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>AddNewContact</button>
      <AddContactModal open={open} changeHandler={setOpen} />
    </>
  );
}
