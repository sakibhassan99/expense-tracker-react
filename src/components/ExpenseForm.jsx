import { useState } from "react";

export default function ExpenseForm({ expenses, setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      {
        minLength: 2,
        message: "Minimum length of title should be 2 characters",
      },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [{ required: true, message: "Please enter amount" }],
  };

  const validateInputs = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  return (
    <form
      className="expense-form"
      onSubmit={(e) => {
        e.preventDefault();

        const validate = validateInputs(expense);
        if (Object.keys(validate).length) return;

        setExpenses((prevState) => [
          ...prevState,
          { ...expense, id: crypto.randomUUID() },
        ]);
        setExpense({ title: "", category: "", amount: "" });
      }}
    >
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((prevStage) => ({ ...prevStage, title: e.target.value }))
          }
        />
        <p className="errors">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prevStage) => ({
              ...prevStage,
              category: e.target.value,
            }))
          }
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="errors">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense((prevStage) => ({
              ...prevStage,
              amount: e.target.value,
            }))
          }
        />
        <p className="errors">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
