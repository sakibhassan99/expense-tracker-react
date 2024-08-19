export default function ExpenseForm({ ExpenseData }) {
  return (
    <form
      className="expense-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
          ExpenseData[key] = value;
        }
      }}
    >
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
