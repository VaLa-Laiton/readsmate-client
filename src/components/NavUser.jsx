// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { ApiContext } from "../context/ApiContextProvider";
import { logout } from "../functions/logout";
import logo from "../assets/nameBrand.png";

const NavUser = () => {
  // const { user } = useContext(ApiContext);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#FFFFFF00" }}
      >
        <div className="container-fluid">
          <Link to={"/home"} className="navbar-brand">
            <img src={logo} alt="" height={"30px"} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#5ba3f1", borderColor: "#5ba3f1" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/home"}
                  className="nav-link fw-bold"
                  style={{ color: "#8fbff3" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/publish"}
                  className="nav-link fw-bold"
                  style={{ color: "#8fbff3" }}
                >
                  Publicar un articulo
                </Link>
              </li>
              {/* <li>
        <Link to={`/dashboard/${user.dataResponse.userId}`}>Panel de control</Link>
      </li> */}
              <li className="nav-item me-2">
                <Link
                  to={"/profile"}
                  className="nav-link fw-bold"
                  style={{ color: "#8fbff3" }}
                >
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn btn-light fw-bold"
                  style={{ backgroundColor: "#5ba3f1", border: "none" }}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavUser;
