import React, { useState, useEffect } from "react";
import axios from "axios";
import ExampleList from "../components/ExampleList";
import { Link } from 'react-router-dom'


export default function Main() {
  const [examples, setExamples] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // function to compare example names & sort by alphabetical order
  const compareName = (a, b) => {
    return a.name < b.name
      ? -1
      : 1;
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/examples")
      .then((res) => {
        setExamples(res.data.sort(compareName));
        console.log('New List')
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [loaded]);

  const removeFromDOM = (exampleId) => {
    setExamples(examples.filter((example) => example._id !== exampleId));
  };

  return (
    <div>
      <Link to={`/examples/new`} className='btn btn-sm btn-accent'>Add Example</Link>
      {loaded && (
        <ExampleList examples={examples} removeFromDOM={removeFromDOM} />
      )}
    </div>
  );
}
