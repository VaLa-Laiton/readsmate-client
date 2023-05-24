//  Consult all articles
export const getArticles = async () => {
  try {
    const response = await fetch("https://readsmate-restapi-production.up.railway.app/api/article");
    const data = await response.json();
    const dataString = JSON.stringify(data);
    localStorage.setItem("getArticles", dataString);
  } catch (error) {
    console.log(error);
  }
};

// Check if a specific article
export const getArticleById = null;

// Create article
export const createArticle = async ({ token, dataArticle }) => {
  const url = "https://readsmate-restapi-production.up.railway.app/api/article";

  const data = dataArticle;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    console.log(response.status)
    if (response.status === 201) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

// Update article
export const updateArticle = null;

// Delete article
export const deleteArticle = null;
