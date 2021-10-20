import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upprcase","success");
  };
  const handleLoClick = () => {
    console.log("lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };
  const handleClearClick = () => {
    console.log("lowercase was Clicked" + text);
    let newText = '';
    setText(newText);
  }; 
  const handleCapitalizedClick = () => {
    console.log("capitalized was Clicked" + text);
    let newText = text.toCapitalizedCase();
    setText(newText);
  }; 
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container col-md-8" style={{color:props.mode=== 'dark'? 'white': 'black'}}>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} style={{backgroundColor:props.mode=== 'dark'? 'grey': 'white', color:props.mode=== 'dark'? 'white': 'black'}}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear text</button>
      {/* <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizedClick}> Capitalized text</button> */}
    </div>
    <div className="container my-3 col-md-8"  style={{color:props.mode=== 'dark'? 'white': 'black'}}>
    <h2>Ur Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Read </p>
    
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
  
}
