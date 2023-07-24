import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle]= useState(props.title)
  // console.log("ExpensItem evaluted by react");
  // const clickHandler = ()=> {
  //    setTitle('updated!')
  //    console.log(title)
  //}

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item_price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
