import React , {useState} from 'react'

export default function TextForm(props) {
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclClick = () => {
        let newText = '';
        setText(newText)
    }
    
    const handleonChange = (event) => {
setText(event.target.value)
    }
    const handleCopy = () => {

navigator.clipboard.writeText(text
  +.36);
    }
    const handleExtra = () => {
      let newText = text.split(/[]+/);
      setText(newText.join(" "))
    }
    const [text,setText] = useState('');
  return (
    <div>
     <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control"value={text} onChange = {handleonChange} id="mybox"  rows="8"></textarea>
    
  </div>
 <button className="btn btn-primary mx-4 my-1" onClick={handleupClick}>Convert to uppercase</button>
 <button className="btn btn-primary mx-4 my-1" onClick={handleloClick}>Convert to lowercase</button>
 <button className="btn btn-primary mx-4 my-1"  onClick={handleclClick}>Clear text</button>
 <button className="btn btn-primary mx-4 my-1" onClick={handleCopy}>Copy</button>
 <button className="btn btn-primary" onClick={handleExtra}>Remove space</button>

 <div className="container">
    <h1>Your text summary</h1>
    <p> {text.split(/\s+/).filter((el)=>{return el.length !== 0}).length} word and {text.trim('').length} character</p>
    <p>{0.008* text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}
    </p>
 </div>
    </div>
  )
}
