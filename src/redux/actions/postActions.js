export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db

    const firestore = getFirestore();
    firestore.collection("posts").add({
        ...post,
        img: "Image",
        likes: 22,
        comments: 32,
        createdAt: new Date()
    }).then(() => {
        dispatch({
            type: "CREATE_POST",
            post,
          });
    }).catch((error) => {
        console.log(error);
    })

   
  };
};
