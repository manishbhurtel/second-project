import React from 'react'
import { useState } from 'react'
import './Textbox.css'

function Textbox(props) {
  const [text, settext] = useState("")
  const state_changed = (e) => {
    settext(e.target.value)
  }
  const state_clicked1 = () => {
    let new_text = text.toUpperCase();
    settext(new_text);
  }
  const state_clicked2 = () => {
    let new_text = text.toLowerCase();
    settext(new_text);
  }
  const state_clicked3 = () => {
    let new_text = "";
    settext(new_text);
  }
  return (
    <>
      <div className="main">

        <div className="header">
          <h2>Enter any text below!!!</h2>
        </div>

        <div className="textarea">
          <textarea value={text} onChange={state_changed}></textarea>
        </div>

        <div className="buttons">
          <button className="btn btn-1" onClick={state_clicked1}>UpperCase</button>
          <button className="btn btn-2" onClick={state_clicked2}>LowerCase</button>
          <button className="btn btn-3" onClick={state_clicked3}>Clear Text</button>
        </div>

        <div className="wac">
          <p className="w_p">{text.split(" ").length} Words and {text.length} Characters is there.</p>
        </div>

        <div className="minutes">
          <p className='minutes_para'>{0.18 * text.split(" ").length} second time is required to read the above text.</p>
        </div>

      
          <div className="preview">
            <h2>Preview: </h2>
            <b><p className="preview_para">{text}</p></b>
          </div>
        

      </div>
    </>
  )
}

export default Textbox