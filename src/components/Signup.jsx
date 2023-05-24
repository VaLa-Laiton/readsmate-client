import { useState } from "react";
import { validateSignup } from "../functions/validateSignup";
import { postUserSignup } from "../controllers/users";
import { useNavigate } from "react-router-dom";
import { Requisitos } from "./Requisitos";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNotValid, setIsNotValid] = useState("");

  const navigate = useNavigate();

  const redirect = () => {
    setTimeout(() => {
      navigate("/home");
      window.location.reload();
    }, 3000);
  };

  const handleSubmit = async () => {
    await postUserSignup({ nickname, email, password });

    setNickname("");
    setEmail("");
    setPassword("");

    setIsNotValid(`Felicidades, el registro ha sido exitoso.`);

    redirect();
  };

  const isValid = (e) => {
    e.preventDefault();

    if (validateSignup({ nickname, email, password })) {
      handleSubmit();
    } else {
      setIsNotValid(
        "Lo siento, pero no cumples los requisitos en alguno de los campos de registro."
      );
    }
  };

  return (
    <div className="px-3">
      <div
        className="mt-3 mb-4"
        style={{ fontFamily: '"Courier Prime", monospace' }}
      >
        <h1 style={{ fontSize: "40px" }}>Registro</h1>
        <p className="fs-5">{isNotValid}</p>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={isValid} className="w-75">
              <div className="mb-3">
                <label htmlFor="nickname" className="form-label fw-bold fs-5">
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
                <label htmlFor="email" className="form-label fw-bold fs-5">
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
                <label htmlFor="password" className="form-label fw-bold fs-5">
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
                className="btn btn-light mb-4"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#5ba3f1",
                  border: "none",
                }}
              >
                Registrarse
              </button>
            </form>
            <p className="w-75">
              ¡Importante! Recuerda que la contraseña que has establecido no se
              puede recuperar. Asegúrate de recordarla correctamente y
              mantenerla en un lugar seguro. En caso de olvidarla, no podremos
              recuperarla ni proporcionarte acceso a tu cuenta. Es fundamental
              que elijas una contraseña segura y fácil de recordar para evitar
              cualquier inconveniente. ¡Gracias por tu comprensión y
              colaboración!
            </p>
          </div>
          <div className="col-lg-6">
            <Requisitos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
