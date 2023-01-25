import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ExampleForm from "../components/ExampleForm";

export default function Create() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]); 

  const createExample = example => {
    axios
      .post(`http://localhost:8000/api/examples/new`, example)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div>
      {errors.map((err, index) => 
      <p className="text-white bg-red-500 px-3 py-1 rounded-lg mb-2 text-xs" key={index}>{err}</p>
      )}
      <ExampleForm onSubmitProp={createExample} initialName="" formName="Add a new example"/>
    </div>
  );
};