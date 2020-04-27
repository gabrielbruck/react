import React from "react";
import List from "./git_list";

const ComplexList = () => (
  <ul>
    {List.map((item) => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.first_name}</div>
        <div>{item.email}</div>
        <div>{item.country}</div>
      </li>
    ))}
  </ul>
);
export default ComplexList;
