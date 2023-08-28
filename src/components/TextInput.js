import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <input type="text" placeholder="Search" value={value} onChange={onChange} />
  );
};

export default TextInput;
