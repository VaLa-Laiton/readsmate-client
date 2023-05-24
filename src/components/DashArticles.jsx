import { useContext /* useParams */ } from "react";
import { ApiContext } from "../context/ApiContextProvider";

const DashArticles = () => {
  //   const { userId } = useParams();
  const { articles } = useContext(ApiContext);

  return (
    <>
      <h2>Estos son tus articulos</h2>
      {articles
        .filter(
          (article) =>
            article.title === "Que es ReadsMate" ||
            article.title === "El poder de la amistad"
        )
        .map((article) => (
          <div key={article.articleId}>
            <h3>{article.title}</h3>
            <a href={article.urlFile} target="_blank" rel="noopener noreferrer">
              Leer articulo
            </a>
            <br />
            <button onClick={() => console.log(article.articleId)}>Editar este articulo</button>
            <div></div>
          </div>
        ))}
    </>
  );
};

export default DashArticles;
