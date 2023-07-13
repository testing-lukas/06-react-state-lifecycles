import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

const CounterButton = props => {
  const { parentCount = 0 } = props;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Component did mount
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  // Component did update - dependency list/array
  useEffect(() => {
    console.log("Component did update (parentCount dependency)");
  }, [parentCount]);

  // Component did unmount
  useEffect(() => {
    return () => {
      console.log("Component did unmount");
    };
  }, []);

  return (
    <div>
      <h2>{`Parent: ${parentCount}`}</h2>
      <Button onClick={increment}>{`Count: ${count}`}</Button>
      <input type="text" name="" id="" />
    </div>
  );
};

export default CounterButton;
