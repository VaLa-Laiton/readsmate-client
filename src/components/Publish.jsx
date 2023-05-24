import { useContext } from "react";
import { ApiContext } from "../context/ApiContextProvider";
import { useEffect, useState } from "react";
import { validateURL } from "../functions/validateURL";
import { createArticle } from "../controllers/articles";
import { isUser, redirect } from "../functions/isUser";
import { RequisitosArticle } from "./Requisitos";

const Publish = () => {
  const { user } = useContext(ApiContext);

  const dataPost = {};

  const [title, setTitle] = useState("");
  const [urlFile, setUrlFile] = useState("");
  const [successPost, setSuccessPost] = useState("");

  const isValid = async (e) => {
    e.preventDefault();

    if (title.length >= 5 && validateURL(urlFile)) {
      console.log("YES1");
      (dataPost.title = title), (dataPost.urlFile = urlFile);

      if (
        (await createArticle({
          token: user.dataResponse.token,
          dataArticle: dataPost,
        })) === true
      ) {
        console.log("YES2");
        setSuccessPost("Felicidades, se publico tu articulo exitosamente.");
        setTimeout(() => {
          window.location.reload();
          window.location.href = "/home";
        }, 3000);
      }
    } else {
      setSuccessPost(
        "Lo siento, pero no cumples los requisitos en alguno de los campos."
      );
    }
  };

  useEffect(() => {
    document.title = "Publicar articulo - RADSMATE";
    if (isUser() === false) {
      redirect();
    }
  });

  return (
    <div className="px-3">
      <div
        className="mt-3 mb-4"
        style={{ fontFamily: '"Courier Prime", monospace' }}
      >
        <h1 style={{ fontSize: "40px" }}>Publicar articulo</h1>
        <p className="fs-5">{successPost}</p>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={isValid} className="w-75">
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-bold fs-5">
                  Titulo del articulo:
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="urlFile" className="form-label fw-bold fs-5">
                  Url del articulo:
                </label>
                <input
                  type="text"
                  id="urlFile"
                  value={urlFile}
                  onChange={(e) => setUrlFile(e.target.value)}
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
                Publicar articulo
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <RequisitosArticle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
