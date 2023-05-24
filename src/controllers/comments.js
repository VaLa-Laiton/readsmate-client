//  Consult all comments
export const getComments = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/comment");
      const data = await response.json();
      const dataString = JSON.stringify(data);
      localStorage.setItem("getComments", dataString);
    } catch (error) {
      console.log(error);
    }
  };

// Consult a specific comment
export const getCommentById = null;

// Create comment
export const createComment = null;

// Update comment
export const updateComment = null;

// Delete comment
export const deleteComment = null;