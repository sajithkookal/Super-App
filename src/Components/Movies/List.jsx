import { useEffect, useState } from "react";
import styles from "./List.module.css";
const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <p className={styles.heading} >
        {genre}
      </p>
      <div style={{ display: "flex", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                src={movie?.primaryImage?.url}
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "18vh",
                  borderRadius: "9px",
                  marginTop:"0"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;