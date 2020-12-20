import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const movies = {
    ScienceFiction: [
      { name: "Arrival", Imdb: "7.9/10" },
      { name: "2001: A Space Odyssey", Imdb: "8.3/10" },
      { name: "Source Code", Imdb: "7.5/10" },
      { name: "Interstellar", Imdb: "8.6/10" },
      { name: "Her", Imdb: "8/10" }
    ],
    Drama: [
      { name: "Pulp Fiction", Imdb: "8.9/10" },
      { name: "The Big Short", Imdb: "7.8/10" },
      { name: "The Wolf of Wall Street", Imdb: "8.2/10" },
      { name: "The Shawshank Redemption", Imdb: "9.3/10" },
      { name: "12 Angry Men", Imdb: "9/10" }
    ],

    Action: [
      { name: "The Departed", Imdb: "8.5/10" },
      { name: "Scarface", Imdb: "8.3/10" },
      { name: "The Revenant", Imdb: "8/10" },
      { name: "Drive", Imdb: "7.8/10" },
      { name: "Mad Max Fury Road", Imdb: "8.1/10" }
    ],
    Comedy: [
      { name: "Borat", Imdb: "7.3/10" },
      { name: "The Scary Movie Saga", Imdb: "7.2/10" },
      { name: "21/22 Jump Street", Imdb: "7.2/0" }
    ],

    Romance: [
      { name: "500 Days of Summer", Imdb: "7.7/10" },
      { name: "The Before Series", Imdb: "8.1/10" },
      { name: "Manchester By the Sea", Imdb: "7.8/10" },
      { name: "La La Land", Imdb: "8/10" },
      { name: "Eternal Sunshine of the Spotless Mind", Imdb: "8.3/10" }
    ],
    Crime: [
      { name: "Seven", Imdb: "8.6/10" },
      { name: "Prisoners", Imdb: "8.1/10" },
      { name: "Godfather", Imdb: "9.2/10" },
      { name: "The Usual Suspects", Imdb: "8.5/10" },
      { name: "The Place Beyond the Pines", Imdb: "7.3/10" },
      { name: "Zodiac", Imdb: "7.7/10" }
    ],
    Thriller: [
      { name: "Parasite", Imdb: "8.6/10" },
      { name: "The Platform", Imdb: "7/10" },
      { name: "A Quiet Place", Imdb: "7.5/10" }
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
