import ExpenseData from "../ExpenseData";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm ExpenseData={ExpenseData} />
        <ExpenseTable ExpenseData={ExpenseData} />
      </div>
    </main>
  );
}

export default App;
