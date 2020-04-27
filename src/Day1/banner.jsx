import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { roundedCircle } from "react-bootstrap";

function Banner(props) {
  const { imageUrl, title, text1, text2, text3 } = props;
  return (
    <span className="banner-column">
      {/* <Col xs={6} md={6} className="banner-column"> */}
      <img className="banner-image" src={imageUrl} alt={title} />
      <h5>{title}</h5>

      <div className="banner-text">{text1}</div>
      <div className="banner-text">{text2}</div>
      <div className="banner-text">{text3}</div>
      {/* </Col> */}
    </span>
  );
}

export default Banner;
