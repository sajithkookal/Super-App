import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
 
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&domains=vercel.com&apiKey=572f4d2dc96e42519d4c8861c0534d88"
      )
        .then(async (data) => await data.json())
        .then((data) => setNews(data.articles[0]));
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  });
  return (
    <div
      style={{
        width: "25vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",      
      }}
    >
    
      <img
        src={news.urlToImage}
        style={{ height: "60vh", borderRadius: "12px", width: "30vw"}}
      />
      <div
        style={{
          height: "23vh",
          borderRadius: "12px",
          width: "28vw",
          background: "white",
          fontSize: "1rem",
          padding: "16px",
          overflow: "auto"
        }}
      >
        {news.description}
      </div>
      <div
        style={{
          position: "absolute",
          width: "30vw",
          height: "auto",
          background: "rgba(0, 0, 0, 0.74)",
          bottom: "29vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
          {news.title}
        </p>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {date}
        </span>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default News;
