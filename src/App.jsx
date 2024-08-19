import { useState } from "react";
import ExpenseData from "../ExpenseData";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
      </div>
    </main>
  );
}

export default App;
