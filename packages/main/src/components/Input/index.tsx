import React from 'react';

export type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ value, ...rest }) => {
  return <input data-testid="input" value={value} {...rest} />;
};

export default Input;
