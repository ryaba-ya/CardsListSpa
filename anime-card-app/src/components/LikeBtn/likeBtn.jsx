import React from 'react';

const Like = ({ liked, onClick }) => {
  return (
    <div
      className={`like-icon ${liked ? 'liked' : ''}`}
      onClick={onClick}
    >
      <i className="fa fa-heart"></i>
    </div>
  );
};

export default Like;
