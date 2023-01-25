
import { Link } from 'react-router-dom'


export default function Error() {

  return (
    <div className='text-center'>
      <h1 className='font-semibold mb-5'>We're sorry, but we could not find the example you are looking for.<br/>
      Would you like to add this example to our database?</h1>
      <Link to={`/examples/new`} className='link link-info'>Add Example</Link>
    </div>
  );
}

