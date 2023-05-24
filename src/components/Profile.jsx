import { useContext } from "react";
import { ApiContext } from "../context/ApiContextProvider";
import { useEffect, useState } from "react";
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from "../functions/validateSignup";
import { updateUser, deleteUser } from "../controllers/users";
import { logoutUpdate, logout } from "../functions/logout";
import { isUser, redirect } from "../functions/isUser";

const Profile = () => {
  const { user } = useContext(ApiContext);

  const dataUpdate = {};
  let message =
    "Lo siento, pero no cumples los requisitos en alguno de los campos.";

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successUpdate, setSuccessUpdate] = useState("");
  const [deleteUserState, setDeleteUserState] = useState(false);

  const isValid = async (e) => {
    e.preventDefault();

    if (nickname.length >= 1) {
      if (validateNickname(nickname)) {
        dataUpdate.nickname = nickname;
      } else {
        setSuccessUpdate(message);
        return;
      }
    }

    if (email.length >= 1) {
      if (validateEmail(email)) {
        dataUpdate.email = email;
      } else {
        setSuccessUpdate(message);
      }
    }

    if (password.length >= 1) {
      if (validatePassword(password)) {
        dataUpdate.password = password;
      } else {
        setSuccessUpdate(message);
        return;
      }
    }

    if (
      (await updateUser({
        dataUpdate: dataUpdate,
        token: user.dataResponse.token,
        userId: user.dataResponse.userId,
      })) === true
    ) {
      setSuccessUpdate(`Felicidades, se actualizaron tus datos exitosamente.`);
      setTimeout(() => {
        logoutUpdate();
      }, 3000);
    }
  };

  const isValidDelete = async () => {
    if (
      (await deleteUser({
        token: user.dataResponse.token,
        userId: user.dataResponse.userId,
      })) === true
    ) {
      setTimeout(() => {
        logout();
      }, 1000);
    }
  };

  useEffect(() => {
    document.title = "Perfil - RADSMATE";
    if (isUser() === false) {
      redirect();
    }
  });

  return (
    <div className="px-3">
      <h1
        className="mt-3"
        style={{ fontFamily: '"Courier Prime", monospace', fontSize: "40px" }}
      >
        Perfil
      </h1>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h2 className="fs-2">Nickname:</h2>
            <ul>
              <li>
                <p className="fs-5 pb-3 ">{user.dataResponse.nickname}</p>
              </li>
            </ul>
            <h3 className=" fs-3">Email:</h3>
            <ul>
              <li>
                <p className="fs-5 ">{user.dataResponse.email}</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-4">
            <h2 className="fs-2">Actualizar los datos de usuario</h2>
            <h4>{successUpdate}</h4>
            <form onSubmit={isValid} className="w-75">
              <div className="mb-3">
                <label htmlFor="nickname" className="form-label">
                  Nickname:
                </label>
                <input
                  type="text"
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="btn btn-light"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#5ba3f1",
                  border: "none",
                }}
              >
                Actualizar datos
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="mt-5">
            <h2 className="fs-2">Eliminar usuario</h2>
            <button
              onClick={() => setDeleteUserState(true)}
              className="btn btn-light mt-1 mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#5ba3f1",
                border: "none",
              }}
            >
              Eliminar usuario
            </button>
            {deleteUserState ? (
              <div>
                <ul>
                  <li>
                    <p className="fs-5 mb-3">
                      Estas seguro de de querer eliminar tu usuario?
                    </p>
                    <button
                      onClick={() => isValidDelete()}
                      className="btn btn-light"
                      style={{
                        fontWeight: "bold",
                        backgroundColor: "#5ba3f1",
                        border: "none",
                      }}
                    >
                      Si estoy segura/o
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
