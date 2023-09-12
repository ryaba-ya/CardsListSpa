import React, {useState} from 'react';

export default function Button (props)
{
  const[liked,setLiked]= useState(false);
  const handleChange = () => {
    setLiked(!liked);
  }
  return (
    <button {...props} onClick={handleChange}>
      {liked ? "liked":"Disliked"}
    </button>
  )

}


