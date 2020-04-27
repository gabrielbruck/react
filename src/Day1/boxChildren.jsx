import React from "react";

function BoxChildren(props) {
  return <div className={props.class}>{props.children}</div>;
}

export default BoxChildren;
