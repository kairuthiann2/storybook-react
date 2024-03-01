import React from 'react';
import './Input.css';

function Input (props) {
    const { category ='large', ...rest } = props
  return (
    <Input className={`Sizes ${category}`} {...rest} />


  )
}

export default Input