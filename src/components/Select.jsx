export default function Select({
  label,
  id,
  value,
  eventHandler,
  defaultOption,
  options,
  error,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} value={value} onChange={eventHandler}>
        <option value="" hidden>
          {defaultOption}
        </option>

        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="errors">{error}</p>
    </>
  );
}
