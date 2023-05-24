import "../App.css";
import { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContextProvider";

const Home = () => {
  const { articles } = useContext(ApiContext);

  useEffect(() => {
    document.title = "Home - RADSMATE";
  }, []);
  return (
    <div className="px-3">
      {articles ? (
        <div>
          <div className="container mt-3 mb-5">
            <div className="row ">
              <div
                className="col-sm-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div className="mb-3">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/book1.png?alt=media&token=d52ad908-25a8-40bd-b75b-e210e140e6d3"
                    alt=""
                    width={"30%"}
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/book2.png?alt=media&token=882e2057-2462-491f-baa4-e2d95fd8384b"
                    alt=""
                    width={"30%"}
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/book3.png?alt=media&token=ee911069-139b-47c7-8e61-21e3001fd9d1"
                    alt=""
                    width={"30%"}
                  />
                </div>
                <h1
                  style={{
                    fontFamily: '"Courier Prime", monospace',
                    fontSize: "40px",
                  }}
                  className="mb-3"
                >
                  Bienvenida/o
                </h1>
                <p
                  className="fs-5"
                  style={{
                    width: "85%",
                    fontFamily: '"Courier Prime", monospace',
                  }}
                >
                  Descubre artículos únicos creados por usuarios como tú.{" "}
                  {<br />}
                  ¡Sumérgete en el conocimiento compartido y sé parte de nuestra
                  vibrante comunidad!
                </p>
              </div>
              <div
                className="col-sm-6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/inspirationImg.png?alt=media&token=75520be3-e06b-4378-ac6d-2394aa7637ae"
                  alt=""
                  width={"75%"}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/book5.png?alt=media&token=19b2e276-0b5e-4186-9a08-8fcafd754f61"
              alt=""
              width={"20%"}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/book4.png?alt=media&token=c2a4a402-d4b4-45f7-9f2a-99fc3e68f44d"
              alt=""
              width={"20%"}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/readsmate-markdown-storage.appspot.com/o/book6.png?alt=media&token=ec523ff5-8133-4d87-a9d6-c5ea1ad30261"
              alt=""
              width={"20%"}
            />
          </div>
          <p className="w-75 mx-auto mt-5">
            ¡Te invito a leer un artículo especial (
            {
              <a
                href="https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Que es READSMATE
              </a>
            }
            ), donde encontrarás todo lo que necesitas saber sobre esta web
            única! Aprende cómo publicar tus propios artículos y descubre
            emocionantes actualizaciones y futuras implementaciones planeadas
            especialmente para ti. ¡Sumérgete en el conocimiento compartido y
            desata todo tu potencial! Con mucho ❤️ {<a
                href="https://www.linkedin.com/in/angel-david-vargas-laiton-6b1a5018b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angel David
              </a>}.{" "}
          </p>
          <div className="pt-5 pb-5">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {articles.map((article) => (
                <div
                  key={article.articleId}
                  className="card mx-3 mb-3 bg-transparent"
                  style={{ width: "350px", height: "200px" }}
                >
                  <div
                    className="card-body bg-transparent"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "5px",
                      border: "2px solid #5ba3f1",
                    }}
                  >
                    <h5 className="card-title">{article.title}</h5>
                    <a
                      href={article.urlFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light"
                      style={{
                        fontWeight: "bold",
                        backgroundColor: "#5ba3f1",
                        border: "none",
                      }}
                    >
                      Leer articulo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="position-relative" style={{ height: "75vh" }}>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="btn btn-light fw-bold position-absolute top-50 start-50 translate-middle"
            style={{ backgroundColor: "#5ba3f1", border: "none" }}
          >
            Cargar contenido...
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
