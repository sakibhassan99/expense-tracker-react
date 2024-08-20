import { useState } from "react";
import ExpenseData from "../ExpenseData";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useState("");
  const [expenses, setExpenses] = useState(ExpenseData);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
