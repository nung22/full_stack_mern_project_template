import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { exampleId, successCallback } = props;
    
    const deleteExample = e => {
        axios.delete(`http://localhost:8000/api/examples/${exampleId}`)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
      <button className="btn btn-outline btn-error btn-sm"onClick={e => deleteExample(exampleId)}>
        Delete
      </button>
    )
}

