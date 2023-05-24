export const validateNickname = (nickname) => {
  const nicknameRegex = /^[a-zA-Z0-9_]{4,}$/;
  return nicknameRegex.test(nickname);
};

export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,}$/;
  return passwordRegex.test(password);
};

export const validateSignup = ({ nickname, email, password }) => {
  if (validateNickname(nickname) !== true) {
    return false;
  }
  if (validateEmail(email) !== true) {
    return false;
  }

  if (validatePassword(password) !== true) {
    return false;
  }

  return true;
};
