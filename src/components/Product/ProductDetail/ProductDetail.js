import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // import file CSS
import GoBack from "../../GoBack";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => setData(null));
  }, []);

  if (!data) return <p>Loading product details...</p>;

  const discountedPrice = (
    data.price * (1 - data.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="product-detail-container">
      <h1 className="product-title">{data.title}</h1>
      <GoBack/>
      <img
        className="product-image"
        src={data.thumbnail}
        alt={data.title}
      />
      <div className="price-section">
        <span className="discounted-price">${discountedPrice}</span>
        {data.discountPercentage > 0 && (
          <>
            <span className="original-price">${data.price}</span>
            <span className="discount-percent">-{data.discountPercentage}%</span>
          </>
        )}
      </div>

      <p className="product-description">{data.description}</p>

      <div className="product-info">
        <div><strong>ID:</strong> {data.id}</div>
        <div><strong>Rating:</strong> {data.rating} / 5</div>
        <div><strong>Stock:</strong> {data.stock}</div>
        <div><strong>Brand:</strong> {data.brand}</div>
        <div><strong>Category:</strong> {data.category}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
