import React, { useState } from "react";

const SaveInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handclick() {
    console.log("this is clickded");
  }

  return (
    <>

      <button onClick={handclick}>Add it to the list</button>
    </>
  );
};

export default SaveInput;
