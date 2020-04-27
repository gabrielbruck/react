import React from "react";
import List from "./git_list";

const ComplexList = () => (
  <ul>
    {List.map((item) => (
      <li key={item.id}>
        <div>Id: {item.id}</div>
        <div>First Name: {item.first_name}</div>
        <div>Email: {item.email}</div>
        <div>Country: {item.country}</div>
      </li>
    ))}
  </ul>
);
export default ComplexList;
