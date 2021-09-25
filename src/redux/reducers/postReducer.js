import { act } from "react-dom/test-utils";

const initialState = {
  posts: [
    {
      id: "1",
      img: "https://walter.trakt.tv/images/movies/000/036/131/fanarts/thumb/b70aa0bd22.jpg.webp",
      likes: 33,
      comments: 20,
    },

    {
      id: "2",
      img: "https://walter.trakt.tv/images/movies/000/102/156/fanarts/thumb/6ad37f55dc.jpg.webp",
      likes: 33,
      comments: 20,
    },

    {
      id: "3",
      img: "https://walter.trakt.tv/images/shows/000/139/960/fanarts/thumb/90734c88db.jpg.webp",
      likes: 33,
      comments: 20,
    },

    {
      id: "4",
      img: "https://walter.trakt.tv/images/episodes/004/878/263/screenshots/thumb/4d1102529a.jpg.webp",
      likes: 33,
      comments: 20,
    },

    {
      id: "5",
      img: "https://walter.trakt.tv/images/movies/000/130/970/fanarts/thumb/0882004939.jpg.webp",
      likes: 33,
      comments: 20,
    },
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
      case "CREATE_POST":
          console.log("created post", action.post)
  }
  return state;
};

export default postReducer;
