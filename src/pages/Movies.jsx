import List from "../Components/Movies/List";
import Profile from "../assets/profileSmall.png";
import styles from "../Components/Movies/List.module.css";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const movies = JSON.parse(window.localStorage.getItem("genres"));
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/browse");
      };
    return (

        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
                background: "black",
                overflowX: "hidden",
                maxHeight: "100vh",
            }}
        >
            <img
                src={Profile}
                style={{
                    position: "absolute",
                    top: "2vh",
                    right: "3vw",
                    height: "60px",
                    width: "60px",
                }} onClick={ handleClick}
            />
            <p
                style={{
                    color: "green",
                    fontSize: "3rem",
                    margin: "1vw",
                }}
                className={styles.header}
            >
                Super app
            </p>
            <p style={{ color: "white", fontSize: "1.5rem", margin: "2vw", marginLeft: "4vw" }}>
                Entertainment according to your choice
            </p>
            {movies.map((movie) => (
                <List genre={movie} />
            ))}
        </div>

    );
};

export default Movies;