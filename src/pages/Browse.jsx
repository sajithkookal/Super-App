import Info from "../Components/Browse/Info";
import Weather from "../Components/Browse/Weather";
import Notes from "../Components/Browse/Notes";
import News from "../Components/Browse/News";
import Timer from "../Components/Browse/Timer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const navigate = useNavigate();
  
  useEffect(()=>{
    let info = JSON.parse(window.localStorage.getItem("userData"));
    if(!info){
      navigate('/register');
      return;
    }
  },[]);
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "3vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <Info />
          <Weather />
          <Timer />
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <News />
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "-1vh",
          right: "3vw",
          background: "green",
          border: "none",
          color: "white",
          padding: "6px",
          borderRadius: "12px",
          width:"100px"
        }}
        onClick={handleClick}
      >
        Browse
      </button>
    </div>
  );
};

export default Browse;