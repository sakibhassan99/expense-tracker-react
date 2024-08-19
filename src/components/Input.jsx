export default function Input({ id, label, value, type, eventHandler, error }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        value={value}
        type={type}
        onChange={eventHandler}
      />
      <p className="errors">{error}</p>
    </>
  );
}
