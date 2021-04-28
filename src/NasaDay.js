import React from "react";
import ReactPlayer from "react-player"

function NasaDay(props) {

    const {data} = props
const {title,date,explanation,url} = props


  return (
    <div className="NasaDay">
        <div><h1>{data.title}</h1></div>
        <div><h3>{data.date}</h3></div>
        <div><p>{data.explanation}</p></div>
        <div><p>{data.url}</p></div>
        <div><ReactPlayer url={data.url} light={props.url}/></div>

        
    </div>
  );
}




export default NasaDay;

