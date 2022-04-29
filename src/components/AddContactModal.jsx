import React, { useEffect, useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formValidate } from "../helper/functions";
import { addNewContact } from "../redux/contacts/contactsActions";

export default function AddContactModal({ open, changeHandler }) {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    phonenumber: false,
  });
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    phonenumber: false,
  });

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setErrors(formValidate(data));
  }, [data]);

  function closeModalHandler(e) {
    if (e.target.classList.contains("modal__container")) {
      changeHandler(false);
    }
  }

  // console.log(Object.keys(errors));

  function submitHandler(e) {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      dispatch(addNewContact({ ...data, id: state.contacts.length + 1 }));
      clearInputsHandler();
      changeHandler(false);
    }
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

  function touchHandler(e) {
    setTouched((prevData) => ({
      ...prevData,
      [e.target.name]: true,
    }));
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
            onFocus={touchHandler}
            className={errors.firstname && touched.firstname ? "notValid" : ""}
            placeholder="firstname"
            name="firstname"
            type="text"
            value={data.firstname}
            onInput={inputChangeHandler}
          />
          <input
            onFocus={touchHandler}
            className={errors.lastname && touched.lastname ? "notValid" : ""}
            placeholder="lastname"
            name="lastname"
            type="text"
            value={data.lastname}
            onInput={inputChangeHandler}
          />
          <input
            onFocus={touchHandler}
            className={
              errors.phonenumber && touched.phonenumber ? "notValid" : ""
            }
            placeholder="number"
            name="phonenumber"
            type="number"
            value={data.phonenumber}
            onInput={inputChangeHandler}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
