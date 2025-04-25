import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, editUser } from "./UserSlice";
import "./Redux.css";

function ViewUser() {
  const usersData = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');


  function handleDelUser(index) {
    dispatch(deleteUser(index));
  }

  function handleEditUser(index) {
    if (newName.trim() === '') {
      setError('Name cannot be empty!');
      return;
    }
  
    dispatch(editUser({ index, newName }));
    setEditIndex(null);
    setNewName('');
    setError('');
  }
  

  return (
    <div className="container">
      <h1>View Users</h1>
      <div className="user-list">
        {usersData.map((user, index) => (
          <div key={index} className="user-item">
            {editIndex === index ? (
              <>
                <input 
                  type="text" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)}
                  className="edit-input"
                  placeholder="Enter new name"
                />
                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                <button className="save-btn" onClick={() => handleEditUser(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <h2>{index + 1} - {user}</h2>
                <button className="edit-btn" onClick={() => setEditIndex(index)}>
                  Edit
                </button>
              
                <button className="delete-btn" onClick={() => handleDelUser(index)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewUser;
