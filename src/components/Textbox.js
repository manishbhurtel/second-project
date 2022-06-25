import React from "react";
import { useState } from "react";
import "./Textbox.css";
import "./Toggle.css";

export default function Textbox(props) {
  const[darkBody, setdarkBody] = useState({
    backgroundColor: 'rgb(243, 230, 255)',
    color: 'black'
  })
  const[darkButton, setdarkButton] = useState({
    backgroundColor: 'rgb(163, 64, 255)',
    color: 'white'
  })
  const[darkText, setdarkText] = useState("Enable Dark Mode:")
  const toggleButtonClicked = ()=>{
    if(darkBody.color == 'black'){
      setdarkBody({
        backgroundColor: 'black',
        color: 'white'
      })
      setdarkButton({
        backgroundColor: 'white',
        color: 'black'
      })
      setdarkText("Enable Light Mode: ")
    }
    else{
      setdarkBody({
        backgroundColor: 'rgb(243, 230, 255)',
        color: 'black'
      })
      setdarkButton({
        backgroundColor: 'rgb(163, 64, 255)',
        color: 'white'
      })
      setdarkText("Enable Dark Mode: ")
    }
  }
  
  const [text, settext] = useState("");
  const state_changed = (e) => {
    settext(e.target.value);
  };
  const state_clicked1 = () => {
    let new_text = text.toUpperCase();
    settext(new_text);
  };
  const state_clicked2 = () => {
    let new_text = text.toLowerCase();
    settext(new_text);
  };
  const state_clicked3 = () => {
    let new_text = "";
    settext(new_text);
  };
  return (
    <>
      <div className="main" style={darkBody}>
        <div className="header">
          <h2>Enter any text below!!!</h2>
        </div>

        <div className="textarea">
          <textarea value={text} onChange={state_changed}></textarea>
        </div>

        <div className="buttons">
          <button className="btn btn-1" onClick={state_clicked1} style={darkButton}>
            UpperCase
          </button>
          <button className="btn btn-2" onClick={state_clicked2} style={darkButton}>
            LowerCase
          </button>
          <button className="btn btn-3" onClick={state_clicked3} style={darkButton}>
            Clear Text
          </button>
        </div>

        <div className="toggle_responsive">
          <p className="toggle_para">{darkText}</p>
          <input type="checkbox" className="checkbox" onClick={toggleButtonClicked}/>
        </div>

        <div className="wac">
          <p className="w_p">
            {text.split(" ").length} Words and {text.length} Characters is
            there.
          </p>
        </div>

        <div className="minutes">
          <p className="minutes_para">
            {0.18 * text.split(" ").length} second time is required to read the
            above text.
          </p>
        </div>

        <div className="whole_preview">
          <div className="preview_header">
            <h2>Preview: </h2>
          </div>
          <div className="preview">
            <b>
              <p className="preview_para">{text}</p>
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

