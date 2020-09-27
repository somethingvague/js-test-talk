import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={increment}>
        +
      </Button>
      <Button variant="contained" color="second" onClick={decrement}>
        -
      </Button>
      <p>Count: {count}</p>
    </>
  );
};

export default Counter;
