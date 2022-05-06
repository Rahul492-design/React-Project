import "./App.css";
import ExpenseItem from "./Components/Expense/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expense = [
    {
      id: 1,
      Date: new Date(2022, 1, 26),
      Description: "Car Insurernce1",
      Price: 255.86,
    },
    {
      id: 2,
      Date: new Date(2022, 1, 27),
      Description: "Car Insurernce2",
      Price: 355.86,
    },
    {
      id: 3,
      Date: new Date(2022, 1, 28),
      Description: "Car Insurernce3",
      Price: 455.86,
    },
    {
      id: 4,
      Date: new Date(2022, 1, 29),
      Description: "Car Insurernce4",
      Price: 555.86,
    },
  ];
  return (
    <div>
      <NewExpense />
      <ExpenseItem
        Date={expense[0].Date}
        Description={expense[0].Description}
        Price={expense[0].Price}
      ></ExpenseItem>
      <ExpenseItem
        Date={expense[1].Date}
        Description={expense[1].Description}
        Price={expense[1].Price}
      ></ExpenseItem>
      <ExpenseItem
        Date={expense[2].Date}
        Description={expense[2].Description}
        Price={expense[2].Price}
      ></ExpenseItem>
      <ExpenseItem
        Date={expense[3].Date}
        Description={expense[3].Description}
        Price={expense[3].Price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
