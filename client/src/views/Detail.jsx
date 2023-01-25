import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

export default function Detail() {
  const [example, setExample] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/examples/${id}`)
    .then(res => setExample(res.data))
    .catch(err => console.error(err));
  }, [id]);

  const displayPrice = (price) => {
    return price !== undefined
      ? price.toFixed(2)
      : '';
  }

  return(
    <div className='mt-24 text-start text-xl'>
      <p className='text-2xl font-semibold mb-5'>{example.title}</p>
      <p><span className='underline'>Price</span>: ${displayPrice(example.price)}</p>
      <p className='my-2'><span className='underline'>Description</span>: {example.description}</p>
      <div className='flex gap-4  mt-5'>
        <Link to={`/examples/${id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
        <DeleteButton exampleId={example._id} successCallback={() => navigate('/')}/>
      </div>
    </div>
  )
}