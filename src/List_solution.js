import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
    return (
      <li
        style={{
          backgroundColor: isSelected ? "green" : "red",
          cursor: "pointer", // add css style to look the list item is clickable
        }}
        onClick={() => onClickHandler(index)} // wrong way of calling function
      >
        {text}
      </li>
    );
  };

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
    const [selectedIndex, setSelectedIndex] = useState(); // error setSelectedIndex is not a func

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items?.map(
        (
          item,
          index // use optional chaining to prevent the code crash when items value is not provided.
        ) => (
          <SingleListItem
            onClickHandler={() => handleClick(index)}
            text={item.text || ""} // if text field is not provided in json
            index={index}
            isSelected={selectedIndex === index} // correct the condition isSelected for the list item
            key={index} // unique key prop
          />
        )
      )}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List2 = memo(WrappedListComponent);

export default List2;