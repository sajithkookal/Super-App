import { useState, useEffect } from "react";
import CategoryList from "./Categorylist";
import LeftScreen from "./LeftScreen"
import styles from "./Category.module.css";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#148A08",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
   
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
 
 
];
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    let info = JSON.parse(window.localStorage.getItem("userData"));
    if(!info){
      return navigate("/register");
    }
  });
 
  
  
  const handleSignUp = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("genres", JSON.stringify([...categories]));
      navigate("/browse");
    }
  };
    return (
        <div className={styles.body}>
          <div className={styles.left}>
            <p className={styles.heading}>Super app</p>
            <p className={styles.subHeading}>Choose your entertainment category</p>
            <div style={{ marginTop: "10vh" }}>
              <LeftScreen
                categories={categories}
                color={"green"}
                setCategories={setCategories}
              />
              {lengthError ? (
                <p className={styles.error}>Please choose at least 3</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={styles.right}>
            {genres.map((data, idx) => (
              <CategoryList
                data={data}
                idx={idx}
                categories={categories}
                setCategories={setCategories}
              />
            ))}
          </div>
          <button className={styles.signUp} onClick={handleSignUp}>
            Next Page
          </button>
        </div>
      );
    };
    export default Category;    