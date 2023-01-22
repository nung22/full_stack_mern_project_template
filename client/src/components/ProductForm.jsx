import React, { useState } from "react";
import axios from "axios";
export default function ProductForm() {
  //import form values & methods via props
  const { 
    initialTitle,
    initialPrice,
    initialDescription,
    onSubmitProp 
  } = props;
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp({ title, price, description });
  };
  // onChange to update title, price, and description

  return (
  <form className="flex flex-col gap-5 mt-4" onSubmit={onSubmitHandler}>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
      onChange={e => setTitle(e.target.value)}/>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <label className="input-group">
        <input type="number" step={0.01} min={0.00} placeholder="0.00" className="input input-bordered w-full max-w-xs"
        onChange={e => setPrice(e.target.value)}/>
        <span>USD</span>
      </label>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Description</span>
      </label> 
      <textarea className="textarea textarea-bordered h-24" placeholder="Type here"
      onChange={e => setDescription(e.target.value)}></textarea>
    </div>
    <div className="flex justify-center">
      <input className="btn btn-primary btn-sm w-24" type="submit" value="Create"/>
    </div>
  </form>
  )
}
