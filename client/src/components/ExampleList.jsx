import React from 'react';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

export default function ExampleList(props) {
  const { removeFromDOM, examples } = props;

  return(
    <div className="overflow-x-auto">
      <h1 className='text-l font-semibold my-3'>We have quotes by:</h1>
      <table className="table w-96 text-center">
        <thead>
          <tr>
            <th>Example</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
        {examples.map( (example, i) => 
        <tr key={i} className="hover">
          <th>
            <Link to={`/examples/${example._id}`} className="link link-hover">{example.title}</Link>
          </th>
          <td className='flex justify-center gap-3'>
            <Link to={`/examples/${example._id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
            <DeleteButton exampleId={example._id} successCallback={() => removeFromDOM(example._id)}/>
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}