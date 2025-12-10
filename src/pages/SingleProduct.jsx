import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        setProduct(resp.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/products");
        }
      });
  }, [id]);

  return (
    <>
      {product !== null && (
        <div>
            <img className="card-img" src={product.image} alt={product.title} />

            <h5 className="py-10">{product.title}</h5>

            <span>Price: {product.price}</span>

        </div>
      )}
    </>
  );
}