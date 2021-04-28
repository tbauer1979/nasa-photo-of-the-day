import React from "react";
import ReactPlayer from "react-player"

function NasaDay(props) {

const {title,date,explanation,url} = props


  return (
    <div className="NasaDay">
        <div><h1>{title}</h1></div>
        <div><h3>{date}</h3></div>
        <div><p>{explanation}</p></div>
        <div><p>{url}</p></div>
        <div><ReactPlayer url={url} light={props.url}/></div>

        
    </div>
  );
}




export default NasaDay;

