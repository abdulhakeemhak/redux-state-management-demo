import React, { useState } from "react";
import { addUser } from "../redux/UserSlice";
import { useDispatch } from "react-redux";

function AddUser() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleUser() {
    if (input.trim()) {
      dispatch(addUser(input.trim()));
      setInput(""); 
    }
  }

  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleUser();
    }
  }

  return (
    <div className="container">
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Enter a Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress} 
      />
      <button onClick={handleUser}>Add New User</button>
    </div>
  );
}

export default AddUser;
