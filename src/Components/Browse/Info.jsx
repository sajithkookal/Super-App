import Profile from "../../assets/profileBig.png";
import "./info.css"

const Info = () => {
  const info = JSON.parse(window.localStorage.getItem("userData"));
  const genre = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <div
      style={{
        width: "30vw",
        minHeight: "35vh",
        background: "#5746EA",
        borderRadius: "12px",
        padding: "6px",
        display: "flex",
        gap: "12px",
      }}
    >
      <div>
        <img
          src={Profile}
          style={{
            height: "32vh",
            width: "10vw",
            position: "relative",
            top: "2vh",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: "white", fontSize: "1.3rem", margin: "0" }}>{info.name}</p>
        <p style={{ color: "white", fontSize: "1.3rem", margin: "0" }}>{info.email}</p>
        <p style={{ color: "white", fontSize: "2rem", margin: "0" }}>{info.userName}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

const Chips = ({ color, categories }) => {
  return (

    <div className="userDetailsDiv" style={{ height: "15vh", overflow: "auto", width: "19vw", marginTop: "10px" }}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "100px",
            color: "white",
            border: "none",
            padding: "6px",
            height: "30px",
            flexShrink: 0,
            margin: "8px",
          }}
        >
          {category}{" "}
        </button>
      ))}
    </div>


  );
};

export default Info;