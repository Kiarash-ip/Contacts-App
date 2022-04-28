import React, { useState } from "react";
import AddContactModal from "./AddContactModal";

export default function AddNewContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="add__contact">
      <button onClick={() => setOpen(true)}>Create</button>
      <AddContactModal open={open} changeHandler={setOpen} />
    </div>
  );
}
