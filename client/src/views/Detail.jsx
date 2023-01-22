import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function Detail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(() => {
        navigate('/')
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.error(err));
  }, [id]);

  const displayPrice = (price) => {
    return price !== undefined
      ? price.toFixed(2)
      : '';
  }

  return(
    <div className='mt-24 text-start text-xl'>
      <p className='text-2xl font-semibold mb-5'>{product.title}</p>
      <p><span className='underline'>Price</span>: ${displayPrice(product.price)}</p>
      <p className='my-2'><span className='underline'>Description</span>: {product.description}</p>
      <div className='flex gap-4  mt-5'>
        <Link to={`/products/${id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
        <button className="btn btn-outline btn-error btn-sm"onClick={e => deleteProduct(product._id)}>Delete</button>
      </div>
    </div>
  )
}