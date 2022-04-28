import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddContactModal({ open, changeHandler }) {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
  });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function closeModalHandler(e) {
    if (e.target.classList.contains("modal__container")) {
      changeHandler(false);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_CONTACT",
      payload: { ...data, id: state.contacts.length + 1 },
    });
    clearInputsHandler();
    changeHandler(false);
  }

  function inputChangeHandler(e) {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function clearInputsHandler() {
    setData({
      firstname: "",
      lastname: "",
      phonenumber: "",
    });
  }

  return (
    <div
      className={`modal__container ${open ? "open" : ""}`}
      onClick={closeModalHandler}
    >
      <div className="modal">
        <button onClick={() => changeHandler(false)}>X</button>
        <form onSubmit={submitHandler}>
          <input
            placeholder="firstname"
            name="firstname"
            type="text"
            value={data.firstname}
            onChange={inputChangeHandler}
          />
          <input
            placeholder="lastname"
            name="lastname"
            type="text"
            value={data.lastname}
            onChange={inputChangeHandler}
          />
          <input
            placeholder="number"
            name="phonenumber"
            type="number"
            value={data.phonenumber}
            onChange={inputChangeHandler}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
