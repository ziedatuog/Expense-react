import React,{ useState } from 'react';
 
 
 import NewExpense from "./components/NewExpense/NewExpense"
 
 import ExpenseS from './components/Expenses/Expenses';
 import './App.css';


const DummyExpenses = [
  {
  id:'e1',
  title: "Toilet Paper",
  date: new Date(2022, 5, 20),
  amount: 294.67 
},
{
  id:'e2',
  title: "New TV",
  date:new Date(2023, 2, 18),
  amount: 294.67 
},
{
  id:'e3',
  title: "Car insurance",
  date:new Date(2020, 1, 10),
  amount: 294.67 
},
];

const App = () => {
const [Expenses, setExpenses] = useState(DummyExpenses);

const addExpenseHandler = (expense) => {
  
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses]
  });
};


  return (
     <div >
      <h1 className='App'>Expenses</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseS items={Expenses} />
     </div>
  );
}

export default App;
