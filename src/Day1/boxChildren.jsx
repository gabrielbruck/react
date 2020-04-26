import React from "react";

function boxChildren(props) {
  return <div className={props.class}>{props.children}</div>;
}

export default boxChildren;
