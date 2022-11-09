import React, { useState } from "react";

const Form = () => {
  const [type, setType] = useState("yes");
  const [gender, setGender] = useState("Male");
  const changeStat = () => {
    setType("No");
  };
  const handleClick = (role) => {
    setTimeout(() => {
      setGender(role);
    }, 2000);
  };
  return (
    <div>
      <p>{type}</p>
      <button onClick={changeStat}>Change</button>
      <button name="gender" onClick={() => handleClick("Male")}>Male</button>
      <button name="gender" onClick={() => handleClick("Female")}>Female</button>
      <div>select {gender}</div>
    </div>
  );
};

export default Form;
