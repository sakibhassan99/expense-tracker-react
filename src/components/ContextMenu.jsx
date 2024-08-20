export default function ContextMenu({
  expenses,
  setExpenses,
  menuPosition,
  setMenuPosition,
  rowId,
  setExpense,
  setEditingRowId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setEditingRowId(rowId);
          setExpense({ title, category, amount });
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
