import React, { useState } from 'react';
import axios from 'axios';

const DeleteUsersForm = () => {
  const [userIds, setUserIds] = useState('');

  const handleChange = (event) => {
    setUserIds(event.target.value);
  };

  const userIdArray = userIds.split(',').map(id => parseInt(id.trim()));
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.delete('http://localhost:5000/delete/users', {
        data: {
          user_ids: userIdArray,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      alert('Users deleted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete users.');
    }
  };
console.log(userIdArray);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        User IDs (comma separated):
        <input type="text" value={userIds} onChange={handleChange} />
      </label>
      <button type="submit">Delete Users</button>
    </form>
  );
};

export default DeleteUsersForm;
