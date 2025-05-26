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
      <div className="container">
        <div className="product__container">
          {data.map((item) => (
          <div className="product__item" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <div className="product__main">
                <span className = "product__discount" >
                  -{item.discountPercentage}%
                </span>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <span className = "product__price">
                  ${item.price}
                </span>
              </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductAll;
