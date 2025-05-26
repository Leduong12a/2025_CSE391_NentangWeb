import "./ProductAll.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductAll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);

  return (
    <div className="product">
      {data.map((item) => (
        <div className="product__item" key={item.id}>
          <Link to={`/products/${item.id}`}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductAll;
