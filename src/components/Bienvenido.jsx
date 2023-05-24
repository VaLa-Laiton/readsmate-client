import PropTypes from 'prop-types';

const Bienvenido = ({articles}) => {
  return (
    <>
      <h1>Bienvenido</h1>
      {articles.map((article) => (
        <div key={article.articleId}>
          <h3>{article.title}</h3>
          <a href={article.urlFile} target="_blank" rel="noopener noreferrer">
            Leer articulo
          </a>
        </div>
      ))}
    </>
  );
};

Bienvenido.propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        articleId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        urlFile: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Bienvenido;
