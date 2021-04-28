import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import NasaDay from "./NasaDay";



function App(props) {
const [data,setData] = useState([])
const [isOn,setOn] = useState('false')





useEffect(() => {
  if(isOn === 'true') {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=dQQ7bW4jrNnfGfLBeXHb2dUNYqhmItgAwYwTPUkv`)
    .then((response) => {
      setData(response.data)
    }) } {}
  } , [isOn]);





function HandleClick ()  {
  const navDisplay = document.querySelector('.BTN')
  navDisplay.classList.toggle('displayOn')
  setOn('true')
  setData([])
}


function HandleClicker ()  {
  const navDisplay = document.querySelector('.NasaDay')
  const closeBTN = document.querySelector('.BTN')
  navDisplay.classList.toggle('displayOff')
  closeBTN.classList.toggle('displayOff')
  const thanks = document.querySelector('.thanks')
  thanks.classList.toggle('displayOn')
  setOn('false')
}

  return (
    <div className="App">
      <div className="nav"><h1>How awesome is NASA?</h1></div>
      <button onClick = {HandleClick}>Let's See</button>
      <NasaDay data={data} /> 
      <button className="BTN" onClick = {HandleClicker}>Close</button>
      <div className="thanks"><h1>Thank you for supporting NASA!</h1></div>
    </div>
  );
}

export default App;
