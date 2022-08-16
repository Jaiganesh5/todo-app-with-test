import React from "react";

function FilterButton(props) {
  return (
    <button
      
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
      data-testid = "filter-btn"
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;