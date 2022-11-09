import React, { useState } from "react";
import Table from "./component/Table";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className={`count-${count}`}>{count}</div>
      <button onClick={handleCount}>Click</button>
      <Table/>

    </>
  );
};

export default Count;
