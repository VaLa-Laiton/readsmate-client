/* const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,}$/;
  return passwordRegex.test(password);
}; */
import {validateEmail, validatePassword} from './validateSignup'

export const validateLogin = ({ email, password }) => {
  if (validateEmail(email) !== true) {
    return false;
  }

  if (validatePassword(password) !== true) {
    return false;
  }

  return true;
};
