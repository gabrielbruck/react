import React from "react";

function Banner(props) {
  const { imageUrl, title, text1, text2, text3 } = props;
  return (
    <span className="banner-column">
      <img className="banner-image" src={imageUrl} alt={title} />
      <h5>{title}</h5>
      <div className="banner-text">{text1}</div>
      <div className="banner-text">{text2}</div>
      <div className="banner-text">{text3}</div>
    </span>
  );
}

export default Banner;
