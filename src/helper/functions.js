export const formValidate = function (data) {
  let errors = {};
  if (!data.firstname) {
    errors.firstname = true;
  } else {
    delete errors.firstname;
  }
  if (!data.lastname) {
    errors.lastname = true;
  } else {
    delete errors.lastname;
  }
  if (!data.phonenumber) {
    errors.phonenumber = true;
  } else {
    delete errors.phonenumber;
  }

  return errors;
};
