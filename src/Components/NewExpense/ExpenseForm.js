import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setamount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: event.target.value };
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: event.target.value };
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(formData);
    setTitle("");
    setamount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
