export const isUser = () => {
  const keys = Object.keys(localStorage);
  if (keys.includes("dataUser")) {
    return true;
  } else {
    return false;
  }
};

export const redirect = () => {
  window.location.href = "/home"
};
