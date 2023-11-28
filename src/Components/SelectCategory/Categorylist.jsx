
import { useState, useEffect } from "react";

const CategoryList = ({ data, idx, setCategories, categories }) => {
    const [selected, setSelected] = useState();
    const handleClick = (e) => {
      if (categories.includes(data.id)) {
        const index = categories.indexOf(data.id);
        categories.splice(index, 1);
        setCategories([...categories]);
      } else {
        setCategories([...categories, data.id]);
      }
      setSelected(!selected);
    };
    useEffect(() => {
      setSelected(categories.includes(data.id) == true);
    });
    return (
      <div
        data={data}
        onClick={(e) => handleClick(e)}
        key={idx}
        style={{
          background: data["color"],
          color: "white",
          padding: "8px",
          borderRadius: "12px",
          border: `${selected ? "4px solid green" : "4px solid black"}`,
        
        }}
      >
        <p style={{ marginBottom: "5px",marginTop:"0",marginLeft:"5px", fontSize: "18px" }}>{data.id}</p>
        {data.image}
      </div>
    );
  };

  export default CategoryList;