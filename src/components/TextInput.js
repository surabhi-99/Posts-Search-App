import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
