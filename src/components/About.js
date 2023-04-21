import React, { useState } from 'react'

export default function About() {
  const[mystyle,setmystyle] = useState ( {
    color:'black',
    backgroundColor:'white'
})

const [btntext,setbtntext] = useState('Enable dark mode')
let togglestyle = () =>{
    if(mystyle.color == 'white'){
        setmystyle({
            color:'black',
            backgroundColor:'white'
        })
        setbtntext('Enable ligth mode')
    }
    else{
        setmystyle({
            color:'white',
            backgroundColor:'black'
        })
        setbtntext('Enable dark mode')
    }
}
    
  return (
    
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className='container my-3'>

    </div>
    </div>
  )
}
