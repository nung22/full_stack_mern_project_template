import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ExampleForm from "../components/ExampleForm";

export default function Update() {
  const { id } = useParams();
  const [example, setExample] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/examples/${id}`)
      .then((res) => {
        setExample(res.data);
        setLoaded(true);
      });
    }, [id]);
    
    const updateExample = example => {
      axios
      .put(`http://localhost:8000/api/examples/${id}`, example)
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
      {loaded && (
        <ExampleForm
          onSubmitProp={updateExample}
          initialName={example.name}
          formName="Edit this example"
        />
      )}
    </div>
  );
};