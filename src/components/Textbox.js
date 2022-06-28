import React from "react";
import { useState } from "react";
import "./Textbox.css";
import "./Toggle.css";
import "./Themes.css"
import img1 from "../images/blueMode.png"
import img2 from "../images/redMode.png"
import img3 from "../images/yellowMode.png"

export default function Textbox(props) {
  
  const [darkBody, setdarkBody] = useState({
    backgroundColor: 'rgb(243, 230, 255)',
    color: 'black'
  })
  const [darkButton, setdarkButton] = useState({
    backgroundColor: 'rgb(163, 64, 255)',
    color: 'white'
  })



  //Themes need to be debugged as this code is not as efficient as it should have been.
  //Code for theme section i.e. 3 color buttons, starts from here
  const blueThemeClicked = () => {
    if (darkBody.color == 'black' || darkBody.backgroundColor == 'yellow' || darkBody.backgroundColor == 'red'){
      setdarkBody({
        backgroundColor: 'rgb(93, 93, 255)',
        color: 'white'
      })
      setdarkButton({
        backgroundColor: 'white',
        color: 'black'
      })
    }
    else {
      setdarkBody({
        backgroundColor: 'rgb(243, 230, 255)',
        color: 'black'
      })
      setdarkButton({
        backgroundColor: 'rgb(163, 64, 255)',
        color: 'white'
      })
    }
  }
  const redThemeClicked = () => {
    if (darkBody.color == 'black') {
      setdarkBody({
        backgroundColor: 'rgb(255, 96, 96)',
        color: 'white'
      })
    }
    else {
      setdarkBody({
        backgroundColor: 'rgb(243, 230, 255)',
        color: 'black'
      })
    }
  }
  const yellowThemeClicked = () => {
    if (darkBody.color == 'black') {
      setdarkBody({
        backgroundColor: 'rgb(255, 255, 132)',
        color: 'black'
      })
      
    }
    else {
      setdarkBody({
        backgroundColor: 'rgb(243, 230, 255)',
        color: 'black'
      })
    }
  }
  //Code for theme section ends here




  //Code for the toggle button to change page theme to black starts from here
  const [darkText, setdarkText] = useState("Enable Dark Mode:")
  const [darkThemeBorder, setdarkThemeBorder] = useState({
    border: '2px solid black'
  })
  const toggleButtonClicked = () => {
    if (darkBody.color == 'black') {
      setdarkBody({
        backgroundColor: 'black',
        color: 'white'
      })
      setdarkButton({
        backgroundColor: 'white',
        color: 'black'
      })
      setdarkText("Enable Light Mode: ")
      setdarkThemeBorder({
        border: '2px solid white'
      })
    }
    else {
      setdarkBody({
        backgroundColor: 'rgb(243, 230, 255)',
        color: 'black'
      })
      setdarkButton({
        backgroundColor: 'rgb(163, 64, 255)',
        color: 'white'
      })
      setdarkText("Enable Dark Mode: ")
      setdarkThemeBorder({
        border: '2px solid black'
      })
    }
  }
  //Toggle code ends from here





  //Code for the textarea, buttons starts from here
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
  //Code for the textarea, buttons ends from here


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
          <input type="checkbox" className="checkbox" onClick={toggleButtonClicked} />
        </div>

        <div className="customThemes">
          <p className="themes_para">Enable Custom Themes: </p>
          <div className="images_Themes" style={darkThemeBorder}>
            <img src={img1} alt="Blue Color" class="img" onClick={blueThemeClicked} />
            <img src={img2} alt="Red Color" class="img" onClick={redThemeClicked} />
            <img src={img3} alt="Yellow Color" class="img" onClick={yellowThemeClicked} />
          </div>
        </div>

        <div className="wac">
          <p className="w_p">
            {text.split(" ").length} Words and {text.length} Characters is
            there.
          </p>
        </div>

        <div className="minutes">
          <p className="minutes_para">
            {0.24 * text.split(" ").length} second time is required to read the
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

