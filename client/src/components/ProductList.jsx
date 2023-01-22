import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function ProductList(props) {
  const { removeFromDOM } = props;

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then(res => {
        removeFromDOM(productId)
      })
      .catch(err => console.error(err));
  }

  return(
    <div className='text-center'>
      <h1 className='text-4xl font-semibold mb-4'>All Products:</h1>
      <ul className='flex flex-col gap-1 text-3xl'>
        {props.products.map( (product, i) => 
          <li key={i} className="cursor-pointer label w-fit flex gap-3 list-decimal">
            <Link to={`/products/${product._id}`} className="link link-hover">- {product.title}</Link>
            {/* Delete Button */}
            <button className="btn btn-circle btn-outline btn-error btn-xs"
            onClick={e => deleteProduct(product._id)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </li>
          )}
      </ul>
    </div>
  )
}