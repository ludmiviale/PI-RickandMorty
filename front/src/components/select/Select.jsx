const Select = ({ name, values, handleChange }) => {
  return (
    <select name={name} onChange={handleChange}>
      {values.map((value) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
