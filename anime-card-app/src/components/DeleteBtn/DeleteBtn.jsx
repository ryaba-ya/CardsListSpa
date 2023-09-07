import React from 'react';

const Delete = ({ onClick }) => {
  return (
    <div className="delete-icon" onClick={onClick}>
      <i className="fa fa-trash"></i>
    </div>
  );
};

export default Delete;
