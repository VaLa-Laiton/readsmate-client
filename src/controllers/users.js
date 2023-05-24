//  Consult all registered users
export const getUsers = null;

// Check if a specific user exists
export const getUserById = null;

//  POST User Login
export const postUserLogin = async ({ email, password }) => {
  const url = "http://127.0.0.1:3000/api/user/log-in";

  const data = {
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    const dataResponse = await response.json();
    const creationDate = Date.now();

    const dataString = JSON.stringify({
      creationDate: creationDate,
      dataResponse: dataResponse,
    });
    localStorage.setItem("dataUser", dataString);
  } catch (error) {
    console.log(error);
  }
};

//  POST User Signup
export const postUserSignup = async ({ nickname, email, password }) => {
  const url = "http://127.0.0.1:3000/api/user/sign-up";

  const data = {
    nickname: nickname,
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    const dataResponse = await response.json();
    const creationDate = Date.now();

    const dataString = JSON.stringify({
      creationDate: creationDate,
      dataResponse: dataResponse,
    });
    localStorage.setItem("dataUser", dataString);
  } catch (error) {
    console.log(error);
  }
};

// Update user
export const updateUser = async ({ dataUpdate, token, userId }) => {
  const url = `http://localhost:3000/api/user/${userId}`;

  const data = dataUpdate;

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete user
export const deleteUser = async ({ token, userId }) => {
  const url = `http://localhost:3000/api/user/${userId}`;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
