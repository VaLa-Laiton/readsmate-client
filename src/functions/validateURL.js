// export const validateURL = (url) => {
//   const regex =
//     /^https:\/\/docs\.google\.com\/document\/d\/[a-zA-Z0-9_-]+\/edit$/;

//   return regex.test(url);
// };

export const validateURL = (url) => {
  const regex =
    /^https:\/\/docs\.google\.com\/document\/d\/[a-zA-Z0-9_-]+\/edit(\?usp=sharing)?$/;

  return regex.test(url);
};
