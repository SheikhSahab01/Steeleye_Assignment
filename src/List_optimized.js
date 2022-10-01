import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
// const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
//   return (
//     <li
//       style={{
//         backgroundColor: isSelected ? "green" : "red",
//         cursor: "pointer", // add css style to look the list item is clickable
//       }}
//       onClick={() => onClickHandler(index)} // wrong way of calling function
//     >
//       {text}
//     </li>
//   );
// };

// WrappedSingleListItem.propTypes = {
//   index: PropTypes.number,
//   isSelected: PropTypes.bool,
//   onClickHandler: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired,
// };

// const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(); // error setSelectedIndex is not a func

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => setSelectedIndex(index); // code refactor

  return (
    <ul style={{ textAlign: "left" }}>
      {items?.map(
        (
          item,
          index // use optional chaining to prevent the code crash when items value is not provided.
        ) => (
          <li
            style={{
              backgroundColor: selectedIndex === index ? "green" : "red",
              cursor: "pointer", // add css style to look the list item is clickable
            }}
            onClick={() => handleClick(index)} // wrong way of calling function
            key={index}
          >
            {item.text || ``}
          </li>
        )
      )}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      // use .arrayOf instead .array      // .shapeOf is not func, use .shape
      text: PropTypes.string.isRequired,
    })
  ),
};

// WrappedListComponent.defaultProps = {
//   items: null,
// };

const List = memo(WrappedListComponent);

export default List;


// note : we can use react virtualization if list items are way too many and 
// re-render can cause slow process processing we can also use a npm package called "react-window"  