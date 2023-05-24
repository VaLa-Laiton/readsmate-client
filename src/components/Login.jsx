import { useState, useEffect } from "react";
import { validateLogin } from "../functions/validateLogin";
import { postUserLogin } from "../controllers/users";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNotValid, setIsNotValid] = useState("");

  const navigate = useNavigate();

  const redirect = () => {
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 3000);
  };

  const handleSubmit = async () => {
    await postUserLogin({ email, password });

    setEmail("");
    setPassword("");

    setIsNotValid(`Felicidades, has iniciado sesión de manera exitosa.`);

    redirect();
  };

  const isValid = (e) => {
    e.preventDefault();

    if (validateLogin({ email, password })) {
      handleSubmit();
    } else {
      setIsNotValid(
        "Lo siento, pero no cumples los requisitos en alguno de los campos de inicio de sesión."
      );
    }
  };

  useEffect(() => {
    document.title = "Iniciar sesión - RADSMATE";
  }, []);

  return (
    <div className="px-3">
      <div
        className="mt-3 mb-4"
        style={{ fontFamily: '"Courier Prime", monospace' }}
      >
        <h1 style={{ fontSize: "40px" }}>Iniciar sesión</h1>
        <p className="fs-5">{isNotValid}</p>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={isValid} className="w-75">
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
                Iniciar Sesion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
