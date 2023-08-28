import React from "react";
const FilterButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary w-100" onClick={onClick}>
      Filter
    </button>
  );
};

export default FilterButton;
