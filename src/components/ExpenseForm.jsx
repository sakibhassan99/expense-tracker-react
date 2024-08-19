import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

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
        <Input
          label={"Title"}
          id={"title"}
          type={"text"}
          value={expense.title}
          eventHandler={(e) =>
            setExpense((prevStage) => ({ ...prevStage, title: e.target.value }))
          }
          error={errors.title}
        />
      </div>
      <div className="input-container">
        <Select
          label={"Category"}
          id={"category"}
          eventHandler={(e) =>
            setExpense((prevStage) => ({
              ...prevStage,
              category: e.target.value,
            }))
          }
          value={expense.category}
          defaultOption={"Select Category"}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          error={errors.category}
        />
      </div>
      <div className="input-container">
        <Input
          label={"Amount"}
          id={"amount"}
          type={"number"}
          value={expense.amount}
          eventHandler={(e) =>
            setExpense((prevStage) => ({
              ...prevStage,
              amount: e.target.value,
            }))
          }
          error={errors.amount}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
