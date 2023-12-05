import { useState } from "react";
import Edit from "../../assets/edit.png";
import pen from "../../assets/pen.png";
import "./Notes.css"

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  // console.log(text)
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "55vh",
        width: "29vw",
        position: "relative",
        borderRadius: "12px",
        padding: "10px",
      }}
    >
      <p style={{ color: "black", fontSize: "1.6rem",fontWeight:"500" }}>All notes</p>
      <textarea
        style={{
          width: "28vw",
          height: "40vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
    
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
   
    </div>
  );
};

export default Notes;