import React, { useState } from 'react';

export default function useTextForm(props) {
  const handleUpclick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoclick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleCltext=()=>{
    let newText=''
    setText(newText)
  }
  
  const [text,setText]=useState('');
  return (
    <>  
    <div>
    <div className="mx-2">
      <label htmlFor="textInput" className="form-label">Text input</label>
      <input type="text" className="form-control"  value={text}onChange={handleOnChange}/>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpclick}>High</button>

    <button className="btn btn-primary mx-1" onClick={handleLoclick}>Low</button>
    <button className="btn btn-primary mx-1" onClick={handleCltext} >Clear Text</button>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.length} and {text.split(" ").length} characters</p>
      <p>read in {0.008*text.split(" ").length} minutes</p>
    </div>
    </div>
    <h2> Preview</h2>
    <p>{text}</p>
    </>
  
  )
}

