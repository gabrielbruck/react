import React from "react";

function Travel(props) {
  return (
    <li className="travelFinder">
      <img className="location-image" src={props.imageUrl} alt={props.name} />
      <br></br>
      <span>{props.name} </span>
      <br></br>
      <a href={props.location}> Click here for Google Maps:</a>
    </li>
  );
}

export default Travel;
