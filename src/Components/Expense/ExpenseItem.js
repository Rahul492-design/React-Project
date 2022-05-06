import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.Description);
  const changeData = () => {
    setTitle("updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.Price}</div>
      </div>
      <button onClick={changeData}>Change Data</button>
    </Card>
  );
}
