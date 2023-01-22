import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

export default function Update(props) {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      });
  }, []);

  const updateProduct = product => {
    axios
      .put(`http://localhost:8000/api/products/${id}`, product)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    navigate('/')
  };

  return (
    <div>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
  );
};