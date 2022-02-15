import React , {useState} from 'react'


  //console.log(7);

export default function TextForm(props) {

  const handleUpClick1 =()=>
  {
   // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleUpClick2 =()=>
  {
    let newText=text.toLowerCase();
    setText(newText);
  }
  const  handleOnClear =()=>
  {
    let newText='';
    setText(newText);
  }
  const handleOnChange =(event)=>
  {
    //console.log("On change");
    setText(event.target.value);
  }
// Declare a new state variable, which we'll call "count"
const [text, setText] = useState(''); //('Enter text here');
  //setText("üqheiwj");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
        {/*<label for="myBox" className="form-label">Example textarea</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick1}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick2}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClear}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008*text.split(' ').length} Minutes to read</p>
      <h2> Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
