import React from 'react';
import PropTypes from 'prop-types';
import {allComplete} from './style';

const TodoButton = (props) => {

  const { label, onClick }  = props;
  return (
    <>
      <input type="button" 
      style={allComplete} 
      value={label} 
      onClick={onClick}
      />
    </>
  );
};
TodoButton.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  style: PropTypes.objectOf.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoButton;
