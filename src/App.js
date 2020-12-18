import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const movies = {
    ScienceFiction: [
      { name: "Movie1", Imdb: "9/10" },
      { name: "Movie2", Imdb: "6/10" },
      { name: "Movie3", Imdb: "5/10" },
      { name: "Movie4", Imdb: "8/10" },
      { name: "Movie5", Imdb: "7/10" }
    ],
    Drama: [
      { name: "Movie6", Imdb: "6/10" },
      { name: "Movie7", Imdb: "7/10" },
      { name: "Movie8", Imdb: "9/10" },
      { name: "Movie9", Imdb: "8/10" },
      { name: "Movie10", Imdb: "9/10" }
    ],
    Action: [
      { name: "Movie11", Imdb: "7/10" },
      { name: "Movie12", Imdb: "6/10" },
      { name: "Movie13", Imdb: "7/10" },
      { name: "Movie14", Imdb: "8/10" },
      { name: "Movie15", Imdb: "9/10" }
    ],
    Comedy: [
      { name: "Movie16", Imdb: "10/10" },
      { name: "Movie17", Imdb: "9/10" },
      { name: "Movie18", Imdb: "9/0" }
    ],

    Romance: [
      { name: "Movie19", Imdb: "10/10" },
      { name: "Movie20", Imdb: "9/10" },
      { name: "Movie21", Imdb: "9/10" },
      { name: "Movie22", Imdb: "8/10" }
    ],
    Thriller: [
      { name: "Movie23", Imdb: "10/10" },
      { name: "Movie24", Imdb: "9/10" },
      { name: "Movie25", Imdb: "9/10" }
    ]
  };

  var genres = Object.keys(movies);

  var [genreClicked, genreSelected] = useState(["ScienceFiction"]);
  var selectedMovie = movies[genreClicked];

  return (
    <div className="App">
      <h1>Want to watch a movie but unable to pick?</h1>
      <h3>Pick one of my Recommendations!</h3>

      <div>
        {genres.map((item) => {
          return (
            <button
              id="btn"
              key={item}
              onClick={() => genreSelected(item)}
              style={{ padding: "0.7rem", margin: "1rem", cursor: "pointer" }}
            >
              {item}
            </button>
          );
        })}
      </div>

      <ul>
        {selectedMovie.map((item, index) => {
          return (
            <li
              id="list"
              type="none"
              key={item.name}
              style={{ margin: "1rem" }}
            >
              {item.name}

              <br></br>
              <small> Imdb Rating: ({item.Imdb})</small>
            </li>
          );
        })}
      </ul>
      <br></br>
    </div>
  );
}
